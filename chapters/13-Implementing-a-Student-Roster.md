# Implementing a Student Roster

Now that we've created our roster page, let's display the students we created in a prior chapter. We'll use Angular Material's table component, which provides a powerful and flexible way to display data in a tabular format.

## Understanding Material Table

Before we dive in, let's understand the key components of a Material table:

1. **MatTable**: The main container component that manages the data display
2. **MatColumnDef**: Defines a column and its properties
3. **MatHeaderCell**: The header cell template for a column
4. **MatCell**: The data cell template for a column
5. **MatHeaderRow**: The header row that contains header cells
6. **MatRow**: The data row that contains data cells

Each of these components works together to create a cohesive, accessible table that follows Material Design principles.

## Setting Up the Component

Let's update our roster component to use Material's table:

```typescript
// roster.component.ts
import { Component, inject } from '@angular/core';
import { 
  MatTable,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatCell,
  MatCellDef,
  MatRow,
  MatRowDef,
  MatColumnDef
} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { 
  MatMenu, 
  MatMenuItem, 
  MatMenuTrigger 
} from '@angular/material/menu';
import { StudentsService, Student } from '../students.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-roster',
  standalone: true,
  imports: [
    // Material Table
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatCell,
    MatCellDef,
    MatRow,
    MatRowDef,
    MatColumnDef,
    // Material Menu
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    // Other Material
    MatIcon,
    MatIconButton
  ],
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent {
  private studentsService = inject(StudentsService);
  private breakpointObserver = inject(BreakpointObserver);

  displayedColumns = ['name', 'status', 'actions'];
  students = this.studentsService.getAll();

  // Convert breakpoint observable to signal
  readonly isMobile = toSignal(
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).pipe(
      map(result => result.matches)
    ),
    { initialValue: false }
  );
}
```

Let's look at what's new here:

1. **Dependency Injection**: We're using Angular's `inject()` function instead of constructor injection. This modern approach provides better tree-shaking and more flexible dependency management.

2. **Breakpoint Observer**: From `@angular/cdk/layout`, this service helps us create responsive layouts by detecting screen size changes.

3. **Signals**: We convert the breakpoint observable to a signal using `toSignal()`. Signals are Angular's new reactivity primitive, providing more efficient change detection.

## Creating the Table Template

Now let's create our table template:

```html
<!-- roster.component.html -->
<div class="roster-container">
  <table mat-table [dataSource]="students">
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef>Name</th>
      <td mat-cell *matCellDef="let student">
        {{student.lastName}}, {{student.firstName}}
      </td>
    </ng-container>

    <!-- Status Column -->
    <ng-container matColumnDef="status">
      <th mat-header-cell *matHeaderCellDef>Status</th>
      <td mat-cell *matCellDef="let student">
        @if (student.status === 'present') {
          <mat-icon>visibility</mat-icon>
        } @else if (student.status === 'absent') {
          <mat-icon>visibility_off</mat-icon>
        }
      </td>
    </ng-container>

    <!-- Actions Column -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Actions</th>
      <td mat-cell *matCellDef="let student">
        @if (isMobile()) {
          <button mat-icon-button (click)="openActions(student)">
            <mat-icon>more_vert</mat-icon>
          </button>
        } @else {
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon>more_vert</mat-icon>
          </button>

          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="markPresent(student)">
              <mat-icon>visibility</mat-icon>
              <span>Mark Present</span>
            </button>
            
            <button mat-menu-item (click)="markAbsent(student)">
              <mat-icon>visibility_off</mat-icon>
              <span>Mark Absent</span>
            </button>
            
            <button mat-menu-item 
                    (click)="deleteStudent(student)"
                    class="warn-text">
              <mat-icon color="warn">delete</mat-icon>
              <span>Delete</span>
            </button>
          </mat-menu>
        }

        <a mat-icon-button 
           [routerLink]="['/student', student.id]"
           aria-label="View student details">
          <mat-icon>chevron_right</mat-icon>
        </a>
      </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
```

Let's examine the key parts:

1. **Column Definitions**: Each column is defined using `matColumnDef` with its own header and cell templates.

2. **Material Icons**: We use `mat-icon` for visual indicators:
   - `visibility` for present students
   - `visibility_off` for absent students
   - `more_vert` for the actions menu
   - `chevron_right` for navigation

3. **Responsive Menu**: We use Angular's new `@if` control flow syntax to show different interfaces based on screen size:
   - Bottom sheet on mobile
   - Menu on desktop

4. **Material Menu**: The `mat-menu` component provides a dropdown menu with consistent styling and behavior.

## Adding Basic Styles

Finally, let's style our table:

```scss
// roster.component.scss
.roster-container {
  width: 100%;
  padding: 1rem;
}

// Override Material table styles
::ng-deep .mat-mdc-table {
  background: transparent !important;
  
  // Remove default borders
  .mdc-data-table__header-cell,
  .mdc-data-table__cell {
    border-bottom: none !important;
  }

  // Remove table outline
  .mdc-data-table__table {
    border: none !important;
  }
}

// Custom table styles
.mat-mdc-row,
.mat-mdc-header-row {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  min-height: 48px;
  margin: 0;
  border-bottom: 1px solid var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));

  &:hover {
    background: var(--mat-table-hover-state-layer-color, rgba(0, 0, 0, 0.04));
  }
}

.mat-mdc-cell,
.mat-mdc-header-cell {
  padding: 12px 0;
}

.mat-column-name {
  flex: 1;
  margin-right: 24px;
}

.mat-column-status {
  text-align: center;
  width: 80px;
}

.mat-column-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.warn-text {
  color: var(--mat-warn-color);
}
```

Our styles use Material Design's system colors through CSS variables, ensuring consistent theming throughout the application.

In the next chapter, we'll implement the actions we've set up in our template, allowing us to mark students present or absent and remove them from the class.
