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
  status?: 'present' | 'absent';
}

export interface StudentsService {
  // Signal access
  students: Signal<Student[]>;
  getStudentsSignal(): Signal<Student[]>;

  // Data access
  getAll(): Student[];
  getById(id: string): Student | undefined;

  // Mutations
  update(student: Student): Signal<Student | null>;
  delete(student: Student): Signal<Student | undefined>;
  add(student: Student): Signal<Student | null>;
  updateAttendance(studentId: string, status: Student['status']): void;

  // Debug operations
  seedSampleData(): void;
  resetAttendance(): void;
  clearAllData(): void;
}
