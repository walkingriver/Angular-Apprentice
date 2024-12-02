import { Injectable, signal } from '@angular/core';

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

const defaultStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine' },
  {
    id: '2',
    firstName: 'Jonathan',
    lastName: 'Bennett',
  },
  {
    id: '3',
    firstName: 'Neil',
    lastName: 'Estandarte',
  },
  { id: '4', firstName: 'Jen', lastName: 'Townsend' },
  { id: '5', firstName: 'Casey', lastName: 'McBride' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera' },
  {
    id: '7',
    firstName: 'Troy',
    lastName: 'Gutierrez',
  },
  {
    id: '8',
    firstName: 'Priscilla',
    lastName: 'Little',
  },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins' },
  {
    id: '10',
    firstName: 'Edmund',
    lastName: 'Gardner',
  },
];

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly STORAGE_KEY = 'a10dance_students';
  private studentsSignal = signal<Student[]>([]);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        this.studentsSignal.set(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading students from storage:', e);
        this.studentsSignal.set([...defaultStudents]);
      }
    } else {
      // First time use - initialize with default data
      this.studentsSignal.set([...defaultStudents]);
      this.saveToStorage();
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.studentsSignal()));
    } catch (e) {
      console.error('Error saving students to storage:', e);
    }
  }

  // For components that need the signal
  getStudentsSignal() {
    return this.studentsSignal.asReadonly();
  }

  // For components that need a snapshot
  getAll() {
    return [...this.studentsSignal()];
  }

  getById(id: string) {
    return this.studentsSignal().find(s => s.id === id);
  }

  update(student: Student) {
    const index = this.studentsSignal().findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.studentsSignal.update(students => {
        const updated = [...students];
        updated[index] = { ...student };
        return updated;
      });
      this.saveToStorage();
      return true;
    }
    return false;
  }

  delete(student: Student) {
    this.studentsSignal.update(students => 
      students.filter(s => s.id !== student.id)
    );
    this.saveToStorage();
  }

  add(student: Student) {
    // Ensure unique ID
    if (!student.id) {
      student.id = Date.now().toString();
    }
    this.studentsSignal.update(students => [...students, { ...student }]);
    this.saveToStorage();
  }

  updateAttendance(studentId: string, status: Student['status']) {
    this.studentsSignal.update(students =>
      students.map(student =>
        student.id === studentId
          ? { ...student, status }
          : student
      )
    );
    this.saveToStorage();
  }

  // Debug Functions
  seedSampleData() {
    this.studentsSignal.set([...defaultStudents]);
    this.saveToStorage();
  }

  resetAttendance() {
    this.studentsSignal.update(students =>
      students.map(student => ({
        ...student,
        status: undefined
      }))
    );
    this.saveToStorage();
  }

  clearAllData() {
    this.studentsSignal.set([]);
    this.saveToStorage();
  }
}
