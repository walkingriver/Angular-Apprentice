import { Component, inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Student } from '../students.interface';

@Component({
  selector: 'app-student-actions',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  template: `
    <mat-nav-list>
      <h3 matSubheader>
        {{ data.student.firstName }}
        {{ data.student.lastName }}
      </h3>

      <a mat-list-item (click)="markPresent()">
        <mat-icon matListItemIcon>visibility</mat-icon>
        <span matListItemTitle>Mark Present</span>
      </a>

      <a mat-list-item (click)="markAbsent()">
        <mat-icon matListItemIcon
          >visibility_off</mat-icon
        >
        <span matListItemTitle>Mark Absent</span>
      </a>

      <a mat-list-item (click)="viewDetails()">
        <mat-icon matListItemIcon>person</mat-icon>
        <span matListItemTitle>View Details</span>
      </a>

      <a
        mat-list-item
        (click)="delete()"
        class="warn-item"
      >
        <mat-icon matListItemIcon color="warn"
          >delete</mat-icon
        >
        <span matListItemTitle>Delete Student</span>
      </a>
    </mat-nav-list>
  `,
  styles: [
    `
      .warn-item {
        color: var(--mdc-theme-error);
      }

      h3 {
        margin: 0;
        padding: 16px;
        background: var(--mdc-theme-surface-variant);
        color: var(--mdc-theme-on-surface-variant);
      }
    `,
  ],
})
export class StudentActionsBottomSheet {
  private bottomSheetRef = inject(
    MatBottomSheetRef<StudentActionsBottomSheet>
  );
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
