# Custom Students Service

Before we build out the Roster page, we need to get some students to
display. Later we'll want to tie the list into a data store of some
sort, but we don't need to do that just to get some data displayed on
the page.

Let's create a simple "Students" service we can inject into the components 
that need it. We'll use the command line to create the service.

## Angular CLI

Let's use the Angular CLI to generate our service. Enter the following command:

```bash
ng generate service students --dry-run
```

This command instructs the Angular CLI to generate a service named Students. 
The `--dry-run` option gives us a chance to see what will happen before making 
any changes.

```bash
CREATE src/app/students.service.spec.ts (338 bytes)
CREATE src/app/students.service.ts (136 bytes)
NOTE: The "dryRun" flag means no changes were made.
```

By default, the service will be created in the app folder, but not in a
folder of its own, and it will be created with a unit test. Let's run it 
again without the dry-run flag. When it has finished, open
`students.service.ts`.

Inside this file we'll create an interface, a constant, and a
function.

First, let's create a Student interface. Remember, interfaces don't
exist in JavaScript and will be removed during compilation. Their purpose
is to enable parameter type checking, code completion, and intellisense
inside the code editor.

```typescript
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  status?: 'present' | 'absent';
}
```

The question marks on most of the fields indicate that those fields are
optional. To create a valid Student object, we need to provide at least
an id, firstName, and lastName. At this point, we don't know everything
that a Student object should have, but these fields should be enough for
our purposes now.

The status is worth noting due to its type definition. TypeScript allows us to
specify what essentially becomes a compile-time validation check:

```typescript
status?: 'present' | 'absent';
```

This line indicates that the status field is an optional string value,
which may only contain one of two values: present or absent. Though this
won't be enforced at runtime, the TypeScript compiler will prevent
us from assigning any other value, and our IDE will offer smart
code completion when assigning a value to this field.

## Using Faker.js for Sample Data

When building applications, we often need realistic sample data for development and testing. While we could create mock data manually, this becomes tedious and often doesn't represent the variety we'd see in a real application. This is where Faker.js comes in.

Faker.js is a popular library that generates massive amounts of realistic fake data. It's particularly useful for:
- Populating development databases
- Creating realistic test scenarios
- Building demos and prototypes
- Testing edge cases with diverse data

Let's install Faker.js in our project:

```bash
npm install @faker-js/faker
```

Now, instead of our hardcoded student list, we'll create a function that generates dynamic student data. First, let's set a constant for our class size:

```typescript
const CLASS_SIZE = 25;
```

Then, we'll create a function to generate our fake students:

```typescript
import { faker } from '@faker-js/faker';

const generateFakeStudents = (count: number): Student[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: (index + 1).toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: faker.date.between({ from: '2016-01-01', to: '2018-12-31' }),
    parentName: faker.person.fullName(),
    parentEmail: faker.internet.email(),
    parentPhone: faker.phone.number(),
    photoUrl: faker.image.avatar(),
    status: null; // Intentionally keeping the attendance status empty
}));
};

const defaultStudents: Student[] = generateFakeStudents(CLASS_SIZE);
```

Let's break down the Faker.js functions we're using:

- `faker.person.firstName()` and `faker.person.lastName()`: Generate realistic first and last names from various cultures
- `faker.date.between()`: Creates a random date within a specified range, perfect for generating birth dates
- `faker.person.fullName()`: Generates a full name for the parent
- `faker.internet.email()`: Creates a realistic email address
- `faker.phone.number()`: Generates a formatted phone number
- `faker.image.avatar()`: Provides a URL to a randomly generated avatar image

Faker.js offers many other useful functions that could enhance our sample data:

- `faker.location.streetAddress()`: Could be used for student addresses
- `faker.date.recent()`: Useful for generating recent attendance records
- `faker.number.int()`: Could generate student ID numbers or grades
- `faker.helpers.multiple()`: Creates multiple records using a generator function
- `faker.image.urlPicsumPhotos()`: Alternative to avatar for more realistic student photos
- `faker.helpers.arrayElement()`: Randomly selects an item from an array, which we could have used for student attendance status

Now for the function. Let's create a function called `getAll()`. This will
return a copy of the defaultStudents array.

```typescript
getAll() {
  return [...defaultStudents];
}
```

If you haven't seen that particular syntax, it's the spread operator,
used here for making a shallow copy of an array.

When we're finished, the complete StudentsService class should look
something like this:

```typescript
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor() { }

  getAll() {
    return [...defaultStudents];
  }
}
```

It's deceptively simple because it doesn't do much. Now let's create that
Roster Page.

## Additional Knowledge: Understanding npx and npm run

> [!INFO] 
> **Understanding npx**
>
> You might see commands in Angular tutorials that start with `npx`, like `npx ng generate`. 
> What's this `npx` thing?
>
> When we install packages in a Node.js project, they can be installed either globally 
> (available everywhere on your computer) or locally (just in your project). Tools like 
> the Angular CLI can be installed either way.
>
> This creates a challenge: if you install a tool locally, how do you run it? That's 
> where `npx` comes in. It's a tool runner that comes with npm (Node Package Manager) 
> that helps run locally installed packages without needing to know where they're installed.
>
> For example:
> - Without npx: `./node_modules/.bin/some-tool`
> - With npx: `npx some-tool`
>
> You might wonder about `npm run`, which we use for scripts in package.json. While similar, 
> there's a key difference: `npm run` executes predefined scripts, while `npx` runs any 
> installed package's binary directly. For example:
> ```json
> {
>   "scripts": {
>     "start": "ng serve",
>     "build": "ng build"
>   }
> }
> ```
> Here, `npm run start` executes the script, while `npx ng serve` runs the binary directly. 
> Both can find local tools, but `npm run` requires the command to be defined in package.json first.
>
> In our case, since we installed the Angular CLI globally with `npm install -g @angular/cli`, 
> we can use `ng` directly. However, many teams prefer keeping tools local to their projects 
> to ensure everyone uses the same version. That's when `npx` becomes really helpful.
