import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, ParamMap } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Interfaces for type safety
interface CastMember {
  id: number;
  name: string;
  character: string;
  profilePath: string;
}

interface Season {
  id: number;
  name: string;
  seasonNumber: number;
  episodeCount: number;
  airDate: string;
  overview: string;
  posterPath: string;
}

interface SimilarShow {
  id: number;
  title: string;
  posterPath: string;
  voteAverage: number;
}

interface SeriesDetails {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  firstAirDate: string;
  lastAirDate: string;
  status: string;
  voteAverage: number;
  voteCount: number;
  numberOfSeasons: number;
  numberOfEpisodes: number;
  genres: { id: number; name: string }[];
  createdBy: { id: number; name: string; profilePath: string | null }[];
  episodeRunTime: number[];
  inProduction: boolean;
  languages: string[];
  originalLanguage: string;
  originalName: string;
  popularity: number;
  productionCompanies: { id: number; name: string; logoPath: string | null }[];
  productionCountries: { iso_3166_1: string; name: string }[];
  spokenLanguages: { englishName: string; iso_639_1: string; name: string }[];
  tagline: string;
  type: string;
  videos: {
    results: {
      id: string;
      key: string;
      name: string;
      site: string;
      type: string;
    }[];
  };
  credits: {
    cast: CastMember[];
    crew: { id: number; name: string; job: string; profilePath: string | null }[];
  };
  similar: {
    results: SimilarShow[];
  };
  seasons: Season[];
}

@Component({
  selector: 'app-series-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatListModule,
    DatePipe
  ],
  providers: [DatePipe],
  host: { class: 'series-detail-page' },
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {
  // Injected services
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly http = inject(HttpClient);
  private readonly datePipe = inject(DatePipe);

  // Signals
  series = signal<SeriesDetails | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);
  activeTabIndex = signal(0);

  rating = computed(() => {
    const series = this.series();
    return series?.voteAverage ? series.voteAverage.toFixed(1) : 'N/A';
  });

  releaseYear = computed(() => {
    const series = this.series();
    return series?.firstAirDate ? new Date(series.firstAirDate).getFullYear() : '';
  });

  formattedRuntime = computed(() => {
    const series = this.series();
    const runtime = series?.episodeRunTime?.[0];
    if (!runtime) return 'N/A';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  });

  // Safe property accessors with proper typing
  get safeCast(): any[] {
    return this.series()?.credits?.cast || [];
  }

  get safeSimilarShows(): any[] {
    return this.series()?.similar?.results || [];
  }

  get safeSeasons(): any[] {
    return this.series()?.seasons || [];
  }

  get safeSeries(): SeriesDetails | null {
    return this.series();
  }

  ngOnInit(): void {
    this.loadSeriesDetails();

    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params: ParamMap) => {
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

    // Simulate API call with mock data
    setTimeout(() => {
      try {
        const mockData = this.getMockSeriesDetails(Number(id));
        if (mockData) {
          this.series.set(mockData);
        } else {
          throw new Error('Series not found');
        }
      } catch (err) {
        this.error.set('Failed to load series details');
      } finally {
        this.loading.set(false);
      }
    }, 1000);
  }

  // Handle tab change
  onTabChange(index: number): void {
    // Ensure index is within valid range
    if (index >= 0 && index <= 2) { // Assuming 3 tabs (0, 1, 2)
      this.activeTabIndex.set(index);
    }
  }

  // Handle watch trailer click
  onWatchTrailer(): void {
    const trailer = this.series()?.videos?.results?.find(
      video => video.site === 'YouTube' && video.type === 'Trailer'
    );

    if (trailer) {
      // In a real app, you would open a dialog with the YouTube embed
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
    } else {
      this.snackBar.open('Trailer not available', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-info']
      });
    }
  }

  onAddToFavorites(): void {
    const series = this.safeSeries;
    if (!series) return;

    this.snackBar.open(`Added ${series.title} to favorites`, 'Undo', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }

  onAddToWatchlist(): void {
    const series = this.safeSeries;
    if (!series) return;

    this.snackBar.open(`Added ${series.title} to watchlist`, 'Undo', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }

  onViewSeason(seriesId: number, seasonNumber: number): void {
    if (!seriesId || seasonNumber == null) {
      this.snackBar.open('Invalid season information', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }
    this.router.navigate(['/series', seriesId, 'season', seasonNumber]);
  }

  private getMockSeriesDetails(id: number): SeriesDetails | null {
    // Mock data for demonstration
    return {
      id: +id,
      title: 'Breaking Bad',
      overview: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future. As he descends into the criminal underworld, he transforms from a mild-mannered teacher to a ruthless drug lord, all while trying to maintain his family life and evade law enforcement.',
      posterPath: 'https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
      backdropPath: 'https://image.tmdb.org/t/p/original/tsRy63MuGcuJ9lGVoHk591EvxvH.jpg',
      firstAirDate: '2008-01-20',
      lastAirDate: '2013-09-29',
      status: 'Ended',
      voteAverage: 8.9,
      voteCount: 12345,
      numberOfSeasons: 5,
      numberOfEpisodes: 62,
      genres: [
        { id: 18, name: 'Drama' },
        { id: 80, name: 'Crime' },
        { id: 10759, name: 'Action & Adventure' }
      ],
      createdBy: [
        { 
          id: 1, 
          name: 'Vince Gilligan', 
          profilePath: 'https://image.tmdb.org/t/p/w200/2y4dngWAmqLkQ3nGyUKJqebHkSO.jpg'
        }
      ],
      episodeRunTime: [47, 48, 49],
      inProduction: false,
      languages: ['en', 'es'],
      originalLanguage: 'en',
      originalName: 'Breaking Bad',
      popularity: 100.0,
      productionCompanies: [
        { 
          id: 1, 
          name: 'Sony Pictures Television', 
          logoPath: '/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg' 
        },
        { 
          id: 2, 
          name: 'High Bridge Entertainment', 
          logoPath: null 
        },
        { 
          id: 3, 
          name: 'Gran Via Productions', 
          logoPath: '/5vUJS2XDXziCpI7MqebPhig6psV.png' 
        }
      ],
      productionCountries: [
        { 
          iso_3166_1: 'US', 
          name: 'United States of America' 
        }
      ],
      spokenLanguages: [
        { 
          englishName: 'English', 
          iso_639_1: 'en', 
          name: 'English' 
        },
        { 
          englishName: 'Spanish', 
          iso_639_1: 'es', 
          name: 'Español' 
        }
      ],
      tagline: 'Change the equation',
      type: 'Scripted',
      videos: { 
        results: [
          {
            id: '5a859a309251410dae20cf9b',
            key: 'XZ8daibM3AE',
            name: 'Breaking Bad Official Trailer',
            site: 'YouTube',
            type: 'Trailer'
          }
        ] 
      },
      credits: { 
        cast: [
          {
            id: 17419,
            name: 'Bryan Cranston',
            character: 'Walter White',
            profilePath: '/3piZ6SqDPQI8WBzFi8KZZ8AQUB9.jpg'
          },
          {
            id: 21911,
            name: 'Aaron Paul',
            character: 'Jesse Pinkman',
            profilePath: '/rLsuRmt7rD01k2B3vGkGnz9wzFh.jpg'
          },
          {
            id: 59252,
            name: 'Anna Gunn',
            character: 'Skyler White',
            profilePath: '/jJZ1j8BAIGVgq1p1G3YVrT7B3iN.jpg'
          },
          {
            id: 66671,
            name: 'Dean Norris',
            character: 'Hank Schrader',
            profilePath: '/qHU0FXdrz1sG3nTTgGkZDKLqKoq.jpg'
          },
          {
            id: 66672,
            name: 'Betsy Brandt',
            character: 'Marie Schrader',
            profilePath: '/vYJhqJwW4HcEemWnVC4nF7Yax46.jpg'
          }
        ],
        crew: [
          {
            id: 1,
            name: 'Vince Gilligan',
            job: 'Creator',
            profilePath: '/2y4dngWAmqLkQ3nGyUKJqebHkSO.jpg'
          }
        ]
      },
      similar: {
        results: [
          {
            id: 1396,
            title: 'Breaking Bad',
            posterPath: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            voteAverage: 8.9
          },
          {
            id: 1399,
            title: 'Better Call Saul',
            posterPath: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg',
            voteAverage: 8.8
          },
          {
            id: 60059,
            title: 'Narcos',
            posterPath: '/rTmal9fDbwh5xiMmeI9WzPtEBOR.jpg',
            voteAverage: 8.0
          }
        ]
      },
      seasons: [
        {
          id: 3572,
          name: 'Season 1',
          seasonNumber: 1,
          episodeCount: 7,
          airDate: '2008-01-20',
          overview: 'High school chemistry teacher Walter White is diagnosed with inoperable lung cancer. He teams up with his former student, Jesse Pinkman, to cook and sell methamphetamine to secure his family\'s future.',
          posterPath: 'https://image.tmdb.org/t/p/w300/1BPqZJdZF5T7BGmi2ADXGV3kuD1.jpg'
        },
        {
          id: 3573,
          name: 'Season 2',
          seasonNumber: 2,
          episodeCount: 13,
          airDate: '2009-03-08',
          overview: 'As Walt and Jesse continue to build their drug empire, they face new threats from rival drug dealers and the DEA.',
          posterPath: 'https://image.tmdb.org/t/p/w300/5ewrnKp4TboU2w8N0D4kE9KpB7j.jpg'
        },
        {
          id: 3574,
          name: 'Season 3',
          seasonNumber: 3,
          episodeCount: 13,
          airDate: '2010-03-21',
          overview: 'Walt, Jesse, and their new partner, Gus Fring, must deal with the consequences of their actions as the DEA investigation gets closer.',
          posterPath: 'https://image.tmdb.org/t/p/w300/7qZ5g4I1b9h5FTN8S5fkhngrqQm.jpg'
        },
        {
          id: 3575,
          name: 'Season 4',
          seasonNumber: 4,
          episodeCount: 13,
          airDate: '2011-07-17',
          overview: 'Walt and Jesse find themselves in a dangerous game of cat and mouse with Gus Fring, the ruthless drug lord.',
          posterPath: 'https://image.tmdb.org/t/p/w300/5ewrnKp4TboU2w8N0D4kE9KpB7j.jpg'
        },
        {
          id: 3576,
          name: 'Season 5',
          seasonNumber: 5,
          episodeCount: 16,
          airDate: '2012-07-15',
          overview: 'In the final season, Walt faces the consequences of his actions as his empire begins to crumble around him.',
          posterPath: 'https://image.tmdb.org/t/p/w300/5ewrnKp4TboU2w8N0D4kE9KpB7j.jpg'
        }
      ]
    };
  }
}
