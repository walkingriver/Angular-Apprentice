# Creating the New Project 

Now that we've seen what we're going to build, let's dive right in and
get the project up and running.

First, let's create a new Angular project with Material Design support.
We'll use the Angular CLI to set this up.

Run these commands:

```bash
ng new a10dance --standalone --routing --style=scss
cd a10dance
ng add @angular/material
```

When creating the project, we'll select the following options:
- `--standalone`: For modern, NgModule-free development
- `--routing`: To enable navigation between pages
- `--style=scss`: For more powerful styling capabilities

During the Material setup, we'll be asked about:
- Choose a theme (select "Indigo/Pink" for now)
- Set up global Angular Material typography styles (Yes)
- Set up browser animations for Angular Material (Yes)

Once the project is created and Material is installed, let's open it in our IDE.
The initial structure is minimal, which is perfect as we'll build it up step by step.

Now, let's start our development server:

```bash
ng serve --open
```

> [!TIP] 
> Alternatively, you can also use `npm start` to launch the application.


This will compile our application and open it in the default browser. Currently,
there isn't much content to see, but we'll change that in the next section
where we'll start building our Material-based interface.
