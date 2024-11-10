# Custom Students Service

Before you flesh out the Roster page, you need to get some students to
display. Later you will want to tie the list into a data store of some
sort, but you do not need to do that just to get some data displayed on
the page.

For that, you are going to create a simple "Students" service you can
inject into the pages that need it. Use the command line to create the
service.

## Angular CLI

In this case, it does not matter whether or not you use the Angular CLI
or the Ionic CLI. Go ahead and use the Angular CLI this time. Enter the
following command.

> npx ng generate service Students \--dry-run
>
> In case this is your first time seeing npx, I will explain. When you
> install npm packages globally, as you did with the Ionic CLI, the
> package's main binary will be linked to a folder that is already in
> your execution path.
>
> On the other hand, the Ionic-Angular project template installs the
> Angular CLI as a local project dependency. This means that the entire
> Angular CLI is installed in your project's node_modules folder. This
> makes is visible to your project's npm scripts, but completely
> invisible to your system. When you type ng into your terminal, it has
> no idea where to find that command.
>
> The npx command, which is installed with node and npm, knows to look
> for commands inside of your node_modules command. Before npx, if you
> wanted to run a command you had installed locally, you had two
> choices:
>
> Run it as an npm script, because npm already know where to look.
>
> Prepend your command with ./node_modules/{toolname}/bin.

This command is simply instructing the Angular CLI to generate a service
named Students. The dry-run option gives you a chance to see what will
happen, and then tweak things if you do not like what you see.

> CREATE src/app/students.service.spec.ts (338 bytes)
>
> CREATE src/app/students.service.ts (136 bytes)
>
> NOTE: The \"dryRun\" flag means no changes were made.

By default, the service will be created in the app folder, but not in a
folder of its own, and it will be created with a unit test. Go ahead and
run it again without the dry-run flag. When it has finished, open
students.service.ts.

Inside this file you will create an interface, a constant, and a
function.

Create a Student object as an interface. Remember, interfaces do not
exist in JavaScript, and will completely vanish upon build. Their sole
purpose for us is to enable parameter type checking, code completion,
and intellisense inside the code editor.

> export interface Student {
>
> id: string;
>
> firstName: string;
>
> lastName: string;
>
> birthDate?: string;
>
> parentName?: string;
>
> parentEmail?: string;
>
> parentPhone?: string;
>
> photoUrl?: string;
>
> status?: \'present\' \| \'absent\';
>
> }

The question marks on most of the fields indicate that those fields are
optional. To create a valid Student object, you need to provide at least
an id, firstName, and lastName. At this point, I do not know everything
that a Student object should have, but these fields should be enough for
our purposes now.

The status is worth noting due to its odd type. TypeScript allows you to
specify what essentially becomes a compile-time validation check.

> status?: \'present\' \| \'absent\';

This line indicates that the status field is an optional string value,
which may only contain one of two values: present or absent. Though this
will not be enforced at runtime, the TypeScript compiler will prevent
you from assigning any other value, and VS Code will offer you smart
code completion when assigning a value to this field.

Next, create an array of students that you can use in place of a
database for now. Call it mockStudents.

> const mockStudents: Student\[\] = \[
>
> { id: \'1\', firstName: \'Greg\', lastName: \'Marine\' },
>
> { id: \'2\', firstName: \'Jonathan\', lastName: \'Bennett\' },
>
> { id: \'3\', firstName: \'Neil\', lastName: \'Estandarte\' },
>
> { id: \'4\', firstName: \'Jen\', lastName: \'Townsend\' },
>
> { id: \'5\', firstName: \'Casey\', lastName: \'McBride\' },
>
> { id: \'6\', firstName: \'Diane\', lastName: \'Rivera\' },
>
> { id: \'7\', firstName: \'Troy\', lastName: \'Gutierrez\' },
>
> { id: \'8\', firstName: \'Priscilla\', lastName: \'Little\' },
>
> { id: \'9\', firstName: \'Bobby\', lastName: \'Robbins\' },
>
> { id: \'10\', firstName: \'Edmund\', lastName: \'Gardner\' }
>
> \]

Now for the function. Create a function called getAll(). This will
return a copy of the mockStudents array. In a future volume, you will
flesh out this service with more functionality, but for now, this is
plenty.

> getAll() {
>
> return \[\...mockStudents\];
>
> }

If you have not seen that particular syntax, it is shorthand for making
a shallow copy of an array.

When you are finished, the complete StudentsService class should look
something like this.

> \@Injectable({
>
> providedIn: \'root\'
>
> })
>
> export class StudentsService {
>
> constructor() { }
>
> getAll() {
>
> return \[\...mockStudents\];
>
> }
>
> }

It is deceptively simple because it does not do much. Now go create that
Roster Page.

