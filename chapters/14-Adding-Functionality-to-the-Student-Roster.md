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
import { Component } from '@angular/core';
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
  students: Student[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

  constructor(private studentService: StudentsService) {
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

> [!NOTE]
> Notice how we're using Angular's new control flow syntax with `@if` and `@else if` 
> for conditional rendering. However, the Material table still requires its specific 
> structural directives like `*matHeaderCellDef` and `*matCellDef` for defining the 
> table structure. These are part of Material's table API and don't have direct 
> replacements in the new control flow syntax yet.

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
        message: `Are you sure you want to remove ${student.firstName} ${student.lastName} from the roster?`
      }
    });

    const result = await dialogRef.afterClosed().toPromise();
    if (result) {
      this.students = this.students.filter(x => x.id !== student.id);
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
    <h2 mat-dialog-title>{{data.title}}</h2>
    <mat-dialog-content>{{data.message}}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Cancel</button>
      <button mat-button color="warn" [mat-dialog-close]="true">Delete</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-actions {
      justify-content: flex-end;
      gap: 8px;
    }
  `]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      message: string;
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
