# Adding Page Titles

One of the small but important details in web applications is managing page titles. The page title appears in the browser's tab or window title bar and is important for several reasons:

1. It helps users identify your application among multiple open tabs
2. It provides context about the current page they're viewing
3. It improves accessibility and SEO

Angular provides a built-in way to manage page titles through route configuration. Let's add titles to our routes.

## Adding Titles to Routes

Open `app.config.ts` and modify the routes configuration to include titles:

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
    title: 'Roster', // Add this line
  },
];
```

By adding the `title` property to each route, Angular will automatically update the browser's title bar when navigating between pages. The title will be set to whatever string you provide.

Try navigating between the Home and Roster pages - you'll notice the browser tab title changes to reflect which page you're currently viewing.

In the next chapter, we'll explore how to customize this behavior further using Angular's `TitleStrategy` to create more sophisticated title patterns.
