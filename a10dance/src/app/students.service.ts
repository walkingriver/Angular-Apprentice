import {
  Injectable,
  InjectionToken,
  Signal,
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
  private readonly students = signal<Student[]>(
    this.loadFromStorage()
  );

  /**
   * Loads the entire students roster from local storage.
   * The reason we are using promises is because most
   * storage options are asynchronous in some way, so we
   * wanted to simulate that here.
   *
   * @returns Promise of an Array of Students
   */
  private loadFromStorage(): Student[] {
    try {
      const stored = localStorage.getItem(
        this.STORAGE_KEY
      );
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading from storage:', e);
    }

    return [];
  }

  private saveToStorage() {
    try {
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.students())
      );
    } catch (e) {
      console.error('Error saving to storage:', e);
    }
  }

  /**
   * Returns a signal containing the current list of students.
   * @returns A signal that emits the current array of students
   */
  getStudents(): Signal<Student[]> {
    return this.students;
  }

  /**
   * Retrieves a student by their ID.
   * Returns a shallow copy of the student, which is safe since Student properties
   * are either primitives or immutable Date objects.
   * @param id The ID of the student to find
   * @returns A shallow copy of the student object if found
   * @throws Error if no student is found with the given ID
   */
  getById(id: string): Student {
    const student = this.students().find(s => s.id === id);
    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }
    return { ...student };
  }

  /**
   * Updates an existing student's information.
   * If the student doesn't exist, no changes are made.
   * If storage fails, changes are reverted.
   * @param student The student object with updated information
   */
  update(student: Student) {
    // Store the original students array to potentially revert changes
    const originalStudents = this.students();

    this.students.update(students => {
      // Find the index of the student to update
      const index = students.findIndex(
        s => s.id === student.id
      );

      // If student is found, create a new array with the updated student
      if (index !== -1) {
        const updated = [...students];
        updated[index] = { ...student };
        return updated;
      }

      // If student not found, return original array
      return students;
    });

    try {
      // Attempt to save to storage
      this.saveToStorage();
    } catch (error) {
      // If storage save fails, revert the students array
      console.error(
        'Failed to save students to storage:',
        error
      );
      this.students.set(originalStudents);
    }
  }

  /**
   * Removes a student from the roster.
   * If storage fails, changes are reverted.
   * @param student The student to remove
   */
  delete(student: Student) {
    // Store the original students array to potentially revert changes
    const originalStudents = this.students();

    this.students.update(students =>
      students.filter(s => s.id !== student.id)
    );

    try {
      // Attempt to save to storage
      this.saveToStorage();
    } catch (error) {
      // If storage save fails, revert the students array
      console.error(
        'Failed to save students to storage:',
        error
      );
      this.students.set(originalStudents);
    }
  }

  /**
   * Adds a new student to the roster.
   * Automatically generates an ID if one is not provided.
   * If storage fails, changes are reverted.
   * @param student The student to add
   */
  add(student: Student) {
    // Store the original students array to potentially revert changes
    const originalStudents = this.students();

    // Ensure unique ID
    if (!student.id) {
      student.id = crypto.randomUUID();
    }

    this.students.update(students => [
      ...students,
      { ...student },
    ]);

    try {
      // Attempt to save to storage
      this.saveToStorage();
    } catch (error) {
      // If storage save fails, revert the students array
      console.error(
        'Failed to save students to storage:',
        error
      );
      this.students.set(originalStudents);
    }
  }

  /**
   * Updates a student's attendance status.
   * If storage fails, changes are reverted.
   * @param studentId The ID of the student to update
   * @param status The new attendance status ('present' or 'absent')
   */
  updateAttendance(
    studentId: string,
    status: 'absent' | 'present'
  ) {
    this.students.update(students =>
      students.map(student =>
        student.id === studentId
          ? { ...student, status }
          : student
      )
    );
    this.saveToStorage();
  }

  /**
   * Populates the roster with sample student data.
   * Warning: This will overwrite any existing data.
   */
  seedSampleData() {
    this.students.set(
      generateFakeStudents(CLASS_SIZE)
    );
    this.saveToStorage();
  }

  /**
   * Resets the attendance status for all students.
   * If storage fails, changes are reverted.
   */
  resetAttendance() {
    this.students.update(students =>
      students.map(student => ({
        ...student,
        status: undefined,
      }))
    );
    this.saveToStorage();
  }

  /**
   * Removes all students from the roster.
   * Warning: This will permanently delete all student data.
   */
  clearAllData() {
    this.students.set([]);
    this.saveToStorage();
  }
}
