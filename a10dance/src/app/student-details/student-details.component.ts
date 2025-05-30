import {
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  resource,
  signal,
  type Signal,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRoute,
  Router,
  RouterLink,
} from '@angular/router';
import { WebcamComponent } from '../shared/webcam/webcam.component';
import { type Student } from '../students.interface';
import { STUDENTS_SERVICE } from '../students.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterLink,
    WebcamComponent,
  ],
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private studentsService = inject(STUDENTS_SERVICE);
  private snackBar = inject(MatSnackBar);

  // 📝 Required input signal for student ID
  readonly studentId: Signal<string> =
    input.required();

  // 🎯 Form state signals
  readonly student = linkedSignal(
    () =>
      this.loadStudent.value() ?? {
        id: '',
        firstName: '',
        lastName: '',
        birthDate: undefined,
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        photoUrl: '',
      }
  );
  readonly isLoading = computed(() =>
    this.loadStudent.isLoading()
  );
  readonly showCamera = signal(false);
  readonly formErrors = signal<Record<string, string>>(
    {}
  );

  // 🔄 Form validation computed signal
  readonly isValid = computed(() => {
    const student = this.student();
    const hasFirstName = !!student.firstName?.trim();
    const hasLastName = !!student.lastName?.trim();
    return hasFirstName && hasLastName;
  });

  loadStudent = resource({
    request: () => ({ id: this.studentId() }),
    loader: ({ request }) => {
      return Promise.resolve(
        this.studentsService.getById(request.id)
      );
    },
  });

  // 📝 Form update methods
  updateField(fieldName: keyof Student, value: any) {
    this.student.update(s => ({
      ...s,
      [fieldName]: value,
    }));
  }

  // 🔍 Form validation helper
  private validateForm(form: NgForm): string[] {
    const errors: Record<string, string> = {};
    const errorMessages: string[] = [];
    let hasErrors = false;

    if (
      form.form.get('firstName')?.hasError('required')
    ) {
      const message = 'First name is required';
      errors['firstName'] = message;
      errorMessages.push(message);
      hasErrors = true;
    }

    if (
      form.form.get('lastName')?.hasError('required')
    ) {
      const message = 'Last name is required';
      errors['lastName'] = message;
      errorMessages.push(message);
      hasErrors = true;
    }

    if (
      form.form.get('parentEmail')?.hasError('email')
    ) {
      const message =
        'Please enter a valid email address';
      errors['parentEmail'] = message;
      errorMessages.push(message);
      hasErrors = true;
    }

    this.formErrors.set(errors);

    if (hasErrors) {
      this.snackBar.open(
        'Please fix the form errors',
        'Close',
        { duration: 3000 }
      );
    }

    return errorMessages;
  }

  // 📝 Form submission handler
  async onSubmit(form: NgForm): Promise<boolean> {
    if (!form.valid || !this.isValid()) {
      const errors = this.validateForm(form);
      // Announce form errors to screen readers
      if (errors.length > 0) {
        const errorMessage = `Form has ${errors.length} error${errors.length > 1 ? 's' : ''}: ${errors.join(', ')}`;
        this.announceToScreenReader(errorMessage);
      }
      return false;
    }

    this.isLoading.set(true);
    try {
      await this.studentsService.update(
        this.student()
      );
      this.snackBar.open(
        'Student updated successfully! 🎉',
        'Close',
        {
          duration: 3000,
        }
      );
      await this.router.navigate(['/roster']);
      return true;
    } catch (error) {
      const errorMessage =
        'Error updating student: Please try again';
      this.snackBar.open(errorMessage, 'Close', {
        duration: 3000,
      });
      this.announceToScreenReader(errorMessage);
      return false;
    } finally {
      this.isLoading.set(false);
    }
  }

  // 📢 Screen reader announcements
  private announceToScreenReader(
    message: string
  ): void {
    // Create a live region for screen reader announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.classList.add('cdk-visually-hidden');
    document.body.appendChild(liveRegion);

    // Set the message and remove after announcement
    liveRegion.textContent = message;
    setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 3000);
  }

  // 📸 Camera controls
  toggleCamera() {
    this.showCamera.update(show => !show);
  }

  onPhotoTaken(photoUrl: string) {
    this.updateField('photoUrl', photoUrl);
    this.showCamera.set(false);
  }
}
