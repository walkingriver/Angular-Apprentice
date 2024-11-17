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

Next, let's create an array of students that we can use in place of a
database for now. We'll call it mockStudents:

```typescript
const mockStudents: Student[] = [
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
```

Now for the function. Let's create a function called `getAll()`. This will
return a copy of the mockStudents array. In a future chapter, we'll
flesh out this service with more functionality, but for now, this is
plenty.

```typescript
getAll() {
  return [...mockStudents];
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
    return [...mockStudents];
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
