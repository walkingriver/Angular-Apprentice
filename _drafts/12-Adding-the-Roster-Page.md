# Adding the Roster Page

By now, you should be comfortable adding Ionic tags into a page, but you
have not created a new page from scratch yet. You will tackle that now,
by creating what will arguably be the most complicated page in the
application.

To create a new Ionic page, you can use either the Ionic CLI or the
Angular CLI. One of the things I like best about using Angular with
Ionic is the rich templating that Angular brings to the table.

Ionic delegates much of its command line operations to the underlying
Angular CLI, augmenting it where appropriate. Creating pages is one of
these appropriate times. Angular has no default scaffolding for creating
pages, only components. While a page is implemented as an Angular
component, Ionic provides you with a slightly richer experience with
their Page scaffolding. The really wonderful thing is that this
scaffolding can be used by either the Ionic or the Angular CLI. It is up
to you which you want to use.

In the terminal, enter either of these commands. They will do the same
thing.

> ionic generate page Roster \--dry-run
>
> npx ng generate page Roster \--dry-run

Again, I recommend using the dry-run option to see what it will do ahead
of time. Also note that you will not need to use npx with the ionic
command, because the Ionic CLI is installed globally.

The command output will look something like this.

> CREATE src/app/roster/roster-routing.module.ts (351 bytes)
>
> CREATE src/app/roster/roster.module.ts (479 bytes)
>
> CREATE src/app/roster/roster.page.scss (0 bytes)
>
> CREATE src/app/roster/roster.page.html (126 bytes)
>
> CREATE src/app/roster/roster.page.spec.ts (654 bytes)
>
> CREATE src/app/roster/roster.page.ts (260 bytes)
>
> UPDATE src/app/app-routing.module.ts (869 bytes)
>
> NOTE: The \"dryRun\" flag means no changes were made.

The output indicates that the generate command will create a new roster
folder, a page, a separate module for the page, tests, and styles. Plus,
it will automatically add the page into the app's routing system. See?
Much of the grunt work is done for you.

Go ahead and rerun the same command, without the dry-run option.

Save everything. If the npm start command is still running, everything
should rebuild and re-render. If not, go ahead and run the command again
from the terminal.

> npm start

Once it finishes building, you can re-render your home page. Click the
Roster link. The default roster page just created will be displayed.
There is not much there, but you will take care of that in the next
chapter.

