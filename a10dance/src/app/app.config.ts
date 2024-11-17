import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'roster',
    loadComponent: () => import('./roster/roster.component')
      .then(m => m.RosterComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
};
