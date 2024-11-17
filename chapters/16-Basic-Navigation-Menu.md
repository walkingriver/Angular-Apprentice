# Basic Navigation Menu

In this chapter, we'll create a responsive navigation system using Angular Material's sidenav component. We'll implement a modern, adaptive layout that works well on both desktop and mobile devices.

## Setting Up the Navigation

First, let's add the necessary Material components to our app:

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

interface NavItem {
  title: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    MatNavList,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems: NavItem[] = [
    { title: 'Home', route: '/home', icon: 'home' },
    { title: 'Roster', route: '/roster', icon: 'people' }
  ];
}
```

Now let's create our navigation layout using Material's sidenav:

```html
<!-- app.component.html -->
<mat-sidenav-container>
  <mat-sidenav #sidenav [mode]="'side'" [opened]="true" class="app-sidenav">
    <mat-toolbar>
      <h1>A10Dance</h1>
    </mat-toolbar>

    <mat-nav-list>
      @for (item of navItems; track item.route) {
        <a mat-list-item
           [routerLink]="item.route"
           routerLinkActive="active-link">
          <mat-icon matListItemIcon>{{item.icon}}</mat-icon>
          <span matListItemTitle>{{item.title}}</span>
        </a>
      }
    </mat-nav-list>
  </mat-sidenav>

  <mat-sidenav-content>
    <mat-toolbar>
      <button mat-icon-button
              (click)="sidenav.toggle()"
              class="menu-button">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="toolbar-spacer"></span>
    </mat-toolbar>

    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```

Let's style our navigation with proper responsive behavior:

```scss
// app.component.scss
:host {
  display: block;
  height: 100vh;
}

mat-sidenav-container {
  height: 100%;
}

.app-sidenav {
  width: 240px;
  
  mat-toolbar {
    border-bottom: 1px solid var(--mat-toolbar-container-background-color);
  }
}

mat-sidenav-content {
  display: flex;
  flex-direction: column;
}

.toolbar-spacer {
  flex: 1 1 auto;
}

.active-link {
  background: rgba(0, 0, 0, 0.05);
  
  mat-icon {
    color: var(--mat-sidenav-container-text-color);
  }
}

// Responsive behavior
@media (max-width: 768px) {
  .app-sidenav {
    width: 100%;
    max-width: 300px;
  }

  mat-sidenav {
    // Switch to overlay mode on mobile
    ::ng-deep .mat-drawer {
      position: fixed !important;
    }
  }

  .menu-button {
    display: block;
  }
}

@media (min-width: 769px) {
  .menu-button {
    display: none;
  }
}
```

## Understanding the Components

### MatSidenav
The Material sidenav provides a powerful container for side navigation that:
- Supports multiple modes (side, over, push)
- Handles responsive behavior
- Manages its own state and animations
- Provides accessibility features

### MatToolbar
We use Material's toolbar component to:
- Create consistent app headers
- House navigation controls
- Maintain proper elevation and positioning
- Support responsive layouts

### MatNavList
The navigation list component helps us:
- Create consistent navigation items
- Handle active states
- Manage proper spacing and alignment
- Support keyboard navigation

## Responsive Design

Our navigation system adapts to different screen sizes:

1. Desktop (>768px):
   - Sidenav stays open in side mode
   - Full 240px width
   - Menu button hidden

2. Mobile (≤768px):
   - Sidenav switches to overlay mode
   - Collapsible with menu button
   - Full height with max-width
   - Proper touch targets

## Next Steps

With our navigation in place, we can:
1. Add more routes and features
2. Enhance the toolbar with actions
3. Implement user authentication
4. Add route transitions

In the next chapter, we'll build out our roster page with student management features.
