import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { TmdbSearchResponse, TmdbTvSeries, TmdbConfiguration } from '../models/tv-series.model';
import { TvSeries } from '../models/tv-series.model';

interface ResourceState<T> {
  data: T;
  loading: boolean;
  error: Error | null;
}

function createResource<T>(initialValue: T) {
  const state = signal<ResourceState<T>>({
    data: initialValue,
    loading: false,
    error: null
  });

  return {
    value: () => state().data,
    loading: () => state().loading,
    error: () => state().error,
    setData: (data: T) => state.update(s => ({ ...s, data })),
    setLoading: (loading: boolean) => state.update(s => ({ ...s, loading })),
    setError: (error: Error | null) => state.update(s => ({ ...s, error }))
  };
}

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private _imageBaseUrl = 'https://image.tmdb.org/t/p';
  
  private http = inject(HttpClient);
  
  // Create HTTP resources for different endpoints
  private readonly searchResource = createResource<TmdbSearchResponse<TmdbTvSeries>>({
    results: [],
    page: 0,
    total_pages: 0,
    total_results: 0
  });

  // Signal for TV show ID
  private tvShowId = signal<number | null>(null);
  
  private readonly tvShowResource = createResource<TmdbTvSeries>({} as TmdbTvSeries);

  // Configuration resource
  private readonly configResource = createResource<TmdbConfiguration>({} as TmdbConfiguration);
  
  // Signal for search query
  private searchQuery = signal('');
  private searchPage = signal(1);

  /**
   * Search for TV shows by name
   */
  searchTvShows(query: string, page: number = 1): void {
    this.searchQuery.set(query);
    this.searchPage.set(page);
    
    if (!query) {
      this.searchResource.setData({ results: [], page: 0, total_pages: 0, total_results: 0 });
      return;
    }

    this.searchResource.setLoading(true);
    const params = new URLSearchParams({
      api_key: this.apiKey,
      query: query,
      page: page.toString(),
      language: 'en-US',
      include_adult: 'false'
    });

    this.http.get<TmdbSearchResponse<TmdbTvSeries>>(
      `${this.baseUrl}/search/tv?${params.toString()}`
    ).subscribe({
      next: (response) => {
        this.searchResource.setData(response);
        this.searchResource.setLoading(false);
      },
      error: (error) => {
        this.searchResource.setError(error);
        this.searchResource.setLoading(false);
      }
    });
  }

  getSearchResults(): TmdbSearchResponse<TmdbTvSeries> {
    return this.searchResource.value();
  }

  getMappedSearchResults(): Observable<{ results: TvSeries[], totalPages: number }> {
    return of(this.searchResource.value()).pipe(
      map((response) => ({
        results: response.results.map(series => this.mapTmdbToTvSeries(series)),
        totalPages: response.total_pages
      }))
    );
  }

  /**
   * Get details for a specific TV show by TMDb ID
   */
  getTvShowDetails(id: number): void {
    this.tvShowId.set(id);
    
    if (id === null) {
      this.tvShowResource.setData({} as TmdbTvSeries);
      return;
    }

    this.tvShowResource.setLoading(true);
    const params = new URLSearchParams({
      api_key: this.apiKey,
      language: 'en-US',
      append_to_response: 'credits,external_ids,videos,images',
      include_image_language: 'en,null'
    });

    this.http.get<TmdbTvSeries>(
      `${this.baseUrl}/tv/${id}?${params.toString()}`
    ).subscribe({
      next: (response) => {
        this.tvShowResource.setData(response);
        this.tvShowResource.setLoading(false);
      },
      error: (error) => {
        this.tvShowResource.setError(error);
        this.tvShowResource.setLoading(false);
      }
    });
  }

  getTvShow(): TmdbTvSeries {
    return this.tvShowResource.value();
  }

  getMappedTvShow(): Observable<TvSeries> {
    return of(this.tvShowResource.value()).pipe(
      map(series => this.mapTmdbToTvSeries(series))
    );
  }

  /**
   * Get popular TV shows
   */
  private readonly popularPage = signal(1);
  private readonly popularResource = createResource<TmdbSearchResponse<TmdbTvSeries>>({
    results: [],
    page: 0,
    total_pages: 0,
    total_results: 0
  });

  getPopularTvShows(page: number = 1): Observable<{ results: TvSeries[], totalPages: number }> {
    this.popularPage.set(page);
    this.popularResource.setLoading(true);
    
    const params = new URLSearchParams({
      api_key: this.apiKey,
      page: page.toString(),
      language: 'en-US'
    });

    this.http.get<TmdbSearchResponse<TmdbTvSeries>>(
      `${this.baseUrl}/tv/popular?${params.toString()}`
    ).subscribe({
      next: (response) => {
        this.popularResource.setData(response);
        this.popularResource.setLoading(false);
      },
      error: (error) => {
        this.popularResource.setError(error);
        this.popularResource.setLoading(false);
      }
    });

    return of({
      results: this.popularResource.value().results.map(series => this.mapTmdbToTvSeries(series)),
      totalPages: this.popularResource.value().total_pages
    });
  }

  /**
   * Get top rated TV shows
   */
  private readonly topRatedPage = signal(1);
  private readonly topRatedResource = createResource<TmdbSearchResponse<TmdbTvSeries>>({
    results: [],
    page: 0,
    total_pages: 0,
    total_results: 0
  });

  getTopRatedTvShows(page: number = 1): Observable<{ results: TvSeries[], totalPages: number }> {
    this.topRatedPage.set(page);
    this.topRatedResource.setLoading(true);
    
    const params = new URLSearchParams({
      api_key: this.apiKey,
      page: page.toString(),
      language: 'en-US'
    });

    this.http.get<TmdbSearchResponse<TmdbTvSeries>>(
      `${this.baseUrl}/tv/top_rated?${params.toString()}`
    ).subscribe({
      next: (response) => {
        this.topRatedResource.setData(response);
        this.topRatedResource.setLoading(false);
      },
      error: (error) => {
        this.topRatedResource.setError(error);
        this.topRatedResource.setLoading(false);
      }
    });

    return of({
      results: this.topRatedResource.value().results.map(series => this.mapTmdbToTvSeries(series)),
      totalPages: this.topRatedResource.value().total_pages
    });
  }

  /**
   * Get the full image URL for a given path and size
   */
  getImageUrl(path: string | undefined, size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w500'): string | null {
    if (!path) return null;
    return `${this._imageBaseUrl}/${size}${path}`;
  }

  /**
   * Get the full backdrop URL for a given path
   */
  getBackdropUrl(path: string | undefined, size: 'w300' | 'w780' | 'w1280' | 'original' = 'original'): string | null {
    if (!path) return null;
    return `${this._imageBaseUrl}/${size}${path}`;
  }

  /**
   * Get the full poster URL for a given path
   */
  getPosterUrl(path: string | undefined, size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w500'): string | null {
    if (!path) return null;
    return `${this._imageBaseUrl}/${size}${path}`;
  }

  /**
   * Get the full profile URL for a given path
   */
  getProfileUrl(path: string | undefined, size: 'w45' | 'w185' | 'h632' | 'original' = 'w185'): string | null {
    if (!path) return null;
    return `${this._imageBaseUrl}/${size}${path}`;
  }

  /**
   * Initialize the service with TMDb configuration
   */
  initialize(): void {
    this.http.get<TmdbConfiguration>(
      `${this.baseUrl}/configuration?api_key=${this.apiKey}`
    ).subscribe({
      next: (config) => {
        this.configResource.setData(config);
        if (config?.images?.secure_base_url) {
          this._imageBaseUrl = config.images.secure_base_url;
        }
      },
      error: (error) => {
        this.configResource.setError(error);
      }
    });
  }
  
  private mapTmdbToTvSeries(tmdbSeries: TmdbTvSeries): TvSeries {
    const firstAirYear = tmdbSeries.first_air_date
      ? new Date(tmdbSeries.first_air_date).getFullYear()
      : new Date().getFullYear();
      
    const lastAirYear = tmdbSeries.last_air_date
      ? new Date(tmdbSeries.last_air_date).getFullYear()
      : undefined;
      
    // Handle potentially null/undefined values
    const imdbId = tmdbSeries.external_ids?.imdb_id || undefined;
    const website = tmdbSeries.homepage || undefined;
    
    // Find trailer URL
    const trailer = tmdbSeries.videos?.results?.find(v => 
      v.site === 'YouTube' && v.type === 'Trailer'
    );
    const trailerUrl = trailer?.key ? `https://www.youtube.com/watch?v=${trailer.key}` : undefined;
    
    return {
      id: tmdbSeries.id.toString(),
      title: tmdbSeries.name,
      yearStarted: firstAirYear,
      yearEnded: lastAirYear,
      ended: !tmdbSeries.in_production,
      wasCanceled: tmdbSeries.status === 'Canceled',
      averageRating: tmdbSeries.vote_average || 0,
      totalRatings: tmdbSeries.vote_count || 0,
      genres: tmdbSeries.genres?.map(g => g.name) || [],
      description: tmdbSeries.overview,
      posterPath: tmdbSeries.poster_path ? `${this._imageBaseUrl}w500${tmdbSeries.poster_path}` : undefined,
      backdropPath: tmdbSeries.backdrop_path ? `${this._imageBaseUrl}original${tmdbSeries.backdrop_path}` : undefined,
      network: tmdbSeries.networks?.[0]?.name,
      seasons: tmdbSeries.number_of_seasons,
      episodes: tmdbSeries.number_of_episodes,
      createdBy: tmdbSeries.created_by?.map(p => p.name) || [],
      starring: tmdbSeries.credits?.cast.slice(0, 5).map(c => c.name) || [],
      tmdbId: tmdbSeries.id,
      imdbId,
      website,
      trailerUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    } as TvSeries;
  }
}
