import { Injectable } from '@angular/core';

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

let mockStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine' },
  { id: '2', firstName: 'Jonathan', lastName: 'Bennett' },
  { id: '3', firstName: 'Neil', lastName: 'Estandarte' },
  { id: '4', firstName: 'Jen', lastName: 'Townsend' },
  { id: '5', firstName: 'Casey', lastName: 'McBride' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner' }
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor() { }

  getAll() {
    return [...mockStudents];
  }

  getById(id: string) {
    return mockStudents.find(s => s.id === id);
  }

  update(student: Student) {
    const index = mockStudents.findIndex(s => s.id === student.id);
    if (index !== -1) {
      mockStudents[index] = { ...student };
      return true;
    }
    return false;
  }

  delete(student: Student) {
    mockStudents = mockStudents.filter(s => s.id !== student.id);
    return [...mockStudents];
  }
}
