import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-debug-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  template: `
    <button
      mat-icon-button
      [matMenuTriggerFor]="menu"
      class="debug-button"
    >
      <mat-icon>bug_report</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="seedData()">
        <mat-icon>dataset</mat-icon>
        <span>Seed Sample Data</span>
      </button>
      <button
        mat-menu-item
        (click)="resetAttendance()"
      >
        <mat-icon>restart_alt</mat-icon>
        <span>Reset Attendance</span>
      </button>
      <button mat-menu-item (click)="clearData()">
        <mat-icon>delete_forever</mat-icon>
        <span>Clear All Data</span>
      </button>
    </mat-menu>
  `,
  styles: [
    `
      .debug-button {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1000;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    `,
  ],
})
export class DebugMenuComponent {
  private studentsService = inject(StudentsService);
  private snackBar = inject(MatSnackBar);

  seedData() {
    this.studentsService.seedSampleData();
    this.snackBar.open(
      'Sample data seeded',
      'Dismiss',
      {
        duration: 3000,
      }
    );
  }

  resetAttendance() {
    this.studentsService.resetAttendance();
    this.snackBar.open('Attendance reset', 'Dismiss', {
      duration: 3000,
    });
  }

  clearData() {
    this.studentsService.clearAllData();
    this.snackBar.open('All data cleared', 'Dismiss', {
      duration: 3000,
    });
  }
}
