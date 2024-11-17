# Adding Student Details and Responsive Actions

In this chapter, we'll enhance our roster page with student details and implement responsive action menus. We'll use Material's bottom sheet component for a more mobile-friendly experience when the screen is narrow, and we'll leverage Angular's signals for reactive state management.

## Responsive Design with Signals

Angular's signals provide a more efficient and intuitive way to handle reactive state compared to traditional observables. For our responsive design, we'll convert the breakpoint observer's observable to a signal:

```typescript
import { Component, inject, signal, effect } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  // ... other component metadata
})
export class RosterComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // Convert breakpoint observable to signal
  readonly isMobile = toSignal(
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).pipe(
      map(result => result.matches)
    ),
    { initialValue: false }
  );

  constructor() {
    // Optional: Track mobile state changes
    effect(() => {
      console.log('Mobile state:', this.isMobile());
    });
  }
}
```

> [!NOTE]
> Signals offer several advantages over observables for UI state:
> 1. More efficient change detection
> 2. Simpler syntax in templates (no async pipe needed)
> 3. Automatic cleanup (no need to unsubscribe)
> 4. Better TypeScript integration
> 5. Built-in effects for side effects
>
> The `toSignal()` function bridges the gap between RxJS observables and signals, 
> making it easy to integrate with existing Angular APIs that use observables.

In our template, we can use the signal directly without an async pipe:

```html
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
      <!-- Existing menu items -->
    </mat-menu>
  }
</td>
```

## Bottom Sheet for Mobile Actions

On mobile devices, menus that work well on desktop can be awkward to use. Material Design provides the bottom sheet component as a mobile-friendly alternative. Bottom sheets slide up from the bottom of the screen, providing a larger touch target area and a more natural interaction pattern on mobile devices.

First, let's create our bottom sheet component:

```typescript
// student-actions.bottom-sheet.ts
import { Component, Inject } from '@angular/core';
import { 
  MatBottomSheetRef, 
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet 
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Student } from '../students.service';

@Component({
  selector: 'app-student-actions',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  template: `
    <mat-nav-list>
      <h3 matSubheader>
        {{data.student.firstName}} {{data.student.lastName}}
      </h3>

      <a mat-list-item (click)="markPresent()">
        <mat-icon matListItemIcon>visibility</mat-icon>
        <span matListItemTitle>Mark Present</span>
      </a>

      <a mat-list-item (click)="markAbsent()">
        <mat-icon matListItemIcon>visibility_off</mat-icon>
        <span matListItemTitle>Mark Absent</span>
      </a>

      <a mat-list-item (click)="viewDetails()">
        <mat-icon matListItemIcon>person</mat-icon>
        <span matListItemTitle>View Details</span>
      </a>

      <a mat-list-item (click)="delete()" class="warn-item">
        <mat-icon matListItemIcon color="warn">delete</mat-icon>
        <span matListItemTitle>Delete Student</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    .warn-item {
      color: var(--mdc-theme-error);
    }

    h3 {
      margin: 0;
      padding: 16px;
      background: var(--mdc-theme-surface-variant);
      color: var(--mdc-theme-on-surface-variant);
    }
  `]
})
export class StudentActionsBottomSheet {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<StudentActionsBottomSheet>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {
      student: Student;
      onAction: (action: string) => void;
    }
  ) {}

  markPresent() {
    this.data.onAction('present');
    this.bottomSheetRef.dismiss();
  }

  markAbsent() {
    this.data.onAction('absent');
    this.bottomSheetRef.dismiss();
  }

  viewDetails() {
    this.data.onAction('details');
    this.bottomSheetRef.dismiss();
  }

  delete() {
    this.data.onAction('delete');
    this.bottomSheetRef.dismiss();
  }
}
```

Now let's update our roster component to use either the menu or bottom sheet based on screen size:

```typescript
// roster.component.ts
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { StudentActionsBottomSheet } from './student-actions.bottom-sheet';

export class RosterComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // Convert breakpoint observable to signal
  readonly isMobile = toSignal(
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).pipe(
      map(result => result.matches)
    ),
    { initialValue: false }
  );

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private breakpointObserver: BreakpointObserver
  ) {
    this.students = this.studentService.getAll();
  }

  openActions(student: Student) {
    if (isMobile()) {
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
              case 'details':
                // We'll implement this later
                break;
            }
          }
        }
      });
    } else {
      // Use existing menu
    }
  }
}
```

The bottom sheet provides several advantages for mobile users:
1. Larger touch targets
2. More natural mobile interaction pattern
3. Room for additional context (like student name)
4. Easy dismissal with swipe
5. Built-in backdrop and animations

Options:
- `hasBackdrop`: control backdrop visibility
- `backdropClass`: custom backdrop styling
- `ariaLabel`: accessibility label
- `closeOnNavigation`: auto-close on navigation
- `data`: pass data to the bottom sheet
- `panelClass`: custom panel styling

## Student Details Component

[We'll continue with the student details implementation in the next section...]
