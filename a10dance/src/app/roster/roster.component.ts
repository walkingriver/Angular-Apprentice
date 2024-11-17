import { Component, inject, signal, effect } from '@angular/core';
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
import { 
  MatDialog, 
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose 
} from '@angular/material/dialog';
import { 
  MatSnackBar, 
  MatSnackBarLabel, 
  MatSnackBarActions,
  MatSnackBarAction 
} from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { StudentsService } from '../students.service';
import { Student } from '../students.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { StudentActionsBottomSheet } from '../student-actions/student-actions.bottom-sheet';

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
    MatMenuTrigger,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
    // Components
    ConfirmDialogComponent,
    StudentActionsBottomSheet
  ],
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent {
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private bottomSheet = inject(MatBottomSheet);
  private breakpointObserver = inject(BreakpointObserver);
  private studentService = inject(StudentsService);

  students: Student[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];
  
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
    this.students = this.studentService.getAll();

    // Optional: Log mobile state changes
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
