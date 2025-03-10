import {
  BreakpointObserver,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
} from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { StudentActionsBottomSheet } from '../student-actions/student-actions.bottom-sheet';
import {
  Student,
  StudentsService,
} from '../students.interface';
import { STUDENTS_SERVICE } from '../students.service';

@Component({
  selector: 'app-roster',
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
    MatIconButton,
    // Components
    RouterLink,
  ],
  host: {
    class: 'app-roster',
  },
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
})
export class RosterComponent {
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private studentsService = inject<StudentsService>(
    STUDENTS_SERVICE
  );
  private bottomSheet = inject(MatBottomSheet);
  private breakpointObserver = inject(
    BreakpointObserver
  );

  // `students` is a Signal, meaning we get notified
  // whenever its value changes.
  students = this.studentsService.getStudents();

  displayedColumns = ['avatar', 'name', 'actions'];

  // Convert breakpoint observable to signal
  readonly isMobile = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );

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
        },
      },
    });
  }

  markPresent(student: Student) {
    // TODO: Implement date-based attendance
    // this.studentsService.updateAttendance(student.id, 'present');
    this.snackBar.open(
      `Marked ${student.firstName} as present`,
      'Dismiss',
      { duration: 3000 }
    );
  }

  markAbsent(student: Student) {
    // TODO: Implement date-based attendance
    // this.studentsService.updateAttendance(student.id, 'absent');
    this.snackBar.open(
      `Marked ${student.firstName} as absent`,
      'Dismiss',
      { duration: 3000 }
    );
  }

  deleteStudent(student: Student) {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title: 'Delete Student',
          message: `Are you sure you want to delete ${student.firstName} ${student.lastName}?`,
          confirmText: 'Delete',
          cancelText: 'Cancel',
        },
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentsService.delete(student);
        this.snackBar.open(
          `Deleted ${student.firstName} ${student.lastName}`,
          'Dismiss',
          { duration: 3000 }
        );
      }
    });
  }
}
