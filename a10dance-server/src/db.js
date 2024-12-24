import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { faker } from '@faker-js/faker';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbFile = join(__dirname, '../data/db.json');

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(dbFile);
const db = new Low(adapter, { students: [] });

// Generate initial student data
function generateStudents(count = 25) {
  return Array.from({ length: count }, (_, index) => ({
    id: (index + 1).toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: faker.date.between({ from: '2016-01-01', to: '2018-12-31' }),
    parentName: faker.person.fullName(),
    parentEmail: faker.internet.email(),
    parentPhone: faker.phone.number(),
    photoUrl: faker.image.avatar(),
    status: null
  }));
}

// Initialize database with sample data if empty
export async function initializeDb() {
  await db.read();
  
  if (!db.data?.students?.length) {
    db.data = { students: generateStudents() };
    await db.write();
  }
}

export { db };
