# Gentle Introduction to Angular

This book is all about learning Angular, and today, we're going to dive into some core concepts and syntax idioms that you'll encounter frequently. Let's call them "Angularisms."

To work through the examples, head over to [StackBlitz Angular](https://stackblitz.com/fork/angular). You'll find an immediate sandbox to code along. Once there, you'll see `app.component.ts` in the center panel:

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: `
    <hello [name]="name"></hello>
    <p>Start editing to see some magic happen :)</p>
  `,
})
export class AppComponent implements OnInit {
  name = "Angular";

  ngOnInit(): void {
    // Initialization logic here
  }
}
```

Angular promotes separation of concerns, encapsulating UI functionality within components. Let's explore this:

- **Standalone Components**: Angular 18 and later support standalone components, which means you don't need to declare them in an NgModule. This simplifies component creation and reduces boilerplate.

- **Decorator**: The `@Component` decorator provides Angular with metadata about how the component should act.

  - **selector**: How the component is exposed in HTML.
  - **standalone**: Indicates this is a standalone component without a module.
  - **imports**: An array for any components, directives, or pipes this component uses.
  - **template**: Inline template string for the component's view.

In the code above, we've moved to using an inline template for simplicity, although external templates are still an option.

## Component Reuse

Components are reusable. Here's how you can use the `<hello>` component:

```html
<hello [name]="name"></hello>
<hello name="Greg"></hello>
<hello name="Jonathan"></hello>
<hello name="Neil"></hello>
<p>Start editing to see some magic happen :)</p>
```

When you run this, you'll see:

> <!-- Reminder: Add screenshot here showing multiple Hello components -->

## @for

Angular's new control flow syntax in version 18+ uses `@for` instead of `ngFor`. Let's modify our `AppComponent`:

```typescript
@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: `
    @for (name of names; track name) {
      <hello [name]="name"></hello>
    }
    <p>Start editing to see some magic happen :)</p>
  `,
})
export class AppComponent {
  names = ["Mike", "Greg", "Jonathan", "Neil"];
}
```

This will create multiple `<hello>` components based on the `names` array.

## Property Binding

Square brackets are used for property binding:

```html
<hello [name]="name"></hello>
```

## Event Binding

For events:

```html
<button (click)="toggle()">Click Me</button>
```

And inside the component:

```typescript
isToggled = false;

toggle() {
  this.isToggled = !this.isToggled;
}
```

## @if

The `@if` directive replaces `ngIf` for conditional rendering:

```html
@if (isToggled) {
<p>I am toggled on!!!</p>
}
```

When toggled on:

> <!-- Reminder: Add screenshot here showing the paragraph when toggled on -->

And when off:

> <!-- Reminder: Add screenshot here showing no paragraph when toggled off -->

With these basics, you're ready to dive deeper into Angular. Next, we'll look at building more complex applications with Angular.
