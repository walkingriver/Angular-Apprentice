import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

import { SeriesService } from '../../services/series';
import { TvSeries } from '../../models/tv-series.model';

@Component({
  selector: 'app-series-detail',
  imports: [
    RouterModule,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatChipsModule,
  ],
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss'],
})
export class SeriesDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly seriesService = inject(SeriesService);

  // Signals
  series = signal<TvSeries | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  // Computed values
  rating = computed(() => {
    const series = this.series();
    return series?.averageRating?.toFixed(1) ?? 'N/A';
  });

  releaseYear = computed(() => {
    const series = this.series();
    if (!series?.yearStarted) return '';
    if (series.yearEnded) {
      return `${series.yearStarted}–${series.yearEnded}`;
    }
    return `${series.yearStarted}–Present`;
  });

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      const seriesId = params.get('id');
      if (seriesId) {
        this.loadSeriesDetails(seriesId);
      }
    });
  }

  loadSeriesDetails(seriesId?: string): void {
    const id = seriesId || this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.error.set('No series ID provided');
      this.loading.set(false);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    // Simulate network delay for realistic UX
    setTimeout(() => {
      const foundSeries = this.seriesService.getSeriesById(id);
      if (foundSeries) {
        this.series.set(foundSeries);
        this.error.set(null);
      } else {
        this.error.set(`Series with ID "${id}" not found`);
      }
      this.loading.set(false);
    }, 500);
  }

  onWatchTrailer(): void {
    const series = this.series();
    if (series?.trailerUrl) {
      window.open(series.trailerUrl, '_blank');
    } else {
      this.snackBar.open('Trailer not available', 'Close', { duration: 3000 });
    }
  }

  onAddToFavorites(): void {
    const series = this.series();
    if (series) {
      this.snackBar.open(`Added "${series.title}" to favorites`, 'Undo', {
        duration: 3000,
      });
    }
  }

  onAddToWatchlist(): void {
    const series = this.series();
    if (series) {
      this.snackBar.open(`Added "${series.title}" to watchlist`, 'Undo', {
        duration: 3000,
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
