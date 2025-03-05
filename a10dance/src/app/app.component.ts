import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatNavList,
} from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { map } from 'rxjs/operators';
import { DebugMenuComponent } from './debug-menu/debug-menu.component';
import {
  LocalStorageStudentsService,
  STUDENTS_SERVICE,
} from './students.service';

interface NavItem {
  title: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  imports: [
    DebugMenuComponent,
    // Material Sidenav
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    // Material Toolbar
    MatToolbar,
    // Material Icons & Buttons
    MatIcon,
    MatIconButton,
    // Material List
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    MatNavList,
    // Router
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  providers: [
    LocalStorageStudentsService,
    {
      provide: STUDENTS_SERVICE,
      useExisting: LocalStorageStudentsService,
    },
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private breakpointObserver = inject(
    BreakpointObserver
  );

  navItems: NavItem[] = [
    {
      title: 'Home',
      route: '/home',
      icon: 'home',
    },
    {
      title: 'Roster',
      route: '/roster',
      icon: 'people',
    },
  ];

  isMobile = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );
}
