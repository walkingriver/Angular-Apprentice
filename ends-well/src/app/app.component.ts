import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/" class="brand">Ends Well</a>
      <span class="spacer"></span>
      <a mat-button routerLink="/">Home</a>
      <a mat-button routerLink="/series">Browse</a>
    </mat-toolbar>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .brand {
      text-decoration: none;
      color: inherit;
      font-weight: 500;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .main-content {
      flex: 1;
      padding: 20px;
      background-color: #f5f5f5;
    }

    mat-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  `,
})
export class AppComponent {
  title = 'Ends Well';
}
