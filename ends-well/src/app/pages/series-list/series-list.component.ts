import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

// Models
interface Series {
  id: number;
  title: string;
  year: number;
  rating: number;
  image: string;
  genres: string[];
  seasons: number;
}

interface SortOption {
  value: string;
  label: string;
}

const ITEMS_PER_PAGE = 12;

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTooltipModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  template: `
    <div class="series-list-container">
      <!-- Search and Filter Section -->
      <div class="search-container">
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>Search series...</mat-label>
          <input matInput [(ngModel)]="searchQuery" (input)="onSearch()" placeholder="Search by title, genre, etc.">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" class="sort-field">
          <mat-label>Sort by</mat-label>
          <mat-select [(value)]="currentSort" (selectionChange)="onSortChange()">
            @for (option of sortOptions; track option.value) {
              <mat-option [value]="option.value">
                {{ option.label }}
              </mat-option>
            }
          </mat-select>
        </mat-form-field>
      </div>

      <!-- Loading State -->
      @if (isLoading()) {
        <div class="loading-container">
          <mat-spinner diameter="50"></mat-spinner>
          <p>Loading series...</p>
        </div>
      }
      @else {
        <!-- Series Grid -->
        <div class="series-grid">
          @for (series of paginatedSeries(); track series.id) {
            <mat-card class="series-card">
              <div class="card-image" [style.backgroundImage]="'url(' + series.image + ')'">
                <div class="card-rating">
                  <mat-icon>star</mat-icon>
                  <span>{{ series.rating }}</span>
                </div>
                <div class="card-actions">
                  <button mat-icon-button color="primary" [matTooltip]="'Add to watchlist'" (click)="toggleWatchlist(series)">
                    <mat-icon>{{ isInWatchlist(series.id) ? 'bookmark_added' : 'bookmark_add' }}</mat-icon>
                  </button>
                </div>
              </div>
              <mat-card-content>
                <h3 class="series-title" [matTooltip]="series.title">{{ series.title }}</h3>
                <div class="series-meta">
                  <span class="year">{{ series.year }}</span>
                  <span class="seasons">{{ series.seasons }} seasons</span>
                </div>
                <div class="genres">
                  @for (genre of series.genres; track genre; let last = $last) {
                    <span class="genre">{{ genre }}{{ !last ? ' •' : '' }}</span>
                  }
                </div>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary" [routerLink]="['/series', series.id]">
                  View Details
                </button>
              </mat-card-actions>
            </mat-card>
          }
        </div>

        <!-- Pagination -->
        <mat-paginator
          [length]="filteredSeries().length"
          [pageSize]="pageSize()"
          [pageIndex]="currentPage()"
          [pageSizeOptions]="[12, 24, 48]"
          (page)="onPageChange($event)"
          showFirstLastButtons
          aria-label="Select page">
        </mat-paginator>
      }
    </div>
  `,
  styles: [`
    .series-list-container {
      padding: 24px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .search-container {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    .search-field {
      flex: 1;
      min-width: 250px;
    }

    .sort-field {
      width: 200px;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px;
      gap: 16px;
    }

    .series-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
      margin-bottom: 24px;
    }

    .series-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      }
    }

    .card-image {
      height: 0;
      padding-top: 150%;
      background-size: cover;
      background-position: center;
      position: relative;
      border-radius: 4px 4px 0 0;
    }

    .card-rating {
      position: absolute;
      top: 8px;
      left: 8px;
      background: rgba(0, 0, 0, 0.7);
      color: #ffd700;
      padding: 4px 8px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .card-actions {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      gap: 4px;
    }

    .series-title {
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0 0 8px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .series-meta {
      display: flex;
      gap: 12px;
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .genres {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 8px;
      font-size: 0.85rem;
      color: #888;
    }

    mat-card-actions {
      margin-top: auto;
      padding: 16px;
      display: flex;
      justify-content: flex-end;
    }

    @media (max-width: 600px) {
      .series-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SeriesListComponent implements OnInit {
  // State
  isLoading = signal<boolean>(true);
  searchQuery = '';
  sortOptions = [
    { value: 'title_asc', label: 'Title (A-Z)' },
    { value: 'title_desc', label: 'Title (Z-A)' },
    { value: 'rating_desc', label: 'Highest Rated' },
    { value: 'year_desc', label: 'Newest First' },
    { value: 'year_asc', label: 'Oldest First' },
  ] as const;
  currentSort: 'title_asc' | 'title_desc' | 'rating_desc' | 'year_desc' | 'year_asc' = 'rating_desc';
  pageSize = signal<number>(12);
  currentPage = signal<number>(0);

  // Data
  seriesList = signal<Series[]>([]);
  watchlist = signal<number[]>([]);

  // Computed values
  filteredSeries = computed(() => {
    let result = [...this.seriesList()];
    
    // Apply search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(series => 
        series.title.toLowerCase().includes(query) ||
        series.genres.some((g: string) => g.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    const sortFn = (a: Series, b: Series): number => {
      switch (this.currentSort) {
        case 'title_asc':
          return a.title.localeCompare(b.title);
        case 'title_desc':
          return b.title.localeCompare(a.title);
        case 'rating_desc':
          return b.rating - a.rating;
        case 'year_desc':
          return b.year - a.year;
        case 'year_asc':
          return a.year - b.year;
        default:
          return 0;
      }
    };

    return [...result].sort(sortFn);
  });

  paginatedSeries = computed(() => {
    const startIndex = this.currentPage() * this.pageSize();
    return this.filteredSeries().slice(startIndex, startIndex + this.pageSize());
  });

  totalPages = computed(() => 
    Math.ceil(this.filteredSeries().length / this.pageSize())
  );

  // Lifecycle hooks
  ngOnInit(): void {
    this.loadSeries();
  }

  // Methods
  private loadSeries(): void {
    this.isLoading.set(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockSeries: Series[] = [
        {
          id: 1,
          title: 'Breaking Bad',
          year: 2008,
          rating: 9.5,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Breaking+Bad',
          genres: ['Drama', 'Crime', 'Thriller'],
          seasons: 5
        },
        {
          id: 2,
          title: 'Better Call Saul',
          year: 2015,
          rating: 8.9,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Better+Call+Saul',
          genres: ['Drama', 'Crime'],
          seasons: 6
        },
        {
          id: 3,
          title: 'The Wire',
          year: 2002,
          rating: 9.3,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Wire',
          genres: ['Drama', 'Crime', 'Thriller'],
          seasons: 5
        },
        {
          id: 4,
          title: 'The Sopranos',
          year: 1999,
          rating: 9.2,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Sopranos',
          genres: ['Drama', 'Crime'],
          seasons: 6
        },
        {
          id: 5,
          title: 'Game of Thrones',
          year: 2011,
          rating: 9.2,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Game+of+Thrones',
          genres: ['Drama', 'Adventure', 'Fantasy'],
          seasons: 8
        },
        {
          id: 6,
          title: 'The Crown',
          year: 2016,
          rating: 8.7,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Crown',
          genres: ['Drama', 'History'],
          seasons: 5
        },
        {
          id: 7,
          title: 'Stranger Things',
          year: 2016,
          rating: 8.7,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Stranger+Things',
          genres: ['Drama', 'Fantasy', 'Horror'],
          seasons: 4
        },
        {
          id: 8,
          title: 'The Mandalorian',
          year: 2019,
          rating: 8.7,
          image: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=The+Mandalorian',
          genres: ['Action', 'Adventure', 'Sci-Fi'],
          seasons: 3
        }
      ];

      this.seriesList.set(mockSeries);
      this.isLoading.set(false);
    }, 1000);
  }

  onSearch(): void {
    this.currentPage.set(0);
  }

  onSortChange(): void {
    this.currentPage.set(0);
  }

  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  toggleWatchlist(series: Series): void {
    const currentWatchlist = this.watchlist();
    if (this.isInWatchlist(series.id)) {
      this.watchlist.set(currentWatchlist.filter(id => id !== series.id));
    } else {
      this.watchlist.set([...currentWatchlist, series.id]);
    }
  }

  isInWatchlist(seriesId: number): boolean {
    return this.watchlist().includes(seriesId);
  }
}
