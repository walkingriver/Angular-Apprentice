import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { TvSeries, mapTmdbToTvSeries } from '../models/tv-series.model';
import { TmdbService } from './tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private tmdbService = inject(TmdbService);
  
  // Use signals for reactive state management
  private _seriesList = signal<TvSeries[]>([]);
  private _isLoading = signal(false);
  private _error = signal<string | null>(null);
  
  // Expose as read-only signals
  seriesList = this._seriesList.asReadonly();
  isLoading = this._isLoading.asReadonly();
  error = this._error.asReadonly();

  // Computed signals
  topRatedSeries = computed(() => {
    return [...this._seriesList()]
      .sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0))
      .slice(0, 5);
  });

  recentlyAddedSeries = computed(() => {
    return [...this._seriesList()]
      .sort((a, b) => parseInt(b.id) - parseInt(a.id))
      .slice(0, 5);
  });

  constructor() {
    this.initializeSeries();
  }

  getSeries(): Observable<TvSeries[]> {
    return of(this._seriesList());
  }
  
  /**
   * Search for TV series using TMDb API
   * @param query Search query
   * @returns Observable with search results
   */
  searchSeries(query: string): Observable<TvSeries[]> {
    this._isLoading.set(true);
    this._error.set(null);
    
    // In the future, you can uncomment this to use the TMDb API
    // return this.tmdbService.searchTvShows(query).pipe(
    //   tap({
    //     next: (response) => {
    //       this._seriesList.update(current => [...current, ...response.results]);
    //       this._isLoading.set(false);
    //     },
    //     error: (err) => {
    //       this._error.set('Failed to search for series. Please try again later.');
    //       this._isLoading.set(false);
    //       console.error('Search error:', err);
    //     }
    //   }),
    //   map(response => response.results)
    // );
    
    // For now, just filter the existing series
    return of(
      this._seriesList()
        .filter(series => 
          series.title.toLowerCase().includes(query.toLowerCase()) ||
          series.description?.toLowerCase().includes(query.toLowerCase())
        )
    ).pipe(tap(() => this._isLoading.set(false)));
  }

  addSeries(series: Omit<TvSeries, 'id' | 'totalRatings' | 'averageRating' | 'ended' | 'wasCanceled' | 'genres'>, genres: string[] = []) {
    const newSeries: TvSeries = {
      ...series,
      id: Date.now().toString(),
      averageRating: 0,
      totalRatings: 0,
      genres: genres,
      ended: false,
      wasCanceled: false,
      yearStarted: series.yearStarted || new Date().getFullYear(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this._seriesList.update(current => [...current, newSeries]);
    return newSeries;
  }

  rateSeries(seriesId: string, rating: number): TvSeries | null {
    let updatedSeries: TvSeries | null = null;
    
    this._seriesList.update(currentSeries => {
      return currentSeries.map(series => {
        if (series.id !== seriesId) return series;
        
        const totalRatings = (series.totalRatings || 0) + 1;
        const currentTotal = (series.averageRating || 0) * (series.totalRatings || 0);
        const averageRating = (currentTotal + rating) / totalRatings;
        
        updatedSeries = {
          ...series,
          averageRating: parseFloat(averageRating.toFixed(1)),
          totalRatings,
          updatedAt: new Date()
        };
        
        return updatedSeries;
      });
    });
    
    return updatedSeries;
  }

  // Get a series by ID
  getSeriesById(id: string): TvSeries | undefined {
    return this._seriesList().find(series => series.id === id);
  }
  
  // Update a series
  updateSeries(id: string, updates: Partial<TvSeries>): TvSeries | null {
    let updatedSeries: TvSeries | null = null;
    
    this._seriesList.update(seriesList => {
      return seriesList.map(series => {
        if (series.id !== id) return series;
        
        updatedSeries = {
          ...series,
          ...updates,
          updatedAt: new Date()
        };
        
        return updatedSeries;
      });
    });
    
    return updatedSeries;
  }
  
  // Delete a series
  deleteSeries(id: string): void {
    this._seriesList.update(seriesList => 
      seriesList.filter(series => series.id !== id)
    );
  }

  private initializeSeries(): void {
    const currentYear = new Date().getFullYear();
    
    const mockSeries: TvSeries[] = [
      {
        id: '1',
        title: 'Breaking Bad',
        yearStarted: 2008,
        yearEnded: 2013,
        ended: true,
        wasCanceled: false,
        averageRating: 9.5,
        totalRatings: 1500,
        genres: ['Drama', 'Crime', 'Thriller'],
        description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
        posterPath: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
        backdropPath: '/h5UzYZquMwO9FVn15R2eY2KlOKnu.jpg',
        network: 'AMC',
        seasons: 5,
        episodes: 62,
        createdBy: ['Vince Gilligan'],
        starring: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
        imdbId: 'tt0903747',
        imdbRating: 9.5,
        imdbVotes: 1800000,
        trailerUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY',
        website: 'https://www.amc.com/shows/breaking-bad',
        awards: ['Primetime Emmy Award for Outstanding Drama Series', 'Golden Globe Award for Best Television Series – Drama'],
        similarShows: ['Better Call Saul', 'El Camino', 'Ozark'],
        tags: ['drugs', 'crime', 'family', 'dark comedy'],
        createdAt: new Date('2020-01-01'),
        updatedAt: new Date('2023-01-01')
      },
      {
        id: '2',
        title: 'Game of Thrones',
        yearStarted: 2011,
        yearEnded: 2019,
        ended: true,
        wasCanceled: false,
        averageRating: 9.3,
        totalRatings: 2000,
        genres: ['Fantasy', 'Drama', 'Adventure'],
        description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        posterPath: '/u3bZgnGQ90T3uhsHjO1QNtSZKrQT.jpg',
        backdropPath: '/suopoADq0k8YZr4dQXcU6pToj6s.jpg',
        network: 'HBO',
        seasons: 8,
        episodes: 73,
        createdBy: ['David Benioff', 'D.B. Weiss'],
        starring: ['Emilia Clarke', 'Kit Harington', 'Peter Dinklage'],
        imdbId: 'tt0944947',
        imdbRating: 9.2,
        imdbVotes: 2200000,
        trailerUrl: 'https://www.youtube.com/watch?v=KPLWWIOCOOQ',
        website: 'https://www.hbo.com/game-of-thrones',
        awards: ['Primetime Emmy Award for Outstanding Drama Series', 'Hugo Award for Best Dramatic Presentation'],
        similarShows: ['House of the Dragon', 'The Witcher', 'Vikings'],
        tags: ['fantasy', 'medieval', 'politics', 'war'],
        createdAt: new Date('2020-01-02'),
        updatedAt: new Date('2023-01-02')
      },
      {
        id: '3',
        title: 'Stranger Things',
        yearStarted: 2016,
        ended: false,
        wasCanceled: false,
        averageRating: 8.7,
        totalRatings: 1700,
        genres: ['Drama', 'Fantasy', 'Horror'],
        description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
        posterPath: '/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
        backdropPath: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
        network: 'Netflix',
        seasons: 4,
        episodes: 34,
        createdBy: ['The Duffer Brothers'],
        starring: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
        imdbId: 'tt4574334',
        imdbRating: 8.7,
        imdbVotes: 1200000,
        trailerUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
        website: 'https://www.netflix.com/title/80057281',
        awards: ['Screen Actors Guild Award for Outstanding Performance by an Ensemble in a Drama Series'],
        similarShows: ['Dark', 'The OA', 'Locke & Key'],
        tags: ['80s', 'supernatural', 'kids', 'sci-fi'],
        createdAt: new Date('2020-01-03'),
        updatedAt: new Date('2023-01-03')
      },
      {
        id: '4',
        title: 'The Mandalorian',
        yearStarted: 2019,
        ended: false,
        wasCanceled: false,
        averageRating: 8.8,
        totalRatings: 1200,
        genres: ['Sci-Fi', 'Western', 'Adventure'],
        description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
        posterPath: '/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
        backdropPath: '/9ijMGlJKqcslswWUzTEwScmx82c.jpg',
        network: 'Disney+',
        seasons: 3,
        episodes: 24,
        createdBy: ['Jon Favreau'],
        starring: ['Pedro Pascal', 'Giancarlo Esposito', 'Carl Weathers'],
        imdbId: 'tt8111088',
        imdbRating: 8.7,
        imdbVotes: 500000,
        trailerUrl: 'https://www.youtube.com/watch?v/eW7Twd85m2g',
        website: 'https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD',
        awards: ['Primetime Emmy Award for Outstanding Special Visual Effects'],
        similarShows: ['The Book of Boba Fett', 'The Bad Batch', 'The Clone Wars'],
        tags: ['star wars', 'bounty hunter', 'baby yoda', 'space western'],
        createdAt: new Date('2020-01-04'),
        updatedAt: new Date('2023-01-04')
      },
      {
        id: '5',
        title: 'The Witcher',
        yearStarted: 2019,
        ended: false,
        wasCanceled: false,
        averageRating: 8.2,
        totalRatings: 1100,
        genres: ['Fantasy', 'Adventure', 'Action'],
        description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
        posterPath: '/zBpBZ4dDYX1n49kjfhB0QJhl4Km.jpg',
        backdropPath: '/cok7tU3MMD67LzYCM9CqpR4h93d.jpg',
        network: 'Netflix',
        seasons: 3,
        episodes: 24,
        createdBy: ['Lauren Schmidt Hissrich'],
        starring: ['Henry Cavill', 'Freya Allan', 'Anya Chalotra'],
        imdbId: 'tt5180504',
        imdbRating: 8.0,
        imdbVotes: 500000,
        trailerUrl: 'https://www.youtube.com/watch?v/ndl1W4ltcmg',
        website: 'https://www.netflix.com/title/80189685',
        awards: ['Saturn Award for Best Fantasy Television Series'],
        similarShows: ['The Witcher: Blood Origin', 'Shadow and Bone', 'The Wheel of Time'],
        tags: ['monster hunter', 'magic', 'fantasy', 'based on books'],
        createdAt: new Date('2020-01-05'),
        updatedAt: new Date('2023-01-05')
      },
      {
        id: '6',
        title: 'The Office',
        yearStarted: 2005,
        yearEnded: 2013,
        ended: true,
        wasCanceled: false,
        averageRating: 8.9,
        totalRatings: 1800,
        genres: ['Comedy', 'Mockumentary'],
        description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
        posterPath: '/qWnJzyZhyCe71jBeiXmOwuNkNFa.jpg',
        backdropPath: '/qVygtf2IuTHKqt1UOGHxTW4dC8p.jpg',
        network: 'NBC',
        seasons: 9,
        episodes: 201,
        createdBy: ['Greg Daniels', 'Ricky Gervais', 'Stephen Merchant'],
        starring: ['Steve Carell', 'Jenna Fischer', 'John Krasinski'],
        imdbId: 'tt0386676',
        imdbRating: 9.0,
        imdbVotes: 600000,
        trailerUrl: 'https://www.youtube.com/watch?v=UZjdzprWmOw',
        website: 'https://www.nbc.com/the-office',
        awards: ['Primetime Emmy Award for Outstanding Comedy Series'],
        similarShows: ['Parks and Recreation', 'Brooklyn Nine-Nine', 'The Office UK'],
        tags: ['workplace comedy', 'mockumentary', 'ensemble cast'],
        createdAt: new Date('2020-01-06'),
        updatedAt: new Date('2023-01-06')
      }
    ];

    // Set initial data only if we don't have any series yet
    if (this._seriesList().length === 0) {
      this._seriesList.set(mockSeries);
    }
  }
}
