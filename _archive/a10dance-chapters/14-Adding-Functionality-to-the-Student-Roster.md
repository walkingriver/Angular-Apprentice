# Adding Functionality to the Student Roster

In this chapter, we'll enhance our roster page with student management functionality using Angular Material components and modern Angular practices. We'll implement features that a teacher would need in a real classroom:

- Mark students as present or absent
- View and edit student details
- Remove students from the class (with confirmation)

## Setting Up the Material Table

First, let's create our roster component using standalone components from Angular Material:

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

Next, let's create our table template with responsive design in mind:

```html
<!-- roster.component.html -->
<div class="roster-container">
  <table mat-table [dataSource]="students">
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef>Name</th>
      <td mat-cell *matCellDef="let student" [attr.title]="student.lastName + ', ' + student.firstName">
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

For styling, we'll use flexbox and Material Design system colors:

```scss
// roster.component.scss
.roster-container {
  width: 100%;
}

// Override Material table styles
::ng-deep .mat-mdc-table {
  background: transparent !important;
  
  // Remove all default borders
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

  &:last-child {
    border-bottom: none;
  }

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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-column-status {
  text-align: center;
  margin: 0 24px;
}

.mat-column-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.warn-text {
  color: var(--mat-warn-color);
}

@media (max-width: 768px) {
  .mat-mdc-row,
  .mat-mdc-header-row {
    padding: 0 8px;
  }
}
```

## Student Service

Our service needs to handle basic student management:

```typescript
// students.service.ts
import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  status?: 'present' | 'absent';
}

let mockStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine' },
  { id: '2', firstName: 'Jonathan', lastName: 'Bennett' },
  // ... more students
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  getAll() {
    return [...mockStudents];
  }

  delete(student: Student) {
    mockStudents = mockStudents.filter(s => s.id !== student.id);
    return [...mockStudents];
  }
}
```

## Student Actions

For student actions, we'll implement:

1. Status Updates
```typescript
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
```

2. Student Deletion
```typescript
deleteStudent(student: Student) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Delete Student',
      message: `Are you sure you want to delete ${student.firstName} ${student.lastName}?`,
      confirmText: 'Delete',
      cancelText: 'Cancel'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.students = this.studentsService.delete(student);
      this.snackBar.open(
        `Deleted ${student.firstName} ${student.lastName}`,
        'Dismiss',
        { duration: 3000 }
      );
    }
  });
}
```

## Mobile Support

For mobile devices, we use a bottom sheet instead of the menu:

```typescript
openActions(student: Student) {
  this.bottomSheet.open(StudentActionsBottomSheet, {
    data: {
      student,
      onAction: (action: string) => {
        switch (action) {
          case 'present':
            this.markPresent(student);
            break;
          case 'absent':
            this.markAbsent(student);
            break;
          case 'delete':
            this.deleteStudent(student);
            break;
        }
      }
    }
  });
}
```

Our roster component now provides:
1. Clean, responsive table layout
2. Mobile-friendly actions
3. Consistent Material Design styling
4. Basic student management functionality

Next, we'll add more advanced features like student details and attendance tracking.
