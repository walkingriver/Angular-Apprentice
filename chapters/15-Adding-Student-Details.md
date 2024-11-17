# Adding Student Details and Responsive Actions

In this chapter, we'll enhance our roster page with student details and implement responsive behavior using Angular Signals.

## Understanding Angular Signals

Signals represent Angular's modern approach to reactive programming. They provide a way to handle reactive state that's more efficient and developer-friendly than traditional observables or zone-based change detection.

### What are Signals?

A signal is a wrapper around a value that notifies interested consumers when that value changes. Think of it like a "smart" variable that:
1. Knows when its value changes
2. Notifies only the components that actually use that value
3. Updates the UI efficiently without checking everything

Here's a simple example:
```typescript
// Create a signal with an initial value
const count = signal(0);

// Read the signal's value
console.log(count()); // 0

// Update the signal's value
count.set(1);

// Transform the value while setting
count.update(current => current + 1);
```

### Why Signals?

Angular introduced signals to address several challenges:

1. **Performance**
   - Traditional change detection checks everything
   - Signals enable fine-grained updates
   - Only affected parts of the UI are updated

2. **Developer Experience**
   - Simpler syntax than RxJS for basic reactivity
   - Better TypeScript integration
   - No need to manage subscriptions

3. **Debugging**
   - Clear data flow
   - Easy to track value changes
   - Built-in debugging capabilities

### Types of Signals

Angular provides several types of signals:

1. **Writable Signals**
   ```typescript
   const name = signal('Alice');
   name.set('Bob');           // Direct set
   name.update(n => n + '!'); // Update with function
   ```

2. **Computed Signals**
   ```typescript
   const firstName = signal('John');
   const lastName = signal('Doe');
   const fullName = computed(() => 
     `${firstName()} ${lastName()}`
   );
   ```

3. **Effects**
   ```typescript
   effect(() => {
     console.log(`Name changed to: ${name()}`);
   });
   ```

### Converting from Observables

Many Angular APIs still use RxJS observables. The `toSignal()` function bridges this gap:

```typescript
import { toSignal } from '@angular/core/rxjs-interop';

// Convert observable to signal
const data = toSignal(someObservable$, {
  initialValue: defaultValue
});
```

### Best Practices

When working with signals:

1. **Granularity**
   - Create signals for atomic pieces of state
   - Use computed signals for derived values
   - Don't create signals for static data

2. **Immutability**
   - Treat signal values as immutable
   - Create new objects/arrays when updating
   - Use `.update()` for transformations

3. **Effects**
   - Use effects for side effects only
   - Keep effects focused and small
   - Clean up resources in effect cleanup functions

4. **Performance**
   - Minimize computations in computed signals
   - Use signals at the right level of the component tree
   - Batch updates when possible

## Implementing Responsive Design with Signals

Now that we understand signals, let's use them to implement responsive behavior in our roster page. We'll create a signal that tracks whether the user is on a mobile device:

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
import { Component, inject } from '@angular/core';
import { 
  MatBottomSheetRef, 
  MAT_BOTTOM_SHEET_DATA
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
  private bottomSheetRef = inject(MatBottomSheetRef<StudentActionsBottomSheet>);
  protected data = inject(MAT_BOTTOM_SHEET_DATA) as {
    student: Student;
    onAction: (action: string) => void;
  };

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
import { Component, inject, effect } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { toSignal } from '@angular/core/rxjs-interop';
import { StudentActionsBottomSheet } from './student-actions.bottom-sheet';

export class RosterComponent {
  private bottomSheet = inject(MatBottomSheet);
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

  openActions(student: Student) {
    if (this.isMobile()) {
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
    }
  }
}
```

In our template, we use the signal directly:

```html
<!-- roster.component.html -->
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

## Student Details Component

[We'll continue with the student details implementation in the next section...]
