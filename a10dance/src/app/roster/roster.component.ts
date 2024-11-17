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
import { StudentsService } from '../students.service';
import { Student } from '../students.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
    ConfirmDialogComponent
  ],
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent {
  students: Student[] = [];
  displayedColumns: string[] = ['name', 'status', 'actions'];

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
