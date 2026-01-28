# Adding Page Titles

One of the small but important details in web applications is managing page titles. The page title appears in the browser's tab or window title bar and is important for several reasons:

1. It helps users identify our application among multiple open tabs
2. It provides context about the current page they're viewing
3. It improves accessibility and SEO
4. It helps when viewing your page history

Let's see how Angular helps us manage page titles through route configuration.

## Adding Basic Titles to Routes

First, let's open `app.config.ts` and modify our routes configuration to include titles:

```typescript
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        (c) => c.HomeComponent
      ),
    title: 'Home', // Add this line
  },
  {
    path: 'roster',
    loadComponent: () =>
      import('./roster/roster.component').then(
        (c) => c.RosterComponent
      ),
    title: 'Roster',  // Add this line  
  },
  {
    path: 'student/:id',
    loadComponent: () =>
      import('./student-details/student-details.component').then(
        (c) => c.StudentDetailsComponent
      ),
    title: 'Student Details', // Add this line
  },
];
```

By adding the `title` property to each route, Angular will automatically update the browser's title bar when we navigate between pages. The title will be set to whatever string we provide for each route.

Go ahead and refresh the page and navigate to different routes. You should see the page titles change accordingly.

That's a simple and powerful way to manage page titles in our application. But if we want to do more than just set a static title, we can.

## Customizing Titles with TitleStrategy

While static titles are useful, sometimes we need more dynamic titles. For example, on our Student Details page, it would be more helpful to show the student's name in the title. We can achieve this by creating a custom `TitleStrategy`.

When we use Angular's `TitleStrategy`, we get complete control over how page titles are set in our application. It intercepts the title setting process whenever navigation occurs, letting us:

- Add a consistent prefix or suffix to all titles (like adding our app name)
- Create dynamic titles based on route data or other application state
- Format titles according to our needs
- Handle special cases for specific routes

Let's create a custom `TitleStrategy` by overriding its `updateTitle` method. This method receives the current `RouterStateSnapshot`, which contains all the information about the active route, including any data we've added to it. We'll use this to implement our title logic.

Let's create a new file `core/title.strategy.ts`:

```typescript
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    
    // Get the current route
    const lastRoute = routerState.root;
    const studentDetailsRoute = lastRoute.firstChild;
    
    if (studentDetailsRoute?.routeConfig?.path === 'student/:id') {
      // For student details, we'll get the student's name from route data
      const studentName = studentDetailsRoute.data['studentName'];
      if (studentName) {
        this.title.setTitle(`A10Dance | ${studentName}`);
        return;
      }
    }
    
    // For other routes, we'll use the standard title
    if (title) {
      console.log(title);
      this.title.setTitle(`A10Dance | ${title}`);
    } else {
      console.log('Title not set');
      this.title.setTitle('A10Dance');
    }
  }
}
```

One interesting aspect of Angular's `TitleStrategy` design is that the `updateTitle` method is `void` - it doesn't return anything. Instead of returning a string (or `Promise<string>` or `Observable<string>` as you might expect), we directly call `title.setTitle()` within the method to update the browser's title. While this might seem counterintuitive at first, it gives us direct control over when and how the title is set, allowing us to handle both synchronous and asynchronous title updates in a consistent way.

Now that we have our custom `TitleStrategy`, we need to register it with Angular's `provideRouter()` function. To do this, we need to provide the `AppTitleStrategy` as a provider in our `app.config.ts` file.

```typescript
import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { AppTitleStrategy } from './core/title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy,
    },
    provideAnimations(),
  ],
};
```

Now, when we navigate to different routes, the title will be updated with our custom text accordingly.

## Exercise: 
 -  Create dynamic titles based on route data or other application state.
