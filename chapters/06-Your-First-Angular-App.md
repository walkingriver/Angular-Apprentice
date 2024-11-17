# Your First Angular Application

Now that you're familiar with the Angular CLI from the previous chapter, let's put it to use by creating your first Angular application. While the CLI offers many options (as we saw in the previous chapter), we'll focus on the most practical choices for a modern Angular application.

## Project Setup

First, let's create a dedicated directory for your Angular projects. This is a good practice for organizing your development environment:

```bash
mkdir ~/angular-projects
cd ~/angular-projects
```

## Creating Your First Project

Let's create a new Angular application with some commonly used options:

```bash
ng new my-angular-app --standalone --style=scss --routing
```

Let's break down these options:

- `--standalone`: Uses the modern standalone component approach, eliminating the need for NgModules
- `--style=scss`: Sets up SCSS for styling, giving us powerful features like variables and nesting
- `--routing`: Adds routing configuration, essential for most real-world applications

The CLI will prompt you with a few additional questions - you can generally accept the defaults for now.

## Launching the Application

Once the project is created, navigate into the project directory and start the development server:

```bash
cd my-angular-app
ng serve --open
```

The `--open` flag will automatically open your default browser to `http://localhost:4200`, where you'll see your new application running.

## Project Overview

The CLI has generated a complete project structure for you. Here are the key files you'll be working with immediately:

```
my-angular-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts    # Your root component
│   │   ├── app.component.html  # Its template
│   │   └── app.config.ts       # App configuration
│   └── index.html             # Main HTML file
└── package.json               # Dependencies
```

For a detailed explanation of every file and directory in your new project, see the next chapter: "Understanding Your Project Structure". There, we'll dive deep into what each file does and how they work together.

## Next Steps

Now that you have a working Angular application, in the following chapters we'll:

1. Explore how to create and organize components
2. Learn about data binding and templates
3. Implement routing for navigation
4. Add styling with Angular Material
5. Create and use services for data management

Remember, you can always use the Angular CLI's help command (`ng help`) or refer to the previous chapter if you need to review available CLI commands and options.
