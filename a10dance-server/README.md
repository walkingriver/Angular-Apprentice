# A10dance Server

A simple REST API server for the A10dance student management application. This server provides CRUD operations for student data and persists it to a JSON file using lowdb.

## Features

- RESTful API endpoints for student management
- Automatic sample data generation using Faker.js
- JSON file-based persistence
- CORS enabled
- Request logging

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

The server will run on http://localhost:3000

## API Endpoints

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a specific student
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student
- `GET /health` - Server health check

## Development

For development with auto-reload:
```bash
npm run dev
```

## Data Storage

Student data is stored in `data/db.json`. The database is automatically initialized with sample data on first run.
