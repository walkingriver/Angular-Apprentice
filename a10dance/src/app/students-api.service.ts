import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import {
  Student,
  StudentsService,
} from './students.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentsApiService
  implements StudentsService
{
  private readonly http = inject(HttpClient);
  private readonly API_URL =
    'http://localhost:3000/api/students';

  // Private signal for internal state management
  private _students = signal<Student[]>([]);

  // Public computed signal for read-only access
  readonly students = computed(() => this._students());

  constructor() {
    // Initialize students on service creation
    this.refreshStudents();
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
    return toSignal(
      this.http
        .put<Student>(
          `${this.API_URL}/${student.id}`,
          student
        )
        .pipe(
          map(updatedStudent => {
            this._students.update(students =>
              students.map(s =>
                s.id === updatedStudent.id
                  ? updatedStudent
                  : s
              )
            );
            return updatedStudent;
          }),
          catchError(error => {
            console.error(
              'Error updating student:',
              error
            );
            return of(null);
          })
        ),
      { initialValue: null }
    );
  }

  delete(student: Student) {
    return toSignal(
      this.http
        .delete<void>(`${this.API_URL}/${student.id}`)
        .pipe(
          map(() => {
            this._students.update(students =>
              students.filter(s => s.id !== student.id)
            );
            return undefined;
          }),
          catchError(error => {
            console.error(
              'Error deleting student:',
              error
            );
            return of(student);
          })
        ),
      { initialValue: student }
    );
  }

  add(student: Student) {
    return toSignal(
      this.http
        .post<Student>(this.API_URL, student)
        .pipe(
          map(newStudent => {
            this._students.update(students => [
              ...students,
              newStudent,
            ]);
            return newStudent;
          }),
          catchError(error => {
            console.error(
              'Error adding student:',
              error
            );
            return of(null);
          })
        ),
      { initialValue: null }
    );
  }

  updateAttendance(
    studentId: string,
    status: Student['status']
  ) {
    const student = this.getById(studentId);
    if (student) {
      this.http
        .put<Student>(
          `${this.API_URL}/${studentId}`,
          { ...student, status }
        )
        .pipe(
          map(updatedStudent => {
            // Only update local state after successful server update
            this._students.update(students =>
              students.map(s =>
                s.id === studentId
                  ? updatedStudent
                  : s
              )
            );
          }),
          catchError(error => {
            console.error(
              'Error updating attendance:',
              error
            );
            return of(undefined);
          })
        )
        .subscribe();
    }
  }

  // Debug Functions
  seedSampleData() {
    this.clearAllData();
    this.refreshStudents();
  }

  resetAttendance() {
    const students = this.getAll();
    Promise.all(
      students.map(student =>
        this.update({ ...student, status: undefined })
      )
    );
  }

  clearAllData() {
    const students = this.getAll();
    Promise.all(
      students.map(student => this.delete(student))
    );
  }

  private refreshStudents() {
    toSignal(
      this.http.get<Student[]>(this.API_URL).pipe(
        map(students => {
          this._students.set(students);
          return students;
        }),
        catchError(error => {
          console.error(
            'Error loading students:',
            error
          );
          return of([]);
        })
      ),
      { initialValue: [] }
    );
  }
}
