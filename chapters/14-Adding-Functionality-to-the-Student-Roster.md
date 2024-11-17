# Adding Functionality to the Student Roster

If we were teachers and this were a real class of students, there are
a number of things we would want to be able to do with our app. A few
of those things are:

-   Mark Absent or Present
-   View and edit student details
-   Remove a student from the class (with appropriate warnings)

Let's start by displaying our students in a Material table, which will give us a 
clean, organized way to present and manage our student data.

## Setting Up the Material Table

First, let's import all the necessary Material table components and directives:

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
import { MatButton, MatIconButton } from '@angular/material/button';
import { 
  MatMenu, 
  MatMenuItem, 
  MatMenuTrigger 
} from '@angular/material/menu';
import { StudentsService } from '../students.service';
import { Student } from '../students.service';

@Component({
  selector: 'app-roster',
  standalone: true,
  imports: [
    // Table
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
    // Other Material components
    MatIcon,
    MatButton,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent {
  // Using inject() for dependency injection
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private studentService = inject(StudentsService);

  students: Student[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

  constructor() {
    this.students = this.studentService.getAll();
  }

  markPresent(student: Student) {
    student.status = 'present';
  }

  markAbsent(student: Student) {
    student.status = 'absent';
  }

  async deleteStudent(student: Student) {
    this.students = this.students
      .filter(x => x.id !== student.id);
  }
}
```

> [!NOTE]
> Notice how we're using Angular's `inject()` function instead of constructor injection. 
> This is a modern approach that offers several benefits:
> 1. Cleaner constructor - especially when you have many dependencies
> 2. Dependencies are immediately available (no initialization timing issues)
> 3. Better tree-shaking since dependencies are explicitly referenced
> 4. More flexible - can be used outside constructors (e.g., in field initializers)
>
> Compare these two approaches:
> ```typescript
> // Traditional constructor injection
> constructor(
>   private dialog: MatDialog,
>   private snackBar: MatSnackBar,
>   private studentService: StudentsService
> ) {}
>
> // Modern inject() approach
> private dialog = inject(MatDialog);
> private snackBar = inject(MatSnackBar);
> private studentService = inject(StudentsService);
> ```
> The `inject()` approach is particularly useful when working with reactive 
> programming and when dependencies are needed for field initialization.

The Material table requires several directives to function properly:
- `MatTable` - The main table container
- `MatHeaderCell` and `MatHeaderCellDef` - For header cell definitions
- `MatHeaderRow` and `MatHeaderRowDef` - For header row definitions
- `MatCell` and `MatCellDef` - For data cell definitions
- `MatRow` and `MatRowDef` - For data row definitions
- `MatColumnDef` - For column definitions

Now let's create our table template:

```html
<!-- roster.component.html -->
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
      <button mat-icon-button 
              [matMenuTriggerFor]="menu" 
              aria-label="Student actions">
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

      <button mat-icon-button 
              aria-label="View student details">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```

## Material Components Overview

Before we dive into the implementation, let's understand the Material components we'll be using. Each component is designed with Material Design principles in mind, providing a consistent, modern, and accessible user experience.

### Material Table
The Material table is one of the most versatile and powerful components in the Angular Material library. Unlike a basic HTML table, it provides a rich set of features for displaying and manipulating tabular data. It handles everything from basic data display to complex scenarios involving sorting, filtering, and pagination. The table is also highly customizable, allowing you to define how each cell renders and interacts with users.

```html
<table mat-table [dataSource]="dataSource">
  <ng-container matColumnDef="columnName">
    <th mat-header-cell *matHeaderCellDef>Header</th>
    <td mat-cell *matCellDef="let row">{{row.value}}</td>
  </ng-container>
  
  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```

Key features:
- Sorting: Add `matSort` and `mat-sort-header` for automatic column sorting
- Filtering: Bind to `[dataSource]="dataSource"` with MatTableDataSource for built-in filtering
- Pagination: Use with `mat-paginator` for handling large datasets
- Selection: Add checkboxes for row selection with `matRowSelect`
- Custom row templates: Define different templates for different row types

### Material Icons
Material Icons are more than just simple images - they're a comprehensive icon system designed for modern web applications. These vector-based icons scale perfectly at any size and can be styled with CSS. The system includes over 2,000 icons covering common actions, navigation, and UI elements. Icons can be themed to match your application's color scheme and can even be animated.

```html
<mat-icon>icon_name</mat-icon>
```

Common options:
- `color`: primary, accent, warn for consistent theming
- `fontSet`: switch between different icon sets (Material, Font Awesome)
- `inline`: true/false for text alignment
- `svgIcon`: use custom SVG icons
- `aria-label`: for accessibility

### Material Buttons
Buttons are fundamental to user interaction, and Material provides several variants to handle different UI scenarios. Each button type follows Material Design's touch target and elevation guidelines while providing visual feedback through ripple effects. The different button styles (basic, raised, stroked, flat, icon) each serve specific UI purposes and maintain consistent behavior patterns.

```html
<!-- Basic button -->
<button mat-button>Basic</button>

<!-- Icon button -->
<button mat-icon-button>
  <mat-icon>menu</mat-icon>
</button>

<!-- Menu item button -->
<button mat-menu-item>
  <mat-icon>check</mat-icon>
  <span>Menu Item</span>
</button>
```

Options:
- `color`: primary, accent, warn for consistent theming
- `disabled`: disable interaction while maintaining proper styling
- `disableRipple`: remove ripple effect for specific use cases
- `type`: button, submit, reset for form integration
- `aria-label`: for accessibility

### Material Menu
The menu component creates floating panels that display a list of options. It's particularly useful for housing contextual actions or navigation options. Menus automatically handle keyboard navigation, focus management, and proper positioning relative to their trigger elements. They also manage their own lifecycle, cleaning up when closed and handling multiple open states.

```html
<button mat-button [matMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>

<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>edit</mat-icon>
    <span>Edit</span>
  </button>
</mat-menu>
```

Options:
- `xPosition`: before, after for horizontal positioning
- `yPosition`: above, below for vertical positioning
- `overlapTrigger`: whether the menu should overlap its trigger
- `hasBackdrop`: show/hide backdrop when menu is open
- `backdropClass`: custom styling for backdrop
- `class`: custom styling for menu panel

### Material Dialog
Dialogs are powerful tools for focusing user attention on important actions or information. They create a modal experience that temporarily interrupts the main application flow while maintaining context. Dialogs manage their own focus trap, ensuring keyboard navigation stays within the dialog while it's open, and handle their own backdrop and animation states.

For our roster page, we'll use a dialog to confirm destructive actions like deleting a student. This follows Material Design best practices by:
1. Preventing accidental deletions
2. Clearly communicating the consequences
3. Providing an easy way to cancel

First, let's create our confirmation dialog component:

```typescript
// confirm-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { 
  MatDialogRef, 
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose 
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton
  ],
  template: `
    <div class="confirm-dialog">
      <h2 mat-dialog-title>{{data.title}}</h2>
      
      <mat-dialog-content>
        <p>{{data.message}}</p>
        @if (data.details) {
          <p class="details">{{data.details}}</p>
        }
      </mat-dialog-content>
      
      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false">
          Cancel
        </button>
        <button mat-button 
                color="warn" 
                [mat-dialog-close]="true"
                class="confirm-button">
          {{data.confirmText || 'Delete'}}
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .confirm-dialog {
      padding: 1rem;
    }
    
    mat-dialog-content {
      min-width: 320px;
    }

    .details {
      color: var(--mdc-theme-text-secondary-on-background);
      font-size: 0.9em;
      margin-top: 0.5rem;
    }
    
    mat-dialog-actions {
      justify-content: flex-end;
      gap: 8px;
      padding: 1rem 0 0;
    }

    .confirm-button {
      margin-left: 8px;
    }
  `]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      message: string;
      details?: string;
      confirmText?: string;
    }
  ) {}
}
```

Our dialog component is designed to be reusable across the application:
- Title and message are required
- Optional details for additional context
- Customizable confirm button text
- Consistent styling with Material Design
- Proper focus management
- Keyboard navigation support

Now let's use it in our roster component:

```typescript
async deleteStudent(student: Student) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Delete Student',
      message: `Are you sure you want to remove ${student.firstName} ${student.lastName} from the roster?`,
      details: 'This action cannot be undone. All attendance records for this student will also be deleted.',
      confirmText: 'Delete Student'
    },
    width: '400px'
  });

  const result = await dialogRef.afterClosed().toPromise();
  if (result) {
    this.students = this.students.filter(x => x.id !== student.id);
    this.snackBar.open(
      `Removed ${student.firstName} ${student.lastName} from roster`,
      'Dismiss',
      { duration: 3000 }
    );
  }
}
```

The dialog provides several benefits:
1. Clear visual hierarchy with title and content
2. Explicit action buttons
3. Keyboard support (Escape to cancel, Enter to confirm)
4. Focus trap for accessibility
5. Backdrop to emphasize modal state

Options:
- `width/height`: precise control over dialog dimensions
- `disableClose`: prevent closing on backdrop click or escape key
- `position`: custom positioning relative to viewport
- `enterAnimationDuration/exitAnimationDuration`: custom timing
- `panelClass`: custom styling for dialog container
- `backdropClass`: custom styling for backdrop

### Material Snackbar
The snackbar provides a subtle way to communicate brief messages to users. Unlike dialogs, snackbars are non-modal and automatically disappear after a set duration. They're perfect for showing success messages, errors, or undo prompts. Snackbars manage their own positioning and stacking when multiple messages need to be shown.

```typescript
snackBar.open('Message saved', 'Dismiss', {
  duration: 3000,
  horizontalPosition: 'end',
  verticalPosition: 'bottom'
});
```

Options:
- `duration`: auto-hide timing in milliseconds
- `horizontalPosition`: start, center, end, left, right
- `verticalPosition`: top, bottom
- `panelClass`: custom styling classes
- `data`: pass additional data to custom snackbar components
- `politeness`: aria-live value for accessibility

## Implementation

Now that we understand our components, let's implement the roster page:

Add some basic styling:

```scss
// roster.component.scss
:host {
  display: block;
  padding: 1rem;
}

table {
  width: 100%;
}

.mat-mdc-row:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.warn-text {
  color: var(--warn-color);
}

.mat-column-actions {
  width: 100px;
  text-align: right;
}

.mat-column-status {
  width: 80px;
  text-align: center;
}
```

## Adding Interactive Features

Now that we have our table set up with the menu actions, let's add some polish 
to enhance the user experience:

### Confirmation Dialog

When deleting a student, we should ask for confirmation. Let's create a 
confirmation dialog using Material's dialog component:

```typescript
// roster.component.ts
import { 
  MatDialog, 
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose 
} from '@angular/material/dialog';

export class RosterComponent {
  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog
  ) {
    this.students = this.studentService.getAll();
  }

  async deleteStudent(student: Student) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Student',
        message: `Are you sure you want to remove ${student.firstName} ${student.lastName} from the roster?`,
        details: 'This action cannot be undone. All attendance records for this student will also be deleted.',
        confirmText: 'Delete Student'
      },
      width: '400px'
    });

    const result = await dialogRef.afterClosed().toPromise();
    if (result) {
      this.students = this.students.filter(x => x.id !== student.id);
      this.snackBar.open(
        `Removed ${student.firstName} ${student.lastName} from roster`,
        'Dismiss',
        { duration: 3000 }
      );
    }
  }
}
```

Create a new component for the confirmation dialog:

```typescript
// confirm-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { 
  MatDialogRef, 
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose 
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton
  ],
  template: `
    <div class="confirm-dialog">
      <h2 mat-dialog-title>{{data.title}}</h2>
      
      <mat-dialog-content>
        <p>{{data.message}}</p>
        @if (data.details) {
          <p class="details">{{data.details}}</p>
        }
      </mat-dialog-content>
      
      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false">
          Cancel
        </button>
        <button mat-button 
                color="warn" 
                [mat-dialog-close]="true"
                class="confirm-button">
          {{data.confirmText || 'Delete'}}
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .confirm-dialog {
      padding: 1rem;
    }
    
    mat-dialog-content {
      min-width: 320px;
    }

    .details {
      color: var(--mdc-theme-text-secondary-on-background);
      font-size: 0.9em;
      margin-top: 0.5rem;
    }
    
    mat-dialog-actions {
      justify-content: flex-end;
      gap: 8px;
      padding: 1rem 0 0;
    }

    .confirm-button {
      margin-left: 8px;
    }
  `]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      message: string;
      details?: string;
      confirmText?: string;
    }
  ) {}
}
```

```typescript
// roster.component.ts
import { 
  MatDialog, 
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose 
} from '@angular/material/dialog';

// ... other imports remain the same

@Component({
  // ...
  imports: [
    MatTable, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatCell, MatCellDef, MatRow, MatRowDef, MatColumnDef,
    MatIcon,
    MatButton, MatIconButton,
    MatMenu, MatMenuItem, MatMenuTrigger,
    MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose
  ]
})
```

### Status Feedback

When marking a student present or absent, let's provide visual feedback using 
Material's snackbar:

```typescript
// roster.component.ts
import { 
  MatSnackBar, 
  MatSnackBarLabel, 
  MatSnackBarActions,
  MatSnackBarAction 
} from '@angular/material/snack-bar';

export class RosterComponent {
  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.students = this.studentService.getAll();
  }

  markPresent(student: Student) {
    student.status = 'present';
    this.snackBar.open(
      `Marked ${student.firstName} as present`,
      'Dismiss',
      { duration: 3000 }
    );
  }

  markAbsent(student: Student) {
    student.status = 'absent';
    this.snackBar.open(
      `Marked ${student.firstName} as absent`,
      'Dismiss',
      { duration: 3000 }
    );
  }
}
```

```typescript
// roster.component.ts
import { 
  MatSnackBar, 
  MatSnackBarLabel, 
  MatSnackBarActions,
  MatSnackBarAction 
} from '@angular/material/snack-bar';

// ... other imports remain the same

@Component({
  // ...
  imports: [
    MatTable, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatCell, MatCellDef, MatRow, MatRowDef, MatColumnDef,
    MatIcon,
    MatButton, MatIconButton,
    MatMenu, MatMenuItem, MatMenuTrigger,
    MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,
    MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction
  ]
})
```

Now our roster page has:
- A clean, organized table layout
- Contextual menus for student actions
- Confirmation dialogs for destructive actions
- Visual feedback for status changes

In a future chapter, we'll implement the student details page and wire up the 
navigation.
