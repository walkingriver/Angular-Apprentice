# Your First Angular with Angular Material App

Before diving into Angular development, organizing your workspace is beneficial. I suggest creating a directory in your home folder for your projects; you can name it something like "projects" or "angular". This keeps everything organized.

### Setting Up Angular CLI

To ensure you're working with the most up-to-date tools, always update or install the latest Angular CLI:

```bash
npm install -g @angular/cli@latest
```

This command installs the Angular CLI globally, ensuring you have the latest tools for Angular development.

### Creating a New Angular Project

Now, let’s create your first Angular application:

1. **Generate a New Project**:

   ```bash
   ng new my-angular-app --standalone --style=scss --routing
   ```

   - `my-angular-app` is the name of your project. You can change this to whatever you prefer.
   - `--standalone` tells Angular to create components, directives, and pipes as standalone entities, which is now the default and recommended approach in newer Angular versions.
   - `--style=scss` configures the project to use SCSS for styling.
   - `--routing` enables routing in your application.

2. **Move into Your Project Directory**:

   ```bash
   cd my-angular-app
   ```

3. **Start the Development Server**:

   ```bash
   ng serve --open
   ```

   or simply:

   ```bash
   npm start
   ```

   Both commands will compile your application, start a local development server, and open your default browser to display the Angular welcome page.

   - `ng serve` is provided by the Angular CLI, offering features like live reload and build optimizations for development.
   - `npm start` uses the script defined in `package.json` which by default runs `ng serve` for Angular projects.

### Integrating Angular Material

To enhance your app with Angular Material:

1. **Install Angular Material and CDK**:

   ```bash
   ng add @angular/material
   ```

   This command will not only install Angular Material and the Component Dev Kit (CDK) but also configure your project to use Material components.

2. **Choose a Pre-built Theme**: You'll be prompted to select a theme during installation. Pick one that aligns with your design vision.

3. **Using a Material Component**:

   Since we're using standalone components, you would import the Material module directly in the component where you'll use it. For example, to add a button:

   ```typescript
   import { Component } from "@angular/core";
   import { MatButtonModule } from "@angular/material/button";

   @Component({
     selector: "app-root",
     standalone: true,
     imports: [MatButtonModule],
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.scss"],
   })
   export class AppComponent {
     title = "my-angular-app";
   }
   ```

   And in your `app.component.html`:

   ```html
   <button mat-raised-button color="primary">Click Me</button>
   ```

   - Make sure to run `ng serve --open` again to view your changes.

### What's Next?

You've now initiated your first Angular application using the standalone component model along with Angular Material. In the next chapter, we will explore the project structure, delve deeper into Angular Material components, and begin expanding your application's functionality. Remember, this setup allows for a more modular and scalable approach to Angular development.
