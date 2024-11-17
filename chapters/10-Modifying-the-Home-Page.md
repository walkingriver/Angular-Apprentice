# Modifying the Home Page

Let's start by building out the home page, as it's our application's landing page. 
We'll keep it simple with some text and images inside a Material card.

## Creating the Home Component

First, let's generate our home component using the Angular CLI:

```bash
ng generate component home --standalone
```

This will create four files in the `src/app/home` directory:
- `home.component.ts`: The component class
- `home.component.html`: The template
- `home.component.scss`: The styles
- `home.component.spec.ts`: The test file

## Setting Up the Route

Now, let's configure our routing to make this our default page. Open `app.config.ts` and update the routes:

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

## Adding Material Card

Let's import the necessary Material standalone components:

```typescript
// home.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, 
         MatCardTitle, MatCardSubtitle, MatCardImage } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    MatCard, MatCardContent, MatCardHeader,
    MatCardTitle, MatCardSubtitle, MatCardImage,
    MatButton
  ]
})
export class HomeComponent {}
```

> [!TIP]
> In Angular Material v18, each component is standalone. This means we import only the specific components we need, leading to better tree-shaking and smaller bundle sizes.

> [!INFO]
> **What is Tree Shaking?**
> 
> Tree shaking is a term commonly used in JavaScript to describe the removal of dead code. Think of your code as a tree, and the unused code as dead leaves. During the build process, the compiler "shakes" the tree to remove these dead leaves (unused code).
> 
> For example, if you import an entire module like `MatCardModule`, but only use `MatCard`, you're including code for all card-related components in your bundle. With standalone components, you only import and include what you actually use, resulting in smaller, more efficient production builds.

Now, let's create our template:

```html
<!-- home.component.html -->
<mat-card>
  <img mat-card-image 
       src="assets/images/classroom.jpg"
       alt="Classroom">
  
  <mat-card-header>
    <mat-card-subtitle>
      Classroom Attendance Manager
    </mat-card-subtitle>
    <mat-card-title>
      A10Dance
    </mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <p>
      A10Dance is an attendance application originally designed to help
      Sunday School teachers keep track of the students in their classes.
    </p>
    
    <a mat-button 
       color="primary"
       routerLink="/roster">
      Go to Roster
    </a>
  </mat-card-content>
</mat-card>
```

And add some basic styles:

```scss
/* home.component.scss */
:host {
  display: block;
  padding: 1rem;
}

mat-card {
  max-width: 800px;
  margin: 0 auto;
}

img[mat-card-image] {
  max-height: 300px;
  object-fit: cover;
}

mat-card-content {
  padding: 1rem;
  
  p {
    margin-bottom: 1rem;
  }
}
```

## Adding the Image

Our template references a classroom image, so let's add one. First, create 
the images directory in our source folder:

```bash
mkdir -p src/assets/images
```

> [!NOTE]
> Visit [Pixabay](https://pixabay.com) and search for a classroom image that you like. 
> Pixabay offers high-quality, royalty-free images under the Creative Commons license, 
> making them perfect for learning projects like ours.
>
> Once you've found an image:
> 1. Download it (medium size should be sufficient)
> 2. Save it as `classroom.jpg` in the `src/assets/images` directory
>
> In our template, we reference the image as `assets/images/classroom.jpg`. Angular 
> automatically serves files from the `src/assets` directory, making them available 
> at the `/assets` URL path in our application.

> [!IMPORTANT]
> For the image to be served correctly, we need to update our asset configuration in 
> `angular.json`. While we generally try to avoid modifying configuration files, this 
> is an important step that ensures our assets are properly included in the build:
>
> ```json
> {
>   "projects": {
>     "a10dance": {
>       "architect": {
>         "build": {
>           "options": {
>             "assets": [
>               "src/favicon.ico",
>               "src/assets"
>             ]
>           }
>         }
>       }
>     }
>   }
> }
> ```
>
> This configuration tells Angular to include both our favicon and everything in the 
> `src/assets` directory when building the application. Without this, our images and 
> other static assets won't be available at runtime.

## Testing the Page

First, let's start our development server:

```bash
ng serve --open
```

When the server starts and we open our browser, we should see a nicely styled card 
with our content. The Material card provides a subtle elevation effect and consistent 
padding, making our content look polished and professional.

If we click the "Go to Roster" button, nothing will happen yet. While we've added 
the `routerLink="/roster"` to our button, we haven't created the corresponding route 
in our `app.config.ts`. We'll set up the roster route and component in the next chapter.

> [!NOTE]
> If you check your browser's console, you'll see Angular's router warning us about 
> the missing route. This is helpful during development to catch navigation issues.

Our home page now has a clean, modern look following Material Design principles. In 
the next chapter, we'll create the roster page and set up its route, where we'll 
explore more complex Material components like tables and dialogs.
