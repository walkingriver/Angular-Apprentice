import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    RouterModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>EndsWell</span>
      <span class="spacer"></span>
      <button mat-icon-button>
        <mat-icon>search</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon>add</mat-icon>
      </button>
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
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
  `
})
export class App {
  title = 'EndsWell - Rate TV Series Finales';
}
