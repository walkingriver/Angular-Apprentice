# Adding the Roster Page

Now that we've created our home page with Material Design components, let's 
create what will arguably be the most complex page in our application: the 
roster page.

To create our new component (which we'll use as a page), we'll use the Angular 
CLI. One of the best things about using Angular is its rich templating and 
generation capabilities.

Let's start by generating our new component. In the terminal, enter this command:

```bash
ng generate component roster --standalone --dry-run
```

The `--dry-run` option lets us preview what will happen before making any changes. 
The command output will look something like this:

```bash
CREATE src/app/roster/roster.component.ts (270 bytes)
CREATE src/app/roster/roster.component.html (21 bytes)
CREATE src/app/roster/roster.component.scss (0 bytes)
CREATE src/app/roster/roster.component.spec.ts (545 bytes)
NOTE: The "dry-run" flag means no changes were made.
```

The output indicates that the generate command will create a new roster
folder with our component files: the component itself, its template, styles, 
and tests. We'll need to add the routing configuration manually, but that 
gives us more control over how our application is structured.

Let's go ahead and rerun the same command without the dry-run option:

```bash
ng generate component roster --standalone
```

Now we need to add our route. Open `app.config.ts` and add the roster route:

```typescript
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'roster',
    loadComponent: () => import('./roster/roster.component')
      .then(m => m.RosterComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
```

Save everything. If the development server is still running, everything
should rebuild and re-render. If not, let's start it again:

```bash
npm start
```

Once it finishes building, we can navigate back to our home page and click the
Roster link. Our newly created roster page will be displayed. There isn't much 
there yet, but we'll build it out in the next chapter using Material's data 
table and other components.
