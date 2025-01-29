import { Signal } from '@angular/core';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: Date;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
}

export interface StudentsService {
  // Signal access
  getStudents(): Signal<Student[]>;
  getById(id: string): Student;

  // Mutations
  add(student: Student): void;
  update(student: Student): void;
  delete(student: Student): void;

  // Attendance
  updateAttendance(
    studentId: string,
    status: 'present' | 'absent'
  ): void;

  // Debug operations
  seedSampleData(): void;
  resetAttendance(): void;
  clearAllData(): void;
}
