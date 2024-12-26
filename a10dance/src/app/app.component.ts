import { Component } from '@angular/core';
import {
  MatButton,
  MatIconButton,
} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatList,
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
import {
  MatToolbar,
  MatToolbarRow,
} from '@angular/material/toolbar';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { DebugMenuComponent } from './debug-menu/debug-menu.component';
import { STUDENTS_SERVICE, LocalStorageStudentsService } from './students.service';

interface NavItem {
  title: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DebugMenuComponent,
    // Material Sidenav
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    // Material Toolbar
    MatToolbar,
    MatToolbarRow,
    // Material Icons & Buttons
    MatIcon,
    MatButton,
    MatIconButton,
    // Material List
    MatList,
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
    { provide: STUDENTS_SERVICE, useExisting: LocalStorageStudentsService }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}
