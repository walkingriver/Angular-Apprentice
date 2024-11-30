# Angular Component Naming Conventions: Atomic Design Approach

## Introduction to Atomic Design

Atomic Design, introduced by Brad Frost, is a methodology for creating design systems by breaking down interfaces into fundamental building blocks and combining them to create more complex components. This approach aligns perfectly with Angular's component-based architecture, promoting reusability, maintainability, and scalability.

The methodology consists of five distinct levels:
1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

## Implementation in Angular

### Atoms: Basic Building Blocks

Atoms are the smallest possible components, representing basic HTML elements enhanced with Angular functionality. They are highly reusable and should be as simple as possible.

**File Naming Convention**: `[element-type].atom.ts`
**Selector**: `app-[element-type]`
**Directory**: `/shared/components/atoms/`

Examples:

1. Button Atom
```typescript
// button.atom.ts
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button 
      [class]="variant()"
      (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </button>`
})
export class ButtonAtom {
  variant = input<'primary' | 'secondary'>('primary');
  onClick = output<MouseEvent>();
}
```

2. Input Field Atom
```typescript
// input.atom.ts
import { Component, input, output, model } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <input
      [type]="type()"
      [placeholder]="placeholder()"
      [ngModel]="value()"
      (ngModelChange)="value.set($event)">
  `
})
export class InputAtom {
  type = input<string>('text');
  placeholder = input<string>('');
  value = model<string>('');
}
```

3. Label Atom
```typescript
// label.atom.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  template: `
    <label [for]="for()" [class]="required() ? 'required' : ''">
      <ng-content></ng-content>
    </label>
  `
})
export class LabelAtom {
  for = input<string>('');
  required = input<boolean>(false);
}
```

### Molecules: Combinations of Atoms

Molecules combine multiple atoms to create more complex, yet still relatively simple components with specific functionality.

**File Naming Convention**: `[purpose].molecule.ts`
**Selector**: `app-[purpose]`
**Directory**: `/shared/components/molecules/`

Examples:

1. Form Field Molecule
```typescript
// form-field.molecule.ts
import { Component, input, output, model } from '@angular/core';
import { LabelAtom } from '../atoms/label.atom';
import { InputAtom } from '../atoms/input.atom';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [LabelAtom, InputAtom],
  template: `
    <div class="form-field">
      <app-label 
        [for]="id()" 
        [required]="required()">
        {{label()}}
      </app-label>
      <app-input
        [id]="id()"
        [type]="type()"
        [placeholder]="placeholder()"
        [(value)]="value">
      </app-input>
    </div>
  `
})
export class FormFieldMolecule {
  id = input.required<string>();
  label = input.required<string>();
  required = input<boolean>(false);
  type = input<string>('text');
  placeholder = input<string>('');
  value = model<string>('');
}
```

2. Search Bar Molecule
```typescript
// search-bar.molecule.ts
import { Component, computed, input, output, signal } from '@angular/core';
import { InputAtom } from '../atoms/input.atom';
import { ButtonAtom } from '../atoms/button.atom';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [InputAtom, ButtonAtom],
  template: `
    <div class="search-bar">
      <app-input
        type="search"
        [placeholder]="placeholder()"
        [(value)]="searchTerm">
      </app-input>
      <app-button
        variant="primary"
        (onClick)="onSearch()">
        Search
      </app-button>
    </div>
  `
})
export class SearchBarMolecule {
  placeholder = input<string>('Search...');
  search = output<string>();
  
  searchTerm = signal('');
  
  onSearch() {
    this.search.emit(this.searchTerm());
  }
}
```

### Organisms: Complex UI Components

Organisms are larger, more complex components that combine multiple molecules and/or atoms to create distinct sections of an interface.

**File Naming Convention**: `[section-name].organism.ts`
**Selector**: `app-[section-name]`
**Directory**: `/shared/components/organisms/`

Examples:

1. Navigation Header Organism
```typescript
// nav-header.organism.ts
import { Component, input, output, inject } from '@angular/core';
import { SearchBarMolecule } from '../molecules/search-bar.molecule';
import { ButtonAtom } from '../atoms/button.atom';
import { AuthService } from '@core/auth';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [SearchBarMolecule, ButtonAtom],
  template: `
    <header class="nav-header">
      <div class="logo">
        <img [src]="logoUrl()" alt="Logo">
      </div>
      <app-search-bar
        (search)="onSearch($event)">
      </app-search-bar>
      <nav class="actions">
        <app-button
          variant="secondary"
          (onClick)="onProfile()">
          Profile
        </app-button>
        <app-button
          variant="primary"
          (onClick)="handleLogout()">
          Logout
        </app-button>
      </nav>
    </header>
  `
})
export class NavHeaderOrganism {
  private authService = inject(AuthService);
  
  logoUrl = input<string>('');
  search = output<string>();
  profileClick = output<void>();
  
  handleLogout() {
    this.authService.logout();
  }

  onSearch(term: string) {
    this.search.emit(term);
  }

  onProfile() {
    this.profileClick.emit();
  }
}
```

2. Registration Form Organism
```typescript
// registration-form.organism.ts
import { Component, output, signal, computed } from '@angular/core';
import { FormFieldMolecule } from '../molecules/form-field.molecule';
import { ButtonAtom } from '../atoms/button.atom';

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormFieldMolecule, ButtonAtom],
  template: `
    <form class="registration-form" (ngSubmit)="onSubmit()">
      <app-form-field
        id="username"
        label="Username"
        [required]="true"
        [(value)]="formData.username">
      </app-form-field>
      
      <app-form-field
        id="email"
        label="Email"
        type="email"
        [required]="true"
        [(value)]="formData.email">
      </app-form-field>
      
      <app-form-field
        id="password"
        label="Password"
        type="password"
        [required]="true"
        [(value)]="formData.password">
      </app-form-field>
      
      <app-button
        variant="primary"
        type="submit"
        [disabled]="!isValid()">
        Register
      </app-button>
    </form>
  `
})
export class RegistrationFormOrganism {
  formData = signal<RegistrationData>({
    username: '',
    email: '',
    password: ''
  });
  
  isValid = computed(() => {
    const data = this.formData();
    return data.username && 
           data.email && 
           data.password && 
           data.email.includes('@');
  });
  
  submit = output<RegistrationData>();

  onSubmit() {
    if (this.isValid()) {
      this.submit.emit(this.formData());
    }
  }
}
```

### Templates: Page Layouts

Templates are page-level objects that place components into a layout and articulate the design's underlying content structure.

**File Naming Convention**: `[layout-type].template.ts`
**Selector**: `app-[layout-type]`
**Directory**: `/shared/templates/`

Example:

```typescript
// dashboard.template.ts
import { Component, input, output } from '@angular/core';
import { NavHeaderOrganism } from '../organisms/nav-header.organism';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavHeaderOrganism, RouterOutlet],
  template: `
    <div class="dashboard-template">
      <app-nav-header
        [logoUrl]="logoUrl()"
        (search)="onSearch($event)">
      </app-nav-header>
      
      <main class="dashboard-content">
        <aside class="sidebar">
          <ng-content select="[sidebar]"></ng-content>
        </aside>
        
        <section class="main-content">
          <ng-content select="[main]"></ng-content>
        </section>
        
        <aside class="widgets">
          <ng-content select="[widgets]"></ng-content>
        </aside>
      </main>
      
      <footer>
        <ng-content select="[footer]"></ng-content>
      </footer>
    </div>
  `
})
export class DashboardTemplate {
  logoUrl = input<string>('');
  search = output<string>();

  onSearch(term: string) {
    this.search.emit(term);
  }
}
```

### Pages: Specific Instance of Templates

Pages are specific instances of templates that represent the actual content.

**File Naming Convention**: `[name].page.ts`
**Selector**: `app-[name]`
**Directory**: `/pages/`

Example:

```typescript
// user-dashboard.page.ts
import { Component, inject, computed, signal } from '@angular/core';
import { DashboardTemplate } from '@shared/templates/dashboard.template';
import { NavHeaderOrganism } from '@shared/organisms/nav-header.organism';
import { DashboardService } from '@core/services';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    DashboardTemplate,
    NavHeaderOrganism,
  ],
  template: `
    <app-dashboard
      [logoUrl]="'/assets/logo.svg'"
      (search)="handleSearch($event)">
      
      <ng-container sidebar>
        <app-navigation-menu
          [menuItems]="menuItems()"
          (menuSelect)="handleMenuSelect($event)">
        </app-navigation-menu>
      </ng-container>
      
      <ng-container main>
        <app-dashboard-stats
          [statistics]="dashboardStats()">
        </app-dashboard-stats>
        <app-recent-activities
          [activities]="recentActivities()">
        </app-recent-activities>
      </ng-container>
      
      <ng-container widgets>
        <app-notifications
          [notifications]="notifications()">
        </app-notifications>
      </ng-container>
      
      <ng-container footer>
        <app-footer
          [version]="appVersion()"
          [year]="currentYear()">
        </app-footer>
      </ng-container>
    </app-dashboard>
  `
})
export class UserDashboardPage {
  private dashboardService = inject(DashboardService);
  
  menuItems = signal([
    { label: 'Home', route: '/home' },
    { label: 'Profile', route: '/profile' },
    { label: 'Settings', route: '/settings' }
  ]);
  
  dashboardStats = computed(() => 
    this.dashboardService.getStats()
  );
  
  recentActivities = computed(() => 
    this.dashboardService.getRecentActivities()
  );
  
  notifications = computed(() => 
    this.dashboardService.getNotifications()
  );
  
  appVersion = signal('1.0.0');
  currentYear = signal(new Date().getFullYear());
  
  handleSearch(term: string) {
    this.dashboardService.search(term);
  }
  
  handleMenuSelect(route: string) {
    // Handle navigation
  }
}
```

## Communication Between Components

1. **Atoms**:
   - Use `input` for receiving data
   - Use `output` for emitting events
   - Should be stateless when possible

2. **Molecules**:
   - Coordinate communication between atoms
   - Use `input` and `output` decorators
   - Can maintain minimal internal state
   - Should emit composed events that make sense at their level

3. **Organisms**:
   - Can maintain more complex state
   - May use services for data management
   - Should expose clear public APIs through inputs and outputs
   - Can implement smart/container component patterns

4. **Templates**:
   - Primarily handle layout and composition
   - Use content projection (`ng-content`) extensively
   - Can manage layout-specific state
   - Should not contain business logic

5. **Pages**:
   - Connect to services and state management
   - Handle routing logic
   - Coordinate between multiple organisms
   - Implement smart component patterns

## Best Practices

1. **Encapsulation**:
   - Use `changeDetection: ChangeDetectionStrategy.OnPush` for better performance
   - Keep components focused and single-responsibility
   - Use appropriate component-scoped CSS

2. **State Management**:
   - Atoms and Molecules should be mostly stateless
   - Organisms can maintain local state
   - Pages should handle global state through services

3. **Testing**:
   - Atoms and Molecules should have high unit test coverage
   - Organisms should focus on integration tests
   - Pages should focus on integration and e2e tests

4. **Documentation**:
   - Use TypeScript interfaces for all inputs and outputs
   - Document component usage with examples
   - Maintain a living style guide

## Conclusion

Adopting Atomic Design principles in Angular applications provides a clear structure for component organization and naming. This approach:

- Creates a consistent and predictable codebase
- Promotes reusability and maintainability
- Scales well with application growth
- Aligns with Angular's component-based architecture
- Facilitates team collaboration and onboarding

Remember that while these conventions provide a solid foundation, they should be adapted to fit your specific project needs while maintaining consistency throughout the application.
