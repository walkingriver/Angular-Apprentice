import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  Routes,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';
import { AppTitleStrategy } from './core/title.strategy';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        c => c.HomeComponent
      ),
    title: 'Home',
  },
  {
    path: 'roster',
    loadComponent: () =>
      import('./roster/roster.component').then(
        c => c.RosterComponent
      ),
    title: 'Roster',
  },
  {
    path: 'student/:id',
    loadComponent: () =>
      import(
        './student-details/student-details.component'
      ).then(m => m.StudentDetailsComponent),
    title: 'Student Details',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy,
    },
    provideAnimations(),
  ],
};
