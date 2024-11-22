import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormField, MatLabel, MatError, MatHint, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentsService, Student } from '../students.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
    MatButton,
    MatIconButton,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [
    provideNativeDateAdapter()
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
    birthDate: undefined,
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