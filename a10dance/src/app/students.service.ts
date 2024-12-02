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
  private students: Student[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        this.students = JSON.parse(stored);
      } catch (e) {
        console.error('Error loading students from storage:', e);
        this.students = [...defaultStudents];
      }
    } else {
      // First time use - initialize with default data
      this.students = [...defaultStudents];
      this.saveToStorage();
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.students));
    } catch (e) {
      console.error('Error saving students to storage:', e);
    }
  }

  getAll() {
    return [...this.students];
  }

  getById(id: string) {
    return this.students.find(s => s.id === id);
  }

  update(student: Student) {
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students[index] = { ...student };
      this.saveToStorage();
      return true;
    }
    return false;
  }

  delete(student: Student) {
    this.students = this.students.filter(s => s.id !== student.id);
    this.saveToStorage();
    return [...this.students];
  }

  add(student: Student) {
    // Ensure unique ID
    if (!student.id) {
      student.id = Date.now().toString();
    }
    this.students.push({ ...student });
    this.saveToStorage();
    return [...this.students];
  }
}
