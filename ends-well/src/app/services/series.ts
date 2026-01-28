import { Injectable, signal, computed } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { TvSeries } from '../models/tv-series.model';
import { MOCK_SERIES } from '../data/mock-series';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  // Signal-based state management
  private _seriesList = signal<TvSeries[]>([...MOCK_SERIES]);
  private _isLoading = signal(false);

  // Read-only signals for components
  readonly seriesList = this._seriesList.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();

  // Computed signals for filtered views
  readonly topRatedSeries = computed(() => {
    return [...this._seriesList()]
      .sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0))
      .slice(0, 5);
  });

  readonly featuredSeries = computed(() => {
    return this._seriesList()
      .filter((s) => s.ended && !s.wasCanceled)
      .slice(0, 5);
  });

  /**
   * Get all series
   */
  getSeries(): Observable<TvSeries[]> {
    return of(this._seriesList());
  }

  /**
   * Get a series by ID
   */
  getSeriesById(id: string): TvSeries | undefined {
    return this._seriesList().find((series) => series.id === id);
  }

  /**
   * Search series by title or description
   */
  searchSeries(query: string): Observable<TvSeries[]> {
    if (!query.trim()) {
      return of(this._seriesList());
    }

    const lowerQuery = query.toLowerCase();
    const results = this._seriesList().filter(
      (series) =>
        series.title.toLowerCase().includes(lowerQuery) ||
        series.description?.toLowerCase().includes(lowerQuery) ||
        series.genres?.some((g) => g.toLowerCase().includes(lowerQuery))
    );

    // Simulate network delay for realistic UX
    return of(results).pipe(delay(300));
  }

  /**
   * Rate a series (updates the average rating)
   */
  rateSeries(seriesId: string, rating: number): TvSeries | null {
    let updatedSeries: TvSeries | null = null;

    this._seriesList.update((currentSeries) => {
      return currentSeries.map((series) => {
        if (series.id !== seriesId) return series;

        const totalRatings = (series.totalRatings || 0) + 1;
        const currentTotal =
          (series.averageRating || 0) * (series.totalRatings || 0);
        const averageRating = (currentTotal + rating) / totalRatings;

        updatedSeries = {
          ...series,
          averageRating: parseFloat(averageRating.toFixed(1)),
          totalRatings,
          updatedAt: new Date(),
        };

        return updatedSeries;
      });
    });

    return updatedSeries;
  }
}
