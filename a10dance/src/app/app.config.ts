import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  Routes,
} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        m => m.HomeComponent
      ),
  },
  {
    path: 'roster',
    loadComponent: () =>
      import('./roster/roster.component').then(
        m => m.RosterComponent
      ),
  },
  {
    path: 'student/:id',
    loadComponent: () =>
      import(
        './student-details/student-details.component'
      ).then(m => m.StudentDetailsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
  ],
};
