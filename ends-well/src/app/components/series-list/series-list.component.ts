import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { SeriesService } from '../../services/series';
import { toSignal } from '@angular/core/rxjs-interop';
import { TvSeries } from '../../models/tv-series.model';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatGridListModule,
    MatChipListbox,
    MatChipOption
  ],
  template: `
    <div class="container">
      <h1>TV Series Finales</h1>
      <p class="subtitle">Rate how well TV series wrapped up their stories</p>
      
      <div class="grid-container">
        <mat-grid-list [cols]="gridColumns()" rowHeight="1:1.3" gutterSize="16">
          <mat-grid-tile *ngFor="let series of seriesList()">
            <mat-card class="series-card">
              <mat-card-header>
                <mat-card-title>{{ series.title }}</mat-card-title>
                <mat-card-subtitle>
                  {{ series.yearStarted }} - {{ series.yearEnded || 'Present' }}
                  <span class="status-badge" [class.ended]="series.ended" [class.ongoing]="!series.ended">
                    {{ series.ended ? 'Ended' : 'Ongoing' }}
                  </span>
                </mat-card-subtitle>
              </mat-card-header>
              
              <mat-card-content>
                <div class="rating-container">
                  <div class="rating">
                    <span class="rating-value">{{ series.averageRating.toFixed(1) }}</span>
                    <div class="rating-stars">
                      <mat-icon 
                        *ngFor="let i of [1, 2, 3, 4, 5]; let index = index"
                        [class.filled]="index * 2 <= series.averageRating" 
                        [class.half]="index * 2 - 1 <= series.averageRating && series.averageRating < index * 2">
                        {{ getStarIcon(index, series.averageRating) }}
                      </mat-icon>
                    </div>
                    <span class="rating-count">({{ series.totalRatings }} ratings)</span>
                  </div>
                </div>
                
                <div class="genres">
                  <mat-chip-listbox>
                    <mat-chip-option 
                      *ngFor="let genre of series.genres" 
                      [style.background-color]="getGenreColor(genre)">
                      {{ genre }}
                    </mat-chip-option>
                  </mat-chip-listbox>
                </div>
                
                <p class="description" *ngIf="series.description">
                  {{ series.description }}
                </p>
              </mat-card-content>
              
              <mat-card-actions>
                <button mat-button>
                  <mat-icon>info</mat-icon>
                  Details
                </button>
                <button mat-button>
                  <mat-icon>share</mat-icon>
                  Share
                </button>
              </mat-card-actions>
            </mat-card>
          </mat-grid-tile>
        </mat-grid-list>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px;
    }
    
    .container {
      max-width: 1400px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #3f51b5;
    }
    
    .subtitle {
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
    
    .series-card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .series-card mat-card-header {
      flex-shrink: 0;
      padding-bottom: 8px;
    }
    
    .series-card mat-card-content {
      flex-grow: 1;
      overflow: hidden;
      padding: 0 16px 16px;
    }
    
    .rating-container {
      display: flex;
      align-items: center;
      margin: 8px 0;
    }
    
    .rating {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .rating-value {
      font-size: 1.8rem;
      font-weight: bold;
      color: #ff9800;
    }
    
    .rating-stars {
      display: flex;
      color: #e0e0e0;
    }
    
    .rating-stars .filled {
      color: #ffc107;
    }
    
    .rating-stars .half {
      background: linear-gradient(90deg, #ffc107 50%, #e0e0e0 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .rating-count {
      color: #757575;
      font-size: 0.9rem;
    }
    
    .genres {
      margin: 8px 0;
    }
    
    .genres mat-chip {
      margin: 2px;
      font-size: 12px;
      color: white;
    }
    
    .description {
      font-size: 14px;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .series-card mat-card-actions {
      display: flex;
      justify-content: space-between;
      padding: 8px 16px 16px;
      margin: 0;
      margin-top: auto;
    }
    
    .series-card mat-card-actions button {
      font-size: 12px;
    }
    
    .series-card mat-card-actions mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
    
    .status-badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 10px;
      font-size: 10px;
      font-weight: 500;
      margin-left: 8px;
      text-transform: uppercase;
    }
    
    .status-badge.ended {
      background-color: #e0e0e0;
      color: #424242;
    }
    
    .status-badge.ongoing {
      background-color: #c8e6c9;
      color: #1b5e20;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 12px;
      }
      
      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class SeriesListComponent implements OnInit {
  private seriesService = inject(SeriesService);
  
  // Get series list from the service's signal
  seriesList = this.seriesService.seriesList;
  gridColumns = signal(3);
  private resizeObserver: ResizeObserver | null = null;
  
  // Track window resize for responsive layout
  private resizeListener = () => this.updateGrid(window.innerWidth);

  ngOnInit(): void {
    // Set up resize observer for responsive grid
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.updateGrid(entry.contentRect.width);
      }
    });

    const container = document.querySelector('.container');
    if (container) {
      this.resizeObserver.observe(container);
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private updateGrid(width: number): void {
    let columns = 1;
    if (width >= 1280) {
      columns = 4;
    } else if (width >= 960) {
      columns = 3;
    } else if (width >= 600) {
      columns = 2;
    }
    this.gridColumns.set(columns);
  }

  getStarIcon(index: number, rating: number): string {
    if (index * 2 <= rating) {
      return 'star';
    } else if (index * 2 - 1 <= rating && rating < index * 2) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }

  getGenreColor(genre: string): string {
    const colors = [
      '#3f51b5', '#673ab7', '#9c27b0', '#e91e63', '#f44336',
      '#ff5722', '#ff9800', '#ffc107', '#8bc34a', '#4caf50'
    ];
    const hash = genre.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }
}
