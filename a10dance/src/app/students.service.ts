import {
  Injectable,
  InjectionToken,
  computed,
  signal,
} from '@angular/core';
import { faker } from '@faker-js/faker';
import {
  Student,
  StudentsService,
} from './students.interface';

export type {
  Student,
  StudentsService,
} from './students.interface';

const CLASS_SIZE = 25;

const generateFakeStudents = (
  count: number
): Student[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: (index + 1).toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: faker.date.between({
      from: '2016-01-01',
      to: '2018-12-31',
    }),
    parentName: faker.person.fullName(),
    parentEmail: faker.internet.email(),
    parentPhone: faker.phone.number(),
    photoUrl: faker.image.avatar(),
  }));
};

const defaultStudents: Student[] =
  generateFakeStudents(CLASS_SIZE);

export const STUDENTS_SERVICE =
  new InjectionToken<StudentsService>(
    'STUDENTS_SERVICE'
  );

@Injectable({
  providedIn: 'root',
})
export class LocalStorageStudentsService
  implements StudentsService
{
  private readonly STORAGE_KEY = 'a10dance_students';
  private _students = signal<Student[]>([]);
  readonly students = computed(() => this._students());

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(
        this.STORAGE_KEY
      );
      if (stored) {
        this._students.set(JSON.parse(stored));
      } else {
        this._students.set(defaultStudents);
        this.saveToStorage();
      }
    } catch (e) {
      console.error('Error loading from storage:', e);
      this._students.set(defaultStudents);
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this._students())
      );
      return true;
    } catch (e) {
      console.error('Error saving to storage:', e);
      return false;
    }
  }

  getStudentsSignal() {
    return this.students;
  }

  getAll() {
    return [...this._students()];
  }

  getById(id: string) {
    return this._students().find(s => s.id === id);
  }

  update(student: Student) {
    const signal = computed(() => {
      const index = this._students().findIndex(
        s => s.id === student.id
      );
      if (index !== -1) {
        this._students.update(students => {
          const updated = [...students];
          updated[index] = { ...student };
          return updated;
        });
        if (this.saveToStorage()) {
          return student;
        }
      }
      return null;
    });
    return signal;
  }

  delete(student: Student) {
    this._students.update(students => 
      students.filter(s => s.id !== student.id)
    );
    return computed(() => {
      if (this.saveToStorage()) {
        return undefined;
      }
      return student;
    });
  }

  add(student: Student) {
    // Ensure unique ID
    if (!student.id) {
      student.id = Date.now().toString();
    }
    this._students.update(students => [
      ...students,
      { ...student },
    ]);
    return computed(() => {
      if (this.saveToStorage()) {
        return student;
      }
      return null;
    });
  }

  updateAttendance(
    studentId: string,
    status: Student['status']
  ) {
    this._students.update(students =>
      students.map(student =>
        student.id === studentId
          ? { ...student, status }
          : student
      )
    );
    this.saveToStorage();
  }

  seedSampleData() {
    this._students.set(
      generateFakeStudents(CLASS_SIZE)
    );
    this.saveToStorage();
  }

  resetAttendance() {
    this._students.update(students =>
      students.map(student => ({
        ...student,
        status: undefined,
      }))
    );
    this.saveToStorage();
  }

  clearAllData() {
    this._students.set([]);
    this.saveToStorage();
  }
}
