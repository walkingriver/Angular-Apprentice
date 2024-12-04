# Creating the Student Details Page

In this chapter, we'll create a details page that allows us to edit student information. We'll use Angular's template-driven forms, which provide a straightforward way to handle form data and user input.

## Creating the Component

First, let's use the Angular CLI to create our component:

```bash
ng generate component student-details --standalone
```

This command creates four files:
1. `student-details.component.ts`: The component class
2. `student-details.component.html`: The template
3. `student-details.component.scss`: The styles
4. `student-details.component.spec.ts`: The test file

## Understanding Template Forms

Before we dive in, let's understand what template-driven forms are. Angular offers two approaches to handling forms:

1. **Template-driven forms**: Forms where most of the logic lives in the template
2. **Reactive forms**: Forms where the logic lives in the component class

For this introduction, we'll use template-driven forms because they:
- Are easier to understand
- Require less code
- Follow a more familiar HTML-first approach
- Handle common scenarios well

## Understanding Material Form Components

Let's look at the key Material components we'll be using:

1. **MatFormField**
   - A wrapper component that provides structure for input fields
   - Handles labels, hints, and error messages
   - Supports different appearances (outline, fill, etc.)
   - Example: `<mat-form-field appearance="outline">`

2. **MatLabel**
   - Provides the floating label for form fields
   - Animates when the field is focused
   - Example: `<mat-label>First Name</mat-label>`

3. **MatInput**
   - A directive that enhances native input elements
   - Adds Material Design styling
   - Integrates with MatFormField
   - Example: `<input matInput>`

4. **MatDatepicker**
   - A calendar-based date picker
   - Supports various date formats
   - Includes a toggle button
   - Example:
     ```html
     <mat-form-field>
       <input matInput [matDatepicker]="picker">
       <mat-datepicker-toggle [for]="picker"></mat-datepicker-toggle>
       <mat-datepicker #picker></mat-datepicker>
     </mat-form-field>
     ```

5. **MatButton**
   - Enhanced button with Material Design styling
   - Supports different variants (basic, raised, stroked)
   - Includes ripple effects and states
   - Example: `<button mat-raised-button color="primary">`

## Setting Up the Component

First, let's create our student details component:

```typescript
// student-details.component.ts
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepicker, MatDatepickerInput } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentsService, Student } from '../students.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatDatepicker,
    MatDatepickerInput
  ],
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private studentsService = inject(StudentsService);
  private snackBar = inject(MatSnackBar);

  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    parentName: '',
    parentEmail: '',
    parentPhone: ''
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const foundStudent = this.studentsService.getById(id);
      if (foundStudent) {
        this.student = { ...foundStudent };
      } else {
        this.router.navigate(['/roster']);
      }
    }
  }

  onSubmit() {
    if (this.student.id) {
      this.studentsService.update(this.student);
      this.snackBar.open('Student updated successfully', 'Close', {
        duration: 3000
      });
    }
    this.router.navigate(['/roster']);
  }

  onCancel() {
    this.router.navigate(['/roster']);
  }
}
```

Let's examine what's happening here:

1. **FormsModule**: This module provides the directives we need for template-driven forms
2. **Material Form Fields**: Components that provide styled, accessible form inputs
3. **Route Handling**: We get the student ID from the URL and load their data
4. **Navigation**: Methods to handle form submission and cancellation

## Creating the Form Template

Now let's create our form using Material's form field components:

```html
<!-- student-details.component.html -->
<div class="student-details">
  <h2>Student Details</h2>

  <form #studentForm="ngForm" (ngSubmit)="onSubmit()" class="student-form">
    <div class="form-row">
      <mat-form-field appearance="outline">
        <mat-label>First Name</mat-label>
        <input matInput
               required
               [(ngModel)]="student.firstName"
               name="firstName"
               placeholder="Enter first name">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Last Name</mat-label>
        <input matInput
               required
               [(ngModel)]="student.lastName"
               name="lastName"
               placeholder="Enter last name">
      </mat-form-field>
    </div>

    <div class="form-row">
      <mat-form-field appearance="outline">
        <mat-label>Birth Date</mat-label>
        <input matInput
               [matDatepicker]="picker"
               [(ngModel)]="student.birthDate"
               name="birthDate"
               placeholder="Choose a date">
        <mat-datepicker-toggle matIconSuffix [for]="picker">
        </mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </div>

    <div class="form-row">
      <mat-form-field appearance="outline">
        <mat-label>Parent/Guardian Name</mat-label>
        <input matInput
               [(ngModel)]="student.parentName"
               name="parentName"
               placeholder="Enter parent/guardian name">
      </mat-form-field>
    </div>

    <div class="form-row">
      <mat-form-field appearance="outline">
        <mat-label>Parent Email</mat-label>
        <input matInput
               type="email"
               [(ngModel)]="student.parentEmail"
               name="parentEmail"
               placeholder="Enter parent email">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Parent Phone</mat-label>
        <input matInput
               type="tel"
               [(ngModel)]="student.parentPhone"
               name="parentPhone"
               placeholder="Enter parent phone">
      </mat-form-field>
    </div>

    <div class="form-actions">
      <button mat-button
              type="button"
              (click)="onCancel()">
        Cancel
      </button>
      <button mat-raised-button
              color="primary"
              type="submit">
        Save
      </button>
    </div>
  </form>
</div>
```

Let's look at the key form features:

1. **Template Reference**: `#studentForm="ngForm"` creates a reference to the form
2. **Two-way Binding**: `[(ngModel)]` binds form fields to our student object
3. **Material Form Fields**: Provide consistent styling and behavior
4. **Form Layout**: Organized in rows for better visual structure

## Styling the Form

Finally, let's add styles to make our form responsive:

```scss
// student-details.component.scss
.student-details {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 2rem;
  color: var(--mat-toolbar-container-text-color);
}

.student-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  mat-form-field {
    width: 100%;
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

// Tablet and up
@media (min-width: 600px) {
  .student-details {
    padding: 2rem;
  }

  .form-row {
    flex-direction: row;
    
    mat-form-field {
      flex: 1;
    }

    // Single field rows
    &:nth-child(2),
    &:nth-child(3) {
      mat-form-field {
        max-width: 50%;
      }
    }
  }
}
```

Our styles ensure that:
1. The form is centered with a maximum width
2. Fields stack on mobile and align side-by-side on larger screens
3. Single fields don't stretch too wide
4. Spacing is consistent throughout

## Next Steps

In the next chapter, we'll add form validation to ensure data quality. We'll learn about:
- Required fields
- Email validation
- Phone number formatting
- Error messages
- Form state management

For now, try creating and editing some students. Notice how the form handles different screen sizes and provides a smooth user experience.
