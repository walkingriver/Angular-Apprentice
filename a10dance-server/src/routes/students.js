import express from 'express';
import asyncHandler from 'express-async-handler';
import { db } from '../db.js';

export const router = express.Router();

// Get all students
router.get('/', asyncHandler(async (req, res) => {
  await db.read();
  res.json(db.data.students);
}));

// Get student by ID
router.get('/:id', asyncHandler(async (req, res) => {
  await db.read();
  const student = db.data.students.find(s => s.id === req.params.id);
  if (!student) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  res.json(student);
}));

// Create new student
router.post('/', asyncHandler(async (req, res) => {
  await db.read();
  const newId = (db.data.students.length + 1).toString();
  const newStudent = { id: newId, ...req.body };
  db.data.students.push(newStudent);
  await db.write();
  res.status(201).json(newStudent);
}));

// Update student
router.put('/:id', asyncHandler(async (req, res) => {
  await db.read();
  const index = db.data.students.findIndex(s => s.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  db.data.students[index] = { ...db.data.students[index], ...req.body };
  await db.write();
  res.json(db.data.students[index]);
}));

// Delete student
router.delete('/:id', asyncHandler(async (req, res) => {
  await db.read();
  const index = db.data.students.findIndex(s => s.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }
  db.data.students.splice(index, 1);
  await db.write();
  res.status(204).send();
}));
