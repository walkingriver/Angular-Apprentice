# Introduction

In late spring 2018, my manager approached me with some interesting news. He explained that our executive director had noted that although Angular was prevalent throughout his organization, his developers lacked experience with it.

What could be done about this? They discussed various options, from video course subscriptions to books to hiring an outside training firm to provide the necessary training.

At that point, my manager spoke up. "What if we ask Mike Callaghan to do it?" He then proceeded to recommend me in an executive meeting to train a group of our software developers how to use Angular.

## My Angular Journey

My journey into front-end development began well before modern frameworks became mainstream. Starting with Visual Basic 6, I learned the essentials of creating user interfaces, which set the stage for exploring increasingly sophisticated tools. When jQuery emerged in 2006, it transformed the front-end landscape, allowing developers to interact with the DOM in ways that were simpler and more powerful than raw JavaScript alone. jQuery enabled more dynamic, responsive websites, sparking an evolution in web development that pushed me to experiment with and adopt new technologies as they emerged.

In my pursuit of richer applications, I spent a lot of time with WPF (Windows Presentation Foundation) and then Silverlight, which allowed for desktop-like experiences on the web. It worked, but it was hard, requiring the browser to have a Silverlight plug-in. It was definitely not a web experience. Then came HTML5, which seemed to mark the end of Silverlight as a mainstream technology.

But it wasn't until the arrival of AngularJS in 2012 that I truly felt the potential of rich web applications. By 2013, with AngularJS version 1.2, I was fully invested in this framework that introduced groundbreaking concepts like two-way data binding, dependency injection, and a component-driven approach that made building complex applications feasible.

## Angular's Evolution

AngularJS revolutionized web development when it was released by Google in 2010. It introduced two-way data binding, dependency injection, and directives, making it possible to build dynamic web applications with less code. The framework's use of the Model-View-Controller (MVC) pattern and its ability to extend HTML with custom attributes made it immensely popular.

In 2016, Angular was completely reimagined with the release of Angular 2, a complete rewrite that marked a new chapter in its evolution. This controversial decision to rebuild from the ground up introduced TypeScript for better tooling and type safety, a component-based architecture for improved reusability, and ahead-of-time compilation for better performance. The naming decision caused confusion that persists to this day—many still refer to Angular as AngularJS, and some suggested it should have been called AngularTS or given an entirely different name. The confusion deepened in April 2022 when Google announced it was shutting down AngularJS, causing some teams to mistakenly believe Angular itself was being discontinued.

In an interesting quirk of Angular's history, version 3 was skipped entirely to align with the router package version, which was already at version 3. This unexpected jump from Angular 2 to Angular 4 in March 2017 surprised many developers but ultimately had little impact on the framework's adoption.

The years that followed saw rapid evolution with regular releases that brought incremental improvements:
- Angular 4 (March 2017) delivered smaller, faster applications and enhanced template syntax
- Angular 5 (November 2017) focused on making Angular smaller and faster with build optimizations
- Angular 6 (May 2018) improved tooling with CLI workspaces and the `ng update` and `ng add` commands
- Angular 7 (October 2018) enhanced performance with virtual scrolling and native drag and drop
- Angular 8 (May 2019) introduced differential loading and dynamic imports for lazy routes
- Angular 9 (February 2020) delivered the Ivy renderer by default, improving bundle sizes
- Angular 10 (June 2020) added a new date range picker and optional strict mode
- Angular 11 (November 2020) brought automatic inlining of fonts and improved testing tools
- Angular 12 (May 2021) introduced the Ivy-based language service and began deprecating the legacy View Engine
- Angular 13 (November 2021) removed View Engine completely and dropped IE11 support
- Angular 14 (June 2022) added strictly typed forms and a preview of standalone components

Recent versions have seen even more innovation, marking what many call "Angular's Renaissance." Angular 15 (November 2022) introduced streamlined APIs, graduated standalone components to stable status, and improved runtime performance, setting a new standard for application efficiency. This release represented a pivotal moment of transformation, breaking down complex development barriers and introducing a new era of simplicity and efficiency.

Angular 16 (May 2023) introduced a powerful shift in application structure with standalone components. Traditionally, Angular applications have relied heavily on `NgModules` to organize and encapsulate components, directives, and pipes. Standalone components allow developers to create components without having to declare them within a module, simplifying both development and maintenance. This change makes Angular applications more modular and reduces overhead by allowing components to be directly imported and used as needed. This version also introduced signals—a developer preview of a new reactivity model that fundamentally rethinks how applications handle data flow and state management.

Angular 17 (November 2023) introduced a new approach to flow control, a feature that gives developers more nuanced control over how their applications handle asynchronous operations and component rendering. This version also brought a complete brand transformation with a new visual identity, logo, and the launch of `angular.dev` as an interactive documentation platform. Performance improvements were dramatic, with up to 90% faster runtime with built-in control flow and up to 87% faster builds for hybrid rendering.

One of the most exciting additions in Angular 18 (May 2024) was the stabilization of signals, a new way to handle reactive programming. Signals provide a straightforward mechanism for managing reactive state, offering an alternative to traditional observables by simplifying the way data flows through an application. This version also continued work on removing the zone.js dependency and introduced new primitives for handling pending requests and navigation.

Today, we're at Angular 19 (November 2024), which represents a culmination of over a decade of development and refinement. Angular 19 offers a mature, stable, and highly performant framework ideal for building web applications that meet the demands of today's users. This version introduced route-level render mode, giving developers fine-grained control over route rendering strategies, and graduated event replay to stable status, solving the JavaScript execution gap in server-side rendered applications. With Angular Material, we have a component library that brings a polished, responsive, and accessible design to our applications, ensuring a cohesive user experience across different devices and screen sizes.

In this book, we'll explore Angular 19 and Angular Material in depth. Our journey will take us from the fundamental structure of an Angular application to creating responsive layouts and using Angular Material's robust UI components. This book is designed to be hands-on, introducing each concept as it becomes relevant, so you can focus on building practical, real-world applications without unnecessary detours.

## Prerequisites

A foundational knowledge of HTML, CSS, and JavaScript will be helpful as we dive into Angular, but no prior experience with the framework is necessary. By the end of this book, you'll be equipped to build sophisticated, responsive applications using Angular 19 and Angular Material, fully leveraging the power and flexibility of this mature, modern framework to create robust, user-friendly web applications.

## Stay Connected

Sign up at https://walkingriver.gumroad.com to receive notifications whenever new content is added.

If you find any errors or have questions, feel free to email me at michael@walkingriver.com. I read every email I receive.

-Mike Callaghan
