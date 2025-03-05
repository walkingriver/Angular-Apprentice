# Bonus Chapter 2: Building a Node.js Backend

While localStorage works well for learning Angular, most real-world applications need a proper backend. In this chapter, we'll create a Node.js/Express backend for A10Dance.

## Setting Up the Backend

### Project Structure
```
a10dance-server/
├── src/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.ts
├── package.json
└── tsconfig.json
```

### Initial Setup
```typescript
import express from 'express';
import cors from 'cors';
import { studentsRouter } from './routes/students';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/students', studentsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
```

## Creating RESTful Endpoints

### Student Routes
```typescript
import express from 'express';
const router = express.Router();

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export const studentsRouter = router;
```

## Handling File Uploads

- Configuring multer for file uploads
- Storing and serving images
- Error handling
- File size limits

## Data Persistence

- Setting up a database (MongoDB)
- Creating schemas
- CRUD operations
- Data validation

## Error Handling

- Global error handler
- Custom error types
- Validation errors
- File upload errors

## Security

- Input validation
- CORS configuration
- Rate limiting
- File upload security

## Testing the Backend

- Unit tests with Jest
- Integration tests
- API testing with Postman
- Load testing

## Development Workflow

1. Running backend and frontend together
2. Debugging Node.js applications
3. Using environment variables
4. Development vs production configurations

## Best Practices

1. Error handling
2. Logging
3. Security measures
4. Performance optimization
5. Code organization

## Next Steps

- Adding authentication
- Implementing WebSockets
- Setting up caching
- Adding database indexing
- Implementing rate limiting
