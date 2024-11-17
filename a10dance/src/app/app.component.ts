import { Component, inject } from '@angular/core';
import { 
  MatSidenav, 
  MatSidenavContainer, 
  MatSidenavContent 
} from '@angular/material/sidenav';
import { 
  MatToolbar,
  MatToolbarRow
} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { 
  MatButton,
  MatIconButton
} from '@angular/material/button';
import { 
  MatList, 
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatNavList
} from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  title: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems: NavItem[] = [
    {
      title: 'Home',
      route: '/home',
      icon: 'home'
    },
    {
      title: 'Roster',
      route: '/roster',
      icon: 'people'
    }
  ];
}
