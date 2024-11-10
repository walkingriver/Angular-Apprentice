Copyright © 2020 Michael D. Callaghan. All rights reserved.

walkingriver.com

# Table of Contents

[Introduction [6](#introduction)](#introduction)

[Getting Started [8](#getting-started)](#getting-started)

[Prerequisites [8](#prerequisites)](#prerequisites)

[Software Tools [8](#software-tools)](#software-tools)

[Demo Code [9](#demo-code)](#demo-code)

[Gentle Introduction to Angular
[10](#gentle-introduction-to-angular)](#gentle-introduction-to-angular)

[Component Reuse [13](#component-reuse)](#component-reuse)

[ngFor [14](#ngfor)](#ngfor)

[Attribute Binding [15](#attribute-binding)](#attribute-binding)

[HTML Event Binding [15](#html-event-binding)](#html-event-binding)

[ngIf [16](#ngif)](#ngif)

[Your First Ionic App
[18](#your-first-ionic-app)](#your-first-ionic-app)

[Ionic App Wizard [18](#ionic-app-wizard)](#ionic-app-wizard)

[Guided Tour of the Ionic-Angular Code
[20](#guided-tour-of-the-ionic-angular-code)](#guided-tour-of-the-ionic-angular-code)

[index.html [20](#index.html)](#index.html)

[app.component.ts [20](#app.component.ts)](#app.component.ts)

[app-routing.module [23](#app-routing.module)](#app-routing.module)

[folder.page.ts [24](#folder.page.ts)](#folder.page.ts)

[folder.page.html [24](#folder.page.html)](#folder.page.html)

[Customize the Code [27](#customize-the-code)](#customize-the-code)

[A10Dance - The Demo App
[29](#a10dance---the-demo-app)](#a10dance---the-demo-app)

[Creating the New Project
[30](#creating-the-new-project)](#creating-the-new-project)

[Modifying the Home Page
[31](#modifying-the-home-page)](#modifying-the-home-page)

[ion-card [31](#ion-card)](#ion-card)

[VS Code Terminal [33](#vs-code-terminal)](#vs-code-terminal)

[Custom Students Service
[37](#custom-students-service)](#custom-students-service)

[Angular CLI [37](#angular-cli)](#angular-cli)

[Adding the Roster Page
[41](#adding-the-roster-page)](#adding-the-roster-page)

[Implementing a Student Roster
[43](#implementing-a-student-roster)](#implementing-a-student-roster)

[ion-list [44](#ion-list)](#ion-list)

[Adding Functionality to the Student Roster
[48](#adding-functionality-to-the-student-roster)](#adding-functionality-to-the-student-roster)

[ion-action-sheet [48](#ion-action-sheet)](#ion-action-sheet)

[Connect Sliding Delete Button
[55](#connect-sliding-delete-button)](#connect-sliding-delete-button)

[ion-buttons and icons
[55](#ion-buttons-and-icons)](#ion-buttons-and-icons)

[User Confirmation and Notification
[57](#user-confirmation-and-notification)](#user-confirmation-and-notification)

[Delete Confirmation [57](#delete-confirmation)](#delete-confirmation)

[ion-alert [57](#ion-alert)](#ion-alert)

[Toast Notifications [60](#toast-notifications)](#toast-notifications)

[ion-toast [61](#ion-toast)](#ion-toast)

[Implementing the ion-toast
[62](#implementing-the-ion-toast)](#implementing-the-ion-toast)

[Basic Navigation Menu
[64](#basic-navigation-menu)](#basic-navigation-menu)

[ion-menu [64](#ion-menu)](#ion-menu)

[Menu Implementation [69](#menu-implementation)](#menu-implementation)

[Menu Button [72](#menu-button)](#menu-button)

[Split Pane [73](#split-pane)](#split-pane)

[Wrap Up [74](#wrap-up)](#wrap-up)

[Where to Go from Here?
[75](#where-to-go-from-here)](#where-to-go-from-here)

[Ionic and Angular Video Course
[75](#ionic-and-angular-video-course)](#ionic-and-angular-video-course)

[Reviews Appreciated! [75](#reviews-appreciated)](#reviews-appreciated)

[Apply What You Have Learned
[76](#apply-what-you-have-learned)](#apply-what-you-have-learned)

[Modify the "Delete" Toast
[76](#modify-the-delete-toast)](#modify-the-delete-toast)

[Modify the Icons [76](#modify-the-icons)](#modify-the-icons)

[Advanced: Undo Delete
[77](#advanced-undo-delete)](#advanced-undo-delete)

[Advanced: Sort Roster
[77](#advanced-sort-roster)](#advanced-sort-roster)

[Advanced: Header Component
[77](#advanced-header-component)](#advanced-header-component)

[References [77](#references)](#references)

[Introduction to App Store Deployment
[78](#introduction-to-app-store-deployment)](#introduction-to-app-store-deployment)

[Before You Begin [81](#before-you-begin)](#before-you-begin)

[Prerequisites [81](#prerequisites-1)](#prerequisites-1)

[Demo Application [81](#demo-application)](#demo-application)

[Creating an Xcode Project
[83](#creating-an-xcode-project)](#creating-an-xcode-project)

[Install Capacitor into the Project
[83](#install-capacitor-into-the-project)](#install-capacitor-into-the-project)

[Create Xcode Project
[84](#create-xcode-project)](#create-xcode-project)

[Open the Xcode Project
[84](#open-the-xcode-project)](#open-the-xcode-project)

[Convenience Script (postbuild)
[86](#convenience-script-postbuild)](#convenience-script-postbuild)

[Run on Device [88](#run-on-device)](#run-on-device)

[Using QuickTime to Mirror an iPhone
[89](#using-quicktime-to-mirror-an-iphone)](#using-quicktime-to-mirror-an-iphone)

[Run App on the Device
[90](#run-app-on-the-device)](#run-app-on-the-device)

[Creating the App Store App
[94](#creating-the-app-store-app)](#creating-the-app-store-app)

[Create New Application Bundle
[95](#create-new-application-bundle)](#create-new-application-bundle)

[Create New App [97](#create-new-app)](#create-new-app)

[Upload to AppStore Connect
[99](#upload-to-appstore-connect)](#upload-to-appstore-connect)

[Archive and Create the App Bundle
[100](#archive-and-create-the-app-bundle)](#archive-and-create-the-app-bundle)

[Distribute App [101](#distribute-app)](#distribute-app)

[AppStore Connect Details
[106](#appstore-connect-details)](#appstore-connect-details)

[Version Information [106](#version-information)](#version-information)

[Build [109](#build)](#build)

[General App Information
[110](#general-app-information)](#general-app-information)

[App Icons and Splash Screen
[116](#app-icons-and-splash-screen)](#app-icons-and-splash-screen)

[Cordova-Res [116](#cordova-res)](#cordova-res)

[Default Images [116](#default-images)](#default-images)

[Icon Image [118](#icon-image)](#icon-image)

[Splash Screen Image [119](#splash-screen-image)](#splash-screen-image)

[Generated Icons [120](#generated-icons)](#generated-icons)

[Generated Splash Screens
[121](#generated-splash-screens)](#generated-splash-screens)

[Using the New Images
[122](#using-the-new-images)](#using-the-new-images)

[Screenshots and Final Submission
[126](#screenshots-and-final-submission)](#screenshots-and-final-submission)

[Park Pursuit [126](#park-pursuit)](#park-pursuit)

[Create the Screenshots
[135](#create-the-screenshots)](#create-the-screenshots)

[Submit a New Build [137](#submit-a-new-build)](#submit-a-new-build)

[Create a New Version
[139](#create-a-new-version)](#create-a-new-version)

[Final Submission [141](#final-submission)](#final-submission)

[The Review Process [144](#the-review-process)](#the-review-process)

[Wrap Up [148](#wrap-up-1)](#wrap-up-1)

[What Next? [149](#what-next)](#what-next)

# Introduction

I have been using the Ionic Framework for mobile application development
since 2014, before it was even officially released. Since then, Ionic
has been my go-to technology for building mobile apps. With the release
of version four in 2019, Ionic grew beyond its humble origins as an
angular-based framework for making mobile apps. Today, Ionic works with
a variety of web technologies. It has become a first-class citizen for
building all manner of web applications.

The Ionic Framework supports a variety of mobile platforms. Throughout
this series, I will cover the important aspects of development with
Ionic and Angular, going from the initial idea all the way to the Apple
App and Google Play Stores.

This volume will cover the absolute basics: I will show you how to build
a simple Ionic application. I will cover the application structure,
explaining how an Ionic application is laid out. Next, I will introduce
some of Ionic's more useful UI components and create a basic side-menu
for the demo application.

Unlike many books that spend a lot of time on background, this one is
designed to be fast paced, with a minimum of fuss and fluff. It is all
hands-on.

I expect you to have some basic understanding of web development. You
should know what a \<div\> is, for example, and know how to create a
button. You should have a decent grasp of JavaScript, but you do not
need to be a master.

I do not expect you to have ever used Angular or the Ionic Framework,
but it certainly will not hurt you if you have. I should make clear that
this is not a book on Angular. While I will point out basic aspects of
Angular as they pertain to Ionic, I will not go any deeper than I must
to make the demo application work.

Concepts will be explained as needed, as close to their use as I can
get.

By the time you complete the series, you should have the confidence you
need to create and deploy your own mobile app for iOS or Android.

It will be a fast ride, so hang on.

> Sign up at <https://walkingriver.gumroad.com> to receive notifications
> whenever new content is added.
>
> If you find any errors or have questions, feel free to email me at
> <michael@walkingriver.com>. I read every email I receive.
>
> -Mike Callaghan

# Getting Started

## Prerequisites

Primarily, you will need a decent text-editor, or integrated developer
environment. I use and recommend Visual Studio Code. VS Code is a free
and open-source cross-platform development environment for Microsoft,
designed from the ground-up to work with all the technologies you will
be using. Of course, you are free to use whatever tool you are
comfortable with.

## Software Tools

Developing and deploying an Ionic application require some initial
configuration. You will need the following tools, in addition to the
code editor:

-   Node

-   NPM

-   Git

-   The Ionic CLI itself, installed globally

Most of the tools you will use rely on Node, a JavaScript-based runtime
environment. I recommend the LTS, or long-term-support version.

NPM is a package manager built on top of node. Most of the tools you
need are distributed as npm packages. It is installed with node.

Most of the tutorials for Ionic expect you to have Git, a powerful and
flexible source control system, and its related tools. If you have a Mac
or Linux, you probably already have it.

Quite frankly, that is about it. Installing these items depends on your
platform.

If you need detailed instructions on how to do that, refer to the
Appendix -- Installing the Tools.

TODO -- Add gumroad Tooling Guide Here

## Demo Code

The demo code accompanying this book is available on GitHub, tagged for
each book. Find this book's code at

TODO -- Add gumroad source code link here

# Gentle Introduction to Angular 

As I said before, this is not a book on Angular. However, there are some
patterns and syntax idioms I want to introduce early before you get into
the code. I like to think of them as Angularisms (yes, I just made up
that word).

To work through the example in this chapter, open a browser to
<https://stackblitz.com/fork/angular> This will provide you with an
immediate sandbox where you can follow along. As soon as you do, you
should see the following code in the center panel, a file call
app.component.ts.

> import { Component } from \'@angular/core\';
>
> \@Component({
>
>   selector: \'my-app\',
>
>   templateUrl: \'./app.component.html\',
>
>   styleUrls: \[ \'./app.component.css\' \]
>
> })
>
> export class AppComponent  {
>
>   name = \'Angular\';
>
> }

Let us start by talking about Angular's concept of separation of
concerns. In Angular, UI functionality is encapsulated in components. A
component can represent anything from a piece of text, a button, a form,
or even an entire page. Components can contain other components, and
they can communicate with each other through well-defined interfaces.

You specify that a TypeScript class is a component using the \@component
decorator. Decorators provide additional information by annotating or
modifying classes or class members.

In this case, the component decorator provides additional metadata to
Angular about how the class will behave.

The selector attribute tells angular to expose this component using the
html tag \<my-app\>.

The templateUrl attribute indicates that the HTML markup can be found in
the file specified, app.component.html.

Likewise, with the styleUrls. Notice that this value is an array, which
means you can provide more than one CSS file.

If you look on the left-hand panel, you should see both of these files.

The executable portion of the component code is found inside the class
definition. This one contains a single line of code, meaning it is not
doing much.

This is what you mean by a "separation of concerns." The code, markup,
and styles are all separated from one another.

take a look at the markup, which is found in the template file,
app.component.html. This file is pure HTML containing the content.

> \<hello name=\"{{ name }}\"\>\</hello\>
>
> \<p\>
>
>   Start editing to see some magic happen :)
>
> \</p\>

Notice the first line contains another custom HTML tag, \<hello\>. That
is defined in hello.component.ts, which you will review shortly.

Inside of that tag is an attribute called name, set to the value {{ name
}}. This is an Angular "one-way" binding expression. During the page
rendering phase, Angular sees that expression, and knows to set the
value of the name attribute to the run-time value of the variable name
on the component. It would probably be less confusing if they used a
different variable name.

Return to the component code and change the name variable. I changed
mine to look like this.

> export class AppComponent  {
>
>   name = \'Mike\';
>
> }

Look at the result that appears in the right-hand pane. The value you
provided should be displayed instead of the original value.

![A close up of a piece of paper Description automatically
generated](media/image1.png){width="4.5in"
height="1.2354166666666666in"}

Open up the file hello.component.ts and look at its implementation. You
first thing you may notice is that all of its markup and styling is
defined in the same file.

> import { Component, Input } from \'@angular/core\';
>
> \@Component({
>
>   selector: \'hello\',
>
>   template: \`\<h1\>Hello {{name}}!\</h1\>\`,
>
>   styles: \[\`h1 { font-family: Lato; }\`\]
>
> })
>
> export class HelloComponent  {
>
>   @Input() name: string;
>
> }

Instead of providing a templateUrl and styleUrls, both of them are
provided directly in the file. It is worth pointing out that this is
still a form of separation of concerns. The HTML markup is clearly
separated from the styling and component code.

Personally, I would not recommend you do this, except in the simplest of
components. That said, there are many proponents of keeping all of your
component code in one file. Find your own balance; it is probably
somewhere in between "always" and "never" doing this.

Inside the component code is a single line of code.

>   @Input() name: string;

The \@Input decorator specifies that name is a string attribute that can
be provided in the markup of any client that uses this component.

## Component Reuse

The real power behind this is that you can reuse the component anywhere,
simply replacing its name attribute, and it will render consistently.

Back in app.component.html, make a few copies of the \<hello\> tag and
provide different names. Something like this, perhaps.

> \<hello name=\"{{ name }}\"\>\</hello\>
>
> \<hello name=\"Greg\"\>\</hello\>
>
> \<hello name=\"Jonathan\"\>\</hello\>
>
> \<hello name=\"Neil\"\>\</hello\>
>
> \<p\>
>
>   Start editing to see some magic happen :)
>
> \</p\>

Now it looks like this, and I do not have be concerned with how the
\<hello\> tag works behind the scenes. I can simply reuse it.

![A picture containing bird Description automatically
generated](media/image2.png){width="4.5in"
height="2.2305555555555556in"}

## ngFor

But what if you have a bunch of names? Change the name variable on the
component and make it an array called names.

> export class AppComponent  {
>
>   names = \[\'Mike\', \'Greg\', \'Jonathan\', \'Neil\'\];
>
> }

The cool thing about reusing components this way is that you do not have
to change the hello component at all. You simply need to change the
calling code to use ngFor, an Angular directive used to create multiple
instances of the hello component based on the number of elements in the
referenced array.

You use an ngFor by providing it as an attribute to the element you want
replicated. The value inside the quotes is the looping expression. It
consists of the keyword *let* followed by the variable name to be used
inside the element and any of its children, the keyword *of*, and the
name of the array on the component to loop over.

> \<hello \*ngFor=\"let name of names\" name=\"{{name}}\"\>\</hello\>

The asterisk, which is required, is an indication to Angular that this
directive will manipulate the DOM, or the page's document object model,
in some way.

## Attribute Binding

There is another Binding syntax that works with HTML attributes. If you
want to set the value of an attribute to a value on your component, use
square brackets around the attribute name.

> \<hello \*ngFor=\"let name of names\" \[name\]=\"name\"\>\</hello\>

Here, name, in square brackets, refers to the HTML attribute of the
custom component. The other name, in quotes, is the name of the variable
in the ngFor expression. When you are binding to an HTML attribute, this
is my preferred method because you can run just about any code you want
inside of those quotes.

## HTML Event Binding

You can also bind to HTML events. Any event can become a trigger to
execute a function on the component. The simplest way to illustrate that
is to create a button and provide a click handler.

You do that by surrounding the event name (in this case, click) with
parenthesis. Then inside the quotes, call the component function you
want to execute.

You can pass parameters to the function, which is often the case when
creating an event binding inside an \*ngFor, passing the current looping
variable to the event handler.

In this case, just call toggle().

> \<button (click)=\"toggle()\"\>Click Me\</button\>

Back inside the component, you need to implement the toggle function.
Add this code inside the app component, right after the names array.

> isToggled = false;
>
> toggle() {
>
>   this.isToggled = !this.isToggled;
>
> }

Now when you click the toggle button, the value of the isToggled
variable will flip between true and false.

## ngIf 

The isToggled variable is useless until you do something with it. Add a
new line inside the app component template file.

In this case, add a paragraph tag, give it an ngIf directive, and set it
to "isToggled."

> \<p \*ngIf=\"isToggled\"\>
>
>   I am toggled on!!!
>
> \</p\>

ngIf will conditionally render the HTML tag if the value inside the
quotes evaluates to a truthy value. Notice that ngIf also requires an
asterisk because it modifies the DOM.

![A picture containing bird, flower Description automatically
generated](media/image3.png){width="4.5in" height="1.453934820647419in"}

Now as you click the button, that paragraph will appear and disappear.

![A picture containing bird, flower Description automatically
generated](media/image4.png){width="4.5in"
height="1.6472222222222221in"}

Those are the basics you need to know to work with Ionic and Angular
Next, you will go ahead and create an Ionic app.

# Your First Ionic App

One of the things I like to do in my home directory is have a folder
called "git." You can call it anything you want: "projects,"
"myprojects," "ionic," it does not really matter.

Something I always do before starting an Ionic project is to ensure that
I have the latest tooling, even if I just installed it yesterday. I
recommend you do the same. Inside a command terminal of your choice,
enter the following command:

> npm install -g \@ionic/cli@latest

Not surprisingly, this will ensure that you get the absolute latest
version there is for us.

## Ionic App Wizard

Through the rest of this book, I am going to stick to the command line,
but Ionic has a web-based tool for building Ionic projects rapidly,
called the Ionic App Wizard.

Try that right now and see what kind of project it provides. Open a
browser to <https://ionicframework.com/start>. Supply a name, pick a
color, and select the side-menu template. It appears to default to
React, so make sure you select Angular.

On the next screen, sign in or create an account. Or you can choose to
skip that and just get your results.

The wizard gives you a custom-install command for the Ionic CLI, and it
warns you that you must have Ionic CLI 6.3 or above, which should not be
an issue, but is why I always recommend having the latest version of the
tooling.

Back in your terminal, run the command that the Ionic App Wizard gave
you and wait. It will run an npm install, and then you will need to cd
into that directory.

Enter the following command to launch the app.

> ionic serve

It should automatically open in your default browser. The application it
creates looks like an email box.

And voila! You just created an app out of nothing. In the next chapter,
I will review the code it generated.

# Guided Tour of the Ionic-Angular Code

For this tour, I am going to assume you are using Visual Studio Code. If
not, you should still be able to follow along.

Open the project the Ionic App Wizard created using the command

> code .

## index.html

Every web application starts with index.html, right? Well, it is not
always true, but it is the default with an Ionic-Angular app. Open
index.html now.

At the top of the file are a bunch of HTML meta tags inside the page
head. The folks at Ionic have already done the hard part of figuring
these out, and I recommend that you not mess with them.

> \<body\>
>
> \<app-root\>\</app-root\>
>
> \</body\>

The HTML body tag contains a single custom HTML element, app-root. That
is the how the app is created. So, look at where app-root is defined.

## app.component.ts 

Open the file src/app/app.component.ts. This is where you will find
app-root. In fact, this file should look similar to the one you saw on
StackBlitz.

> \@Component({
>
> selector: \'app-root\',
>
> templateUrl: \'app.component.html\',
>
> styleUrls: \[\'app.component.scss\'\]
>
> })

To review, the component decorator near the top defines some information
about the component and how it should be rendered. The selector tells
Angular that the tag name will be app-root; the HTML markup is in a file
call app.component.html, which you will see in a moment; and its custom
styles are in app.component.scss.

> public selectedIndex = 0;
>
> public appPages = \[
>
> {
>
> title: \'Inbox\',
>
> url: \'/folder/Inbox\',
>
> icon: \'mail\'
>
> },
>
> {
>
> title: \'Outbox\',
>
> url: \'/folder/Outbox\',
>
> icon: \'paper-plane\'
>
> },
>
> {
>
> title: \'Favorites\',
>
> url: \'/folder/Favorites\',
>
> icon: \'heart\'
>
> },
>
> {
>
> title: \'Archived\',
>
> url: \'/folder/Archived\',
>
> icon: \'archive\'
>
> },
>
> {
>
> title: \'Trash\',
>
> url: \'/folder/Trash\',
>
> icon: \'trash\'
>
> },
>
> {
>
> title: \'Spam\',
>
> url: \'/folder/Spam\',
>
> icon: \'warning\'
>
> }
>
> \];
>
> public labels = \[\'Family\', \'Friends\', \'Notes\', \'Work\',
> \'Travel\', \'Reminders\'\];

At the top of the class are some variables. There is a variable to hold
the index of the selected page, followed by an array of Pages. So now
you can see where those come from. Next come the labels you can see in
the menu below the pages.

It is traditional in an Angular app to define all of the class level
variables and fields near the top, followed by the class constructor,
which is what you see next.

> constructor(
>
> private platform: Platform,
>
> private splashScreen: SplashScreen,
>
> private statusBar: StatusBar
>
> ) {
>
> this.initializeApp();
>
> }

In the parameter list to the constructor is where you can inject
assorted services that the component will require: Platform, an Ionic
service, provides various pieces of information about the device or
platform the app is running on. The next two, SplashScreen and
StatusBar, are specific to running on physical devices, which we will
not cover here.

InitializeApp is a bit of boilerplate that I am going to ignore for now.

> ngOnInit() {
>
> const path =
>
> window.location.pathname.split(\'folder/\')\[1\];
>
> if (path !== undefined) {
>
> this.selectedIndex = this.appPages.findIndex(page =\>
>
> page.title.toLowerCase() === path.toLowerCase());
>
> }
>
> }

ngOnInit is what is known as an Angular lifecycle hook. There are a
bunch of them, but this one is used pretty often. Angular will call
ngOnInit once when the component and all of its children have been
initialized. You put code in here that you want to run early, after any
databinding. In this case, it is checking the URL of the current page to
try to determine which page from the pages array that is currently being
rendered.

## app-routing.module

Next open src/app/app-routing.module.ts to see how to navigate to those
pages. All of the main application routes are defined here.

> const routes: Routes = \[
>
> {
>
> path: \'\',
>
> redirectTo: \'folder/Inbox\',
>
> pathMatch: \'full\'
>
> },
>
> {
>
> path: \'folder/:id\',
>
> loadChildren: () =\>
>
> import(\'./folder/folder.module\').then( m =\>
>
> m.FolderPageModule)
>
> }
>
> \];

Think of a route as somewhat like a URL. The routing module defines an
array of routes, and describes the pattern of URL to match, and
describes which page modules get rendered for each.

The first route has an empty string for a path, with a redirectTo field.
This means that there is no path specified, the application will default
to folder/Inbox.

Next, any time the route starts with the word \"folder/\" followed by an
ID, the application will import the folder module and follow that
modules\'s own routing rules from there. I promise this will start to
make sense as you build our own app.

## folder.page.ts

Now you can look at something a little more interesting. Open
src/app/folder/folder.page.ts, which defines the folder page component.
There is not a lot of code in it.

> \@Component({
>
> selector: \'app-folder\',
>
> templateUrl: \'./folder.page.html\',
>
> styleUrls: \[\'./folder.page.scss\'\],
>
> })
>
> export class FolderPage implements OnInit {
>
> public folder: string;
>
> constructor(private activatedRoute: ActivatedRoute) { }
>
> ngOnInit() {
>
> this.folder = this
>
> .activatedRoute.snapshot.paramMap.get(\'id\');
>
> }
>
> }

It has a constructor, in which is injected an ActivatedRoute service.
This is an angular service that lets you get information about the route
the caused this page to appear. In the ngOnInit function, the page uses
that service to get the id that was part of the route.

## folder.page.html

The real magic happens in the folder page's markup, which is at
src/app/folder/folder.page.html.

> \<ion-header \[translucent\]=\"true\"\>
>
> \<ion-toolbar\>
>
> \<ion-buttons slot=\"start\"\>
>
> \<ion-menu-button\>\</ion-menu-button\>
>
> \</ion-buttons\>
>
> \<ion-title\>{{ folder }}\</ion-title\>
>
> \</ion-toolbar\>
>
> \</ion-header\>
>
> \<ion-content \[fullscreen\]=\"true\"\>
>
> \<ion-header collapse=\"condense\"\>
>
> \<ion-toolbar\>
>
> \<ion-title size=\"large\"\>{{ folder }}\</ion-title\>
>
> \</ion-toolbar\>
>
> \</ion-header\>
>
> \<div id=\"container\"\>
>
> \<strong class=\"capitalize\"\>{{ folder }}\</strong\>
>
> \<p\>Explore \<a target=\"\_blank\" rel=\"noopener noreferrer\"
> href=\"https://ionicframework.com/docs/components\"\>UI
> Components\</a\>\</p\>
>
> \</div\>
>
> \</ion-content\>

Most Ionic pages will contain an ion-header tag, which defines that
fixed header at the top of the page. Inside of that is an ion-toolbar, a
container for buttons, menus, and titles. To add buttons to a toolbar,
you use an ion-buttons tag. The slot attribute indicates where in the
header the buttons will go. The value "start" indicates that the buttons
should be on the left on a left-to-right OS. You can also choose "end,"
which places the buttons on the right. Inside is a single button. The
ion-menu-button is the standard hamburger menu you are all familiar
with. By default, it shows and hides itself, but that can be overridden.

Next to the buttons is an ion-title, with the word folder surrounded by
{{}}. You should now recognize this as an angular binding expression,
telling Angular to replace that expression with the actual value of the
folder variable.

Next is the ion-content. This is where most of your page\'s content will
live. It contains another header and toolbar containing just a title.

Finally, you see an HTML div tag with another binding expression, and a
paragraph containing a hyperlink.

Unbelievably, that is a good chunk of the functionality. Sure, there a
bunch of other files, but these are the ones you need to be familiar
with at this stage. The rest will be described as needed.

Now before you leave this little tour, I want to do a couple of fun
things, but I will leave that for the next chapter.

# Customize the Code

Before you leave this hello-ionic app, I want to do a couple of fun
things. How do you think you might customize that page list? If you
said, "modify the appPages array in app.component.ts," give yourself a
pat on the back. I noticed that there is no Sent Mail page, so you will
create one really quick and see what happens.

Put it right between Outbox and Favorites. Highlight the Outbox object,
and press Option (or Alt if you are not on a Mac) and press the down
arrow. This will make a copy of entire block of code. Change the second
instance of the word Outbox to Sent Items, and the url to /folder/Sent.
Leave the icon alone. Microsoft Outlook uses that paper airplane icon
for sent items. So instead, change the icon for outbox to albums.

> {
>
> title: \'Outbox\',
>
> url: \'/folder/Outbox\',
>
> icon: \'albums\'
>
> },
>
> {
>
> title: \'Sent Items\',
>
> url: \'/folder/Sent\',
>
> icon: \'paper-plane\'
>
> },

Here is where it gets fun. Assuming you left the ionic serve command
running, then as soon as you save these changes, the application will be
rebuilt automatically, and the browser will reload to reflect these
changes.

If not, run ionic serve again to see the changes.

![A screenshot of a cell phone Description automatically
generated](media/image5.png){width="4.5in"
height="2.7444444444444445in"}

What do you think will happen if you now click on the new Sent menu? You
did not create a new page or route, so will you get a 404? Nope, the
folder component will render, with its name set to the id portion of the
route, which is Sent. This is because the folder component is a pretty
generic object.

Not every page will be that clean, of course, but it is a good idea to
look for places you can reuse this pattern.

If you want to see where those icons came from visit
<https://ionicons.com>.

For more information on the components, you can click the components
link right in the middle of the hello-ionic app itself.

And that wraps up this section. You should have a completely installed
Ionic development environment, know how to create a new Ionic-Angular
app, and even do some minor customizations.

So, go forth, delight in your newfound power. Play around a bit before
you start the next chapter. When you are ready, I hope you will continue
this journey with me.

# A10Dance - The Demo App

The application you will be building throughout the course is called
A10Dance. It is an attendance application originally designed to help
Sunday School teachers keep track of the students in their classes.

For this book, the app will consist of three pages:

-   A home page

-   A Student Roster page

-   A Student Detail page

A side menu will enable users easily navigate between the home and
student roster pages. You will review how the menu is built, and
navigation is configured to move from page to page.

The home page is where the application will start. There is not much
here but an ion-card component. I will use this component to display
some text information about the application.

The Roster page displays the students registered to the class and has
most of the Ionic components you will use. The students are collectively
displayed using an ion-list, with each list item consisting of
ion-items, ion-buttons, ion-icons, and more. You will spend most of our
time in the section covering this page, as you flesh out its
functionality with action sheets, alerts, and toast notifications.

Finally, the Student detail page is where you can view and edit various
details about a single student. You will eventually use this page to
discuss Ionic forms. In this chapter, all you will do is lay out the
components and bind some data to them.

At each step of the way, I will explain the components I have selected,
and then provide the code that implements them.

# Creating the New Project 

Now that you have seen what you are going to build, dive right in and
get the project up and running.

As I said earlier, before I start any new Ionic project, I want to make
sure I am on the latest Ionic CLI. Do that first.

Run these commands

> npm install -g \@ionic/cli@latest
>
> ionic start

When asked, select Angular as the framework. Next, supply the name of
the project. I chose "a10dance." Select the blank template for this one.
You will be implementing a side menu, but I would rather have us build
it from scratch. Besides, this way you will be cutting a lot less
boilerplate code.

If you are asked about Capacitor integration, say no. If it does not
ask, but enables it automatically, that is fine.

You will not be working with AppFlow, so answer no to the question about
connecting it to an Ionic account.

Once the project is created, you can open it in the IDE to have a look.
There is not much there, because you used the blank template. That is
OK, because you will build it up quickly.

Go back into the terminal and fire up a quick command:

> ionic serve

Take a look at how it renders.

Again, there is not much content to speak of. So, take care of that
next.

# Modifying the Home Page

The first thing I want to do is flesh out the home page, as it is the
app's landing page. There will not be much content -- just some text
inside an ion-card.

## ion-card

An ion-card is a component designed to wrap basic pieces of information.
By default, a card has a gray border, rounded edges, and a subtle drop
shadow. As with all Ionic components, its visual style will change
slightly when rendered on an Android versus an iPhone.

Cards can be as simple or as complex as you want. The card I envision
for the home page will consist of an image of a classroom, followed by a
card header having both a subtitle and title, and finally a brief intro
paragraph inside of an ion-content tag.

You can get that page built right now.

Here is an image I will be using on the home page. It is available from
the GitHub repo at
<https://github.com/walkingriver/at10dance-angular/raw/volume1-demo/src/assets/images/classroom.jpg>.

![A picture containing indoor, table, living, room Description
automatically generated](media/image6.jpg){width="4.5in"
height="2.53in"}

Download that image now, or choose one of your own, and drop it into a
new folder, src/assets/images. Call it classroom.jpg.

Open the home page, which is at src/app/home/home.page.html. Delete
everything inside the \<ion-content\> tag.

Change the value inside the ion-title tag from Blank to Home.

In the now-empty ion-content, add an ion-card component.

Inside the ion-card, add a standard HTML \<img\> tag with the src
attribute set to that file you just downloaded, which should be
assets/images/classroom.jpg. To be a good citizen, you should also
provide an alt attribute. I am using the word \"Classroom\".

Here is what the markup should look like at this point.

> \<ion-content\>
>
> \<ion-card\>
>
> \<img src=\"assets/images/classroom.jpg\"
>
> \</ion-card\>
>
> \</ion-content\>

Pause here, save the file, and see what it looks like. Then you can take
advantage of live reloading as you finish the page.

## VS Code Terminal

I want to show you a really cool feature of VS code, assuming you are
using it. If not, enter the commands in whatever terminal you prefer. VS
Code has a built-in terminal, which you can access by pressing Ctrl+\`.

Inside the terminal, enter the command

> npm start

You could also use ionic serve, but I want you to become accustomed to
using npm as your script runner. It does not matter so much now, but you
will eventually rely on npm to do more complex tasks for us. So, why not
start now?

If all went well, you should see something like this.

![A screen shot of a computer Description automatically
generated](media/image7.png){width="4.5in" height="2.35in"}

Back in the code, add an ion-card-header component. By itself, that will
not do much. So, inside that, add an ion-card-subtitle with the text
"Classroom Attendance Manager," and immediately after it, an
ion-card-title with the text "@10Dance." No, you do not have to spell it
in the silly way I have.

Save the file and make sure it renders. If it did not, make sure the
ion-card-header wraps the subtitle and title elements, and look for
unclosed tags.

After the ion-card-header's closing tag, add an ion-card-content tag,
and inside that a normal HTML paragraph tag. Put anything you want in
that tag.

The component should now look like something this:

> \<ion-content\>
>
> \<ion-card\>
>
> \<img src=\"assets/images/classroom.jpg\"
>
> alt=\"Classroom\"\>
>
> \<ion-card-header\>
>
> \<ion-card-subtitle\>
>
> Classroom Attendance Manager\</ion-card-subtitle\>
>
> \<ion-card-title\>@10Dance\</ion-card-title\>
>
> \</ion-card-header\>
>
> \<ion-card-content\>
>
> \<p\>
>
> \@10Dance is an attendance application originally designed to help
> Sunday School teachers keep track of the students in their classes.
>
> \</p\>
>
> \</ion-card-content\>
>
> \</ion-card\>
>
> \</ion-content\>

Save the file and check the results. It should mostly resemble what I
have here.

![A picture containing indoor, table, sitting, monitor Description
automatically generated](media/image8.png){width="4.5in"
height="2.35in"}Now do one more thing before you leave the Home page.
Put in a link to the Roster page, which you will build shortly.

After the paragraph tag, add an HTML anchor tag with two attributes: a
routerLink set to \"/roster\" and a routerDirection set to \"forward.\"
Inside the tag provide some text, such as \"go to roster.\" This will
create a button with declarative navigation, so that you can go to the
roster page once it exists.

The reason you use routerLink instead of the typical href attribute is
so that Ionic will enhance the navigation animation for you. The
routerDirection means to use the platforms typical forward animation
direction. You could also have specified back or root, which have
slightly different animations.

It should now look like this:

> \<ion-card-content\>
>
> \<p\>
>
> \@10Dance is an attendance application originally
>
> designed to help Sunday School teachers keep
>
> track of the students in their classes.
>
> \</p\>
>
> \</ion-card-content\>

Saving the page, you can see the link rendered. However, clicking on it
will take you to a blank page. You have not built the Roster page yet.
You will do that shortly.

![A screen shot of a computer Description automatically
generated](media/image9.png){width="4.5in" height="2.35in"}

# Custom Students Service

Before you flesh out the Roster page, you need to get some students to
display. Later you will want to tie the list into a data store of some
sort, but you do not need to do that just to get some data displayed on
the page.

For that, you are going to create a simple "Students" service you can
inject into the pages that need it. Use the command line to create the
service.

## Angular CLI

In this case, it does not matter whether or not you use the Angular CLI
or the Ionic CLI. Go ahead and use the Angular CLI this time. Enter the
following command.

> npx ng generate service Students \--dry-run
>
> In case this is your first time seeing npx, I will explain. When you
> install npm packages globally, as you did with the Ionic CLI, the
> package's main binary will be linked to a folder that is already in
> your execution path.
>
> On the other hand, the Ionic-Angular project template installs the
> Angular CLI as a local project dependency. This means that the entire
> Angular CLI is installed in your project's node_modules folder. This
> makes is visible to your project's npm scripts, but completely
> invisible to your system. When you type ng into your terminal, it has
> no idea where to find that command.
>
> The npx command, which is installed with node and npm, knows to look
> for commands inside of your node_modules command. Before npx, if you
> wanted to run a command you had installed locally, you had two
> choices:
>
> Run it as an npm script, because npm already know where to look.
>
> Prepend your command with ./node_modules/{toolname}/bin.

This command is simply instructing the Angular CLI to generate a service
named Students. The dry-run option gives you a chance to see what will
happen, and then tweak things if you do not like what you see.

> CREATE src/app/students.service.spec.ts (338 bytes)
>
> CREATE src/app/students.service.ts (136 bytes)
>
> NOTE: The \"dryRun\" flag means no changes were made.

By default, the service will be created in the app folder, but not in a
folder of its own, and it will be created with a unit test. Go ahead and
run it again without the dry-run flag. When it has finished, open
students.service.ts.

Inside this file you will create an interface, a constant, and a
function.

Create a Student object as an interface. Remember, interfaces do not
exist in JavaScript, and will completely vanish upon build. Their sole
purpose for us is to enable parameter type checking, code completion,
and intellisense inside the code editor.

> export interface Student {
>
> id: string;
>
> firstName: string;
>
> lastName: string;
>
> birthDate?: string;
>
> parentName?: string;
>
> parentEmail?: string;
>
> parentPhone?: string;
>
> photoUrl?: string;
>
> status?: \'present\' \| \'absent\';
>
> }

The question marks on most of the fields indicate that those fields are
optional. To create a valid Student object, you need to provide at least
an id, firstName, and lastName. At this point, I do not know everything
that a Student object should have, but these fields should be enough for
our purposes now.

The status is worth noting due to its odd type. TypeScript allows you to
specify what essentially becomes a compile-time validation check.

> status?: \'present\' \| \'absent\';

This line indicates that the status field is an optional string value,
which may only contain one of two values: present or absent. Though this
will not be enforced at runtime, the TypeScript compiler will prevent
you from assigning any other value, and VS Code will offer you smart
code completion when assigning a value to this field.

Next, create an array of students that you can use in place of a
database for now. Call it mockStudents.

> const mockStudents: Student\[\] = \[
>
> { id: \'1\', firstName: \'Greg\', lastName: \'Marine\' },
>
> { id: \'2\', firstName: \'Jonathan\', lastName: \'Bennett\' },
>
> { id: \'3\', firstName: \'Neil\', lastName: \'Estandarte\' },
>
> { id: \'4\', firstName: \'Jen\', lastName: \'Townsend\' },
>
> { id: \'5\', firstName: \'Casey\', lastName: \'McBride\' },
>
> { id: \'6\', firstName: \'Diane\', lastName: \'Rivera\' },
>
> { id: \'7\', firstName: \'Troy\', lastName: \'Gutierrez\' },
>
> { id: \'8\', firstName: \'Priscilla\', lastName: \'Little\' },
>
> { id: \'9\', firstName: \'Bobby\', lastName: \'Robbins\' },
>
> { id: \'10\', firstName: \'Edmund\', lastName: \'Gardner\' }
>
> \]

Now for the function. Create a function called getAll(). This will
return a copy of the mockStudents array. In a future volume, you will
flesh out this service with more functionality, but for now, this is
plenty.

> getAll() {
>
> return \[\...mockStudents\];
>
> }

If you have not seen that particular syntax, it is shorthand for making
a shallow copy of an array.

When you are finished, the complete StudentsService class should look
something like this.

> \@Injectable({
>
> providedIn: \'root\'
>
> })
>
> export class StudentsService {
>
> constructor() { }
>
> getAll() {
>
> return \[\...mockStudents\];
>
> }
>
> }

It is deceptively simple because it does not do much. Now go create that
Roster Page.

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

# Implementing a Student Roster

Now you need to put those students you just created into the roster
page. Open src/app/roster/roster.page.ts.

Just before the constructor, create an array of students to hold the
list you will retrieve from the StudentsService:

> //This will hold the list of students
>
> students: Student\[\] = \[\];

Next, you need to inject a reference to the StudentsService into the
page's constructor. Insert a new private parameter studentService, of
type StudentsService.

> constructor(
>
> private studentService: StudentsService) { }

Make sure you get the casing right, or Angular will not be happy with
you. Marking the parameter private automatically exposes the parameter
as a member of the component class. It is a handy shortcut TypeScript
provides.

By default, the RosterPage implements Angular's OnInit interface, which
requires you to implement the OnInit Angular hook you saw in the guided
tour.

The function implementation, called ngOnInit, should currently be empty.
Inside this function, call the getAllStudents function from the
StudentService, and assign its result to the component\'s students
array.

> ngOnInit() {
>
> this.students = this.studentService.getAll();
>
> }

Now open the roster.page.html file in the same folder, so you can create
some markup to render the students.

The header is already done, and its name should be set to Roster, so
there is nothing you need to do there. You could change it to "Class
Roster" or something if you really want.

I am hoping that the ion-header is familiar, as you have seen it on the
home page, and during the guided tour.

Immediately after the ion-header, you need an ion-content. Inside the
ion-content, I will introduce a new component: The ion-list.

## ion-list

An ion-list is another container component, designed to wrap multiple
types of items in a visually consistent manner. ion-lists contain things
called ion-items, which in turn wrap ion-labels, ion-buttons, ion-icons,
form input fields and so forth. You will use all of those and more
during this book.

ion-lists can also be used to implement item sliding, which you have
probably seen before. These are options that appear only when you swipe
a list item left or right, revealing a less often used, or potentially
dangerous option, such as delete.

Inside of the ion-list, you can iterate over the students array with an
\*ngFor directive on the outermost element inside the list. In this
case, it will be an ion-item-sliding component. It will look like this.

> \<ion-item-sliding \*ngFor=\"let student of students\"\>

This will create one ion-item-sliding component (and everything inside
it) for each student in the students array.

ion-item-sliding will provide us with the item swipe, or slide, option.
Inside that will be an ion-item tag. This component will encapsulate the
complete list item.

Inside the ion-item, add an ion-icon and an ion-label as siblings. Set
the icon's slot attribute to "start," meaning that it will appear at the
start of the line. Inside the ion-label, bind some text to the student's
last and first names, separated by a comma.

Next to those, create two more ion-icon tags, which you will
conditionally render based on the student's status of absent or present.
The first one is for present; set it to display the eye icon. The second
is to be displayed when the student is absent, so for that one, use the
eye-off-outline, which is an outline of an eye with a line through it.

The way you render the icons conditionally is to add the \*ngIf
directive to each icon. One will evaluate to true if the student's
status is present. The other will render if the student's status is
absent.

Note that it is entirely possible for the student's status to be set to
neither value, because the status field is optional. In that case,
neither icon will be rendered, which is what I want.

Here is the completed ion-content code with the list.

> \<ion-content\>
>
> \<ion-list\>
>
> \<ion-item-sliding \*ngFor=\"let student of students\"\>
>
> \<ion-item\>
>
> \<ion-icon slot=\"start\" name=\"person-outline\"\>
>
> \</ion-icon\>
>
> \<ion-label\>
>
> {{student.lastName}}, {{student.firstName}}
>
> \</ion-label\>
>
> \<ion-icon \*ngIf=\"student.status===\'present\'\"
>
> slot=\"end\" name=\"eye\"\>\</ion-icon\>
>
> \<ion-icon \*ngIf=\"student.status===\'absent\'\"
>
> slot=\"end\" name=\"eye-off-outline\"\>
>
> \</ion-icon\>
>
> \</ion-item\>
>
> \</ion-item-sliding\>
>
> \</ion-list\>
>
> \</ion-content\>

Save the file now and see how it looks. If all went well, all of our
students are displayed as expected.

![A screenshot of a cell phone Description automatically
generated](media/image10.png){width="4.5in" height="2.35in"}

I want to wrap up this chapter by finishing that sliding item.
Immediately before the ion-itemSliding closing tag, add an
ion-itemOptions slide, with the side attribute set to end. This means
you want the option to appear at the end of the item, meaning when you
slide it toward the beginning of the item.

Inside of that tag, add a single ion-itemOption tag (mind the
singular/plural here. The plural tag is the outer tag). Set this one's
color to danger, which by default is a scary looking orange/red color.
You will deal with the click handler later, so for now, simply set the
tag's value to the word Delete. The complete code should now look like
this.

> \<ion-content\>
>
> \<ion-list\>
>
> \<ion-item-sliding \*ngFor=\"let student of students\"\>
>
> \<ion-item\>
>
> \<ion-icon slot=\"start\" name=\"person-outline\"\>
>
> \</ion-icon\>
>
> \<ion-label\>
>
> {{student.lastName}}, {{student.firstName}}
>
> \</ion-label\>
>
> \<ion-icon \*ngIf=\"student.status===\'present\'\"
>
> slot=\"end\" name=\"eye\"\>\</ion-icon\>
>
> \<ion-icon \*ngIf=\"student.status===\'absent\'\"
>
> slot=\"end\" name=\"eye-off-outline\"\>\</ion-icon\>
>
> \</ion-item\>
>
> \<ion-item-options side=\"end\"\>
>
> \<ion-item-option color=\"danger\"\>Delete
>
> \</ion-item-option\>
>
> \</ion-item-options\>
>
> \</ion-item-sliding\>
>
> \</ion-list\>
>
> \</ion-content\>

Save the file and refresh the page. At this point, the only
interactivity is the slider itself, so click and drag an item towards
the beginning of the item. You should see a Delete button. You can click
it. It behaves visually as you would expect it to, but it will not do
anything...yet.

![A screenshot of a cell phone Description automatically
generated](media/image11.png){width="4.5in" height="2.35in"}

In the next chapter you will wire up some new commands to this page so
that you can manage our roster of students.

# Adding Functionality to the Student Roster

If you were a teacher and this were a real class of students, there are
a number of things you would want to be able to do with your app. A few
of those things are:

-   Mark Absent or Present.

-   Navigate to a detail page to see or edit information that is not
    present on the list.

-   Remove a student from the class, with the appropriate warnings, of
    course.

In this chapter, you will enhance the UI of the Roster page to do all of
these things.

The first thing I want to do is add a menu to each student in the
ion-list. You can either create the menu first or the button to launch
the menu first. Go and create the menu first. For that, you are going to
use an ion-action-sheet.

## ion-action-sheet

An action sheet is a menu that displays like a dialog. It often contains
at least two, but usually more, action buttons that are contextually
related in some way. In our case, the context is that of the currently
selected student.

An ion-action-sheet is Ionic's specific implementation, rendering an
action sheet that automatically looks at home on an iPhone or Android.

![A screenshot of a cell phone Description automatically
generated](media/image12.png){width="3.57in" height="7.0in"}iPhone
Action Sheet

![A screenshot of a cell phone Description automatically
generated](media/image13.png){width="4.069444444444445in"
height="7.0in"}Android Action Sheet

Buttons in an action sheet may contain a role, which can be either
destructive or cancel. Destructive is used to indicate that something
permanent can happen and is often used for delete operations. On iOS
devices, buttons with the destructive role are rendered differently than
the rest, usually in red.

A button whose role is cancel will always be rendered last, at the
bottom of the sheet. This button should have no purpose other than
dismissing the sheet with no action taken.

The buttons in an action sheet can have text and icons. However, the way
you define them is unlike a normal ion-button component.

Our action sheet will include buttons to mark a student as present or
absent, delete a student, or cancel the action and do nothing. In order
to do that, you need to do a bit of setup first.

In the roster.page.ts file, you need to inject the ActionSheetController
into the component\'s constructor. This will enable us to build an
action sheet in response to a button click. The updated constructor
should now look like this.

> constructor(
>
> private actionSheetController: ActionSheetController,
>
> private studentService: StudentsService) { }

Yes, I like keeping my constructor parameters in alphabetical order, but
it is not necessary. Ensure you import ActionSheetController from
'@ionic/angular' if VS Code does not do it for you.

Now create a function to delete a student.

> async deleteStudent(student: Student) {
>
> this.students = this.students
>
> .filter(x =\> x.id !== student.id);
>
> }

This function works by calling the filter function on the students
array, removing the student passed into the function, and then
reassigning the result of the filter to the students array.

Now create the action sheet. The function to create and present the
action sheet looks like this.

> async presentActionSheet(student: Student) {
>
> const actionSheet = await this.actionSheetController
>
> .create({
>
> header: \`\${student.firstName} \${student.lastName}\`,
>
> await actionSheet.present();
>
> }

The create function accepts an options object and returns a promise,
which resolves to the action sheet component itself. This means you must
await it, which means the function has to be marked as async.

At a minimum, you will want to provide a header and an array of buttons.
The code above sets the header to the concatenation of the provided
student's first and last names.

Once you have a reference to the action sheet component, you can display
by calling its present function. This function also returns a promise,
so you may wish to await that call also.

Continuing with the options object, you need to create the buttons
array. This is an array of button objects. Each button should have a
text field and an icon field, a handler function that gets called when a
user clicks it, and optionally a role value. For this action sheet,
create four buttons:

1.  Delete, with the role of destructive, the trash icon, and a handler
    function which calls deleteStudent.

<!-- -->

1.  Mark Present, with the eye icon, and a handler function which sets
    the selected student\'s status to Present.

2.  Mark Absent, with the eye-off-outline icon, and a handler function
    which sets the selected student\'s status to Absent.

3.  And finally, a cancel button with the close icon and the role of
    cancel. It does not need a handler.

Below is entire code for the action sheet.

> async presentActionSheet(student: Student) {
>
> const actionSheet = await this.actionSheetController
>
> .create({
>
> header: \`\${student.firstName} \${student.lastName}\`,
>
> buttons: \[{
>
> text: \'Mark Present\',
>
> icon: \'eye\',
>
> handler: () =\> {
>
> this.markPresent(student);
>
> }
>
> }, {
>
> text: \'Mark Absent\',
>
> icon: \'eye-off-outline\',
>
> handler: () =\> {
>
> student.status = \'present\';
>
> }
>
> }, {
>
> text: \'Delete\',
>
> icon: \'trash\',
>
> role: \'destructive\',
>
> handler: () =\> {
>
> this.deleteStudent(student);
>
> }
>
> }, {
>
> text: \'Cancel\',
>
> icon: \'close\',
>
> role: \'cancel\',
>
> handler: () =\> {
>
> console.log(\'Cancel clicked\');
>
> }
>
> }\]
>
> });
>
> await actionSheet.present();
>
> }

Now create a button to launch the action sheet. Open the roster page
markup and add an ion-buttons tag immediately after the two existing
icons, and right before the ion-item closing tag. Give it a slot
attribute set to end, meaning that it will appear at the end of the
item. Next, add two ion-button tags, as children of the ion-buttons tag.
Inside of each button, add an ion-icon with a slot attribute set to
icon-only. This will suppress space in the button for a text label.
Specify the name of the first as ellipsis-horizontal-outline and set the
second one to chevron-forward-outline. These names map to the name of
the icons from <https://ionicons.com>.

Add a click handler to the button with the ellipsis. When clicked, you
want to call the presentActionSheet function, passing the current
student from the array.

Leave the button with the chevron alone for now. You will finish that
one later.

When you are finished, your ion-buttons component should look something
like this.

> \<ion-buttons slot=\"end\"\>
>
> \<ion-button (click)=\"presentActionSheet(student)\"\>
>
> \<ion-icon slot=\"icon-only\"
>
> name=\"ellipsis-horizontal-outline\"\>
>
> \</ion-icon\>
>
> \</ion-button\>
>
> \<ion-button\>
>
> \<ion-icon slot=\"icon-only\"
>
> name=\"chevron-forward-outline\"\>\</ion-icon\>
>
> \</ion-button\>
>
> \</ion-buttons\>

Save the file and have a look at the results. Click the buttons and see
that they look and behave as you would expect. The forward caret will
not do anything, but the ellipsis icon should display a completely
functional action sheet.

You should be able to mark students present or absent, and see the icon
change accordingly. Likewise, you can also delete a student.

## Connect Sliding Delete Button

While you are here, you can wire up the Delete button in the
ion-item-option component. Simply add a click handler and call
deleteStudent.

> \<ion-item-option (click)=\"deleteStudent(student)\"\>
>
> color=\"danger\" Delete\</ion-item-option\>

## ion-buttons and icons

You may be wondering, what is an ion-buttons tag, and why can you not
simply drop a button where you want it? While buttons can generally be
placed anywhere you want them, when used inside an ion-item or
ion-toolbar component, you need to group them together inside an
ion-buttons tag, specifying the slot as start or end, depending on where
you want the buttons to display. As with everything else in Ionic, start
typically places the buttons on the left side of its parent component,
and end places them on the right. This order is reversed for locales
that traditionally read Right-to-Left.

The ion-button component itself acts as you expect and can be customized
in a variety of ways. Buttons can be text-only, icon-only, or a
combination of the two. Buttons can be rendered large or small, in
multiple widths, and in a variety of colors. When adding an icon to a
button, specify the icon's slot as start or end, depending on whether
you want the icon to appear before or after the button's text. To create
a button without any text, specify the slot as icon-only and do not
include any text.

As stated above, all the Ionic icons can be found at
<https://ionicons.com>.

# User Confirmation and Notification

The way the code is currently written, deleting a student from the
roster might be done accidentally if the user clicks or taps on the
wrong button in the action sheet. There is no warning or confirmation
requested. Likewise, when a student is deleted, there is no indication
that the action occurred (other than the name disappearing from the
list). You will address both of these shortcomings in this chapter.

## Delete Confirmation

It is inconsiderate for an app to take a destructive action without at
least warning the user. It is better to ask for confirmation, and that
is what you will do here. In the previous chapter, both of the Delete
buttons simply call the deleteStudent function. Instead, it would be
better to get a confirmation first. You can get that confirmation using
an ion-alert.

## ion-alert

An ion-alert is a modal UI component that provides a simple warning to
the user that something important is about to happen, and optionally
provide a way to cancel it.

Below is what I have in mind to implement the confirmation. As with all
Ionic components, it renders with the appropriate look and feel on both
Android and iPhone.

![A screenshot of a cell phone Description automatically
generated](media/image14.png){width="4.5in" height="2.38in"}

ion-alert on Android

![A screenshot of a cell phone Description automatically
generated](media/image15.png){width="4.5in" height="2.31in"}

ion-alert on iPhone

Implementing an ion-alert on the Roster page will closely resemble the
work done on the ion-action-sheet, and with good reason. Ionic has tried
to keep the development experience consistent. Much of the following
code should feel familiar.

Inside the Roster page's component code, you need to inject Ionic's
AlertController into the constructor. Make sure it gets imported at the
top of the file.

> constructor(
>
> private actionSheetController: ActionSheetController,
>
> private alertController: AlertController,
>
> private studentService: StudentsService
>
> ) { }

Next, create a new function called presentDeleteAlert. In the markup
where you are currently calling deleteStudent, change that to call
presentDeleteAlert.

> async presentDeleteAlert(student: Student) {
>
> const alert = await this.alertController.create(
>
> {
>
> header: \'Delete this student?\',
>
> subHeader:
>
> \`\${student.firstName} \${student.lastName}\`,
>
> message: \'This operation cannot be undone.\',
>
> buttons: \[
>
> {
>
> text: \'Delete\',
>
> handler: () =\> this.deleteStudent(student)
>
> },
>
> {
>
> text: \'Never mind\',
>
> role: \'cancel\'
>
> }
>
> \]
>
> }
>
> );
>
> await alert.present();
>
> }

There are three attributes that control the text inside an ion-alert.

The header attribute is a string that appears at the top of the alert.
Use something like "Delete this student?" The subHeader attribute
appears just inside the alert body. Set this attribute to a
concatenation of the student's first and last names, so the user knows
for sure exactly which student is about to be deleted. The message
attribute is the main body of the alert. Use a string such as, "This
operation cannot be undone."

Finally, the alert needs an array of buttons. You define these buttons
exactly the same way as you did for the action sheet.

The first button is the Delete button. It needs a handler that will
delete a student, so provide an arrow function that simply calls the
presentDeleteAlert function.

The second button should be a Cancel button, with the role of "cancel."
It does not need a handler.

Save and check your work. If all went well, attempting to delete a
student should no longer automatically work. Instead, you should now see
the alert asking for confirmation. Clicking the button with the role set
to "cancel" should dismiss the alert with no action taken. Only if you
select the Delete button will the student disappear.

Next, you will create a small acknowledgement to the user that the
student really was deleted.

## Toast Notifications

Many times, an application needs to provide a notification to the user
that something has happened, but it is not critical enough to interrupt
the flow of the application completely. Toast notifications fill that
role perfectly.

A toast is a small, unobtrusive pop-up informational banner. By
convention, it should impart a short message that will appear for a
brief amount of time before automatically disappearing. Some toast
notifications also contain a way for the user to dismiss it early.

Deciding whether or not to use a toast notification is simple. Does the
message require the user to take action? And is it important if the user
misses it? If the answer to both questions is "no," then a toast
notification is perfect.

## ion-toast

![A screenshot of a cell phone Description automatically
generated](media/image16.png){width="4.5in" height="2.94in"}The Ionic
implementation of a toast notification is the ion-toast component. It is
probably the most basic of all of Ionic's UI components. You can build
one with a minimal amount of effort. The most basic form of the
component consists of a message and a duration.

An ion-toast can be vertically positioned at the top, middle, or bottom
of the screen. It is always centered horizontally. It can be colored
with the "color" attribute, providing any of the Ionic color constants.
You can add buttons and icons.

You will not be doing any of that. If you want to customize your
ion-toast after you finish the chapter, feel free.

## Implementing the ion-toast

In the roster page's component, add Ionic's ToastController to the
constructor.

> constructor(
>
> private actionSheetController: ActionSheetController,
>
> private alertController: AlertController,
>
> private studentService: StudentsService,
>
> private toastController: ToastController) { }

Next, modify the deleteStudent function to create and immediately
present a toast notification. My version now looks like this.

> async deleteStudent(student: Student) {
>
> this.students = this.students
>
> .filter(x =\> x.id !== student.id);
>
> const alert = await this.toastController.create(
>
> {
>
> message:
>
> \`\${student.firstName} \${student.lastName} deleted.\`,
>
> position: \'top\',
>
> duration: 3000
>
> });
>
> await alert.present();
>
> }

Its message attribute should contain a short statement showing that the
student has been deleted. Be as detailed as you want but remember that
shorter is usually better.

The default toast position is vertically centered on the screen. I
decided to move it to the top but will leave the final decision to you.
You can choose from top, middle, or bottom.

The duration attribute controls how long the ion-toast will wait before
it automatically dismisses itself. The duration is an integer in
milliseconds. Be careful not to specify a duration that is too short,
and definitely do not pass a string. If you omit the duration attribute,
the toast will remain on the screen indefinitely, requiring user
intervention to dismiss it.

You can provide a buttons array to an ion-toast, just as with the
ion-action-sheet and ion-alert. If you feel so inclined, go ahead and
add one.

Save the file and let the browser refresh.

Now when you delete a student, in addition to the student's name
disappearing from the roster, you should also see the confirmation
toast.

If you want some ideas on how to improve this experience, I provide some
in the Challenges section later in the book.

# Basic Navigation Menu

Before you wrap up this volume, I want to add a menu to make it easier
to navigate between the home page and the roster page. The menu will
mostly look and act like the one from the guided tour, but it will be a
bit simpler. In Ionic, you create a menu with the ion-menu component.

## ion-menu

The ion-menu is the Ionic component that implements a side-menu. As with
most other Ionic container components, it can contain a header with a
toolbar and title, along with some ion-content. The typical side-menu
consists of a list of options, made from an ion-list of ion-items. 

The menu can be customized with a variety of behaviors. 

If you want the menu to obscure the main page content when it opens, you
can set its type attribute to overlay. With this option, the menu slides
in from the side, covering the stationary main content.

Another option is push, which causes the page content to slide with the
menu. The menu still slides in from the side, pushing the main content
out of the way.

Or you can choose reveal to achieve a similar, but subtly different
effect from overlay. With reveal, the menu content itself is stationary,
and appears to be uncovered as the main contents slides out of the way.

You can specify which side the menu is on by setting the side attribute
to either start or end. If you choose end, make sure your menu icon is
on the same side of the main content\'s toolbar, or it will look weird.

You can disable swiping the menu on mobile devices by setting
swipeGesture to false.

If you want an item in your menu to close the menu when you select it,
be sure to wrap it with an ion-menu-toggle component. Otherwise, the
menu will stay open.

The ion-menu-toggle can also be used to open a menu (hence the name
toggle). By default, it will automatically hide itself whenever it
detects that its menu is disabled or being presented in a split-pane, as
you will be doing here. Because of that, if you want it to be visible
all the time, be sure to set its autoHide attribute to false.

Do not ask me how long it took me to debug that the first time I forgot
it.

Below are examples of the three different menu types.

There is more to the menu, but those are the basics. You will build one
in the next section.

![A screenshot of a cell phone Description automatically
generated](media/image17.png){width="3.71in" height="7.0in"}ion-menu
"overlay" type

![A screenshot of a cell phone Description automatically
generated](media/image18.png){width="3.6798611111111112in"
height="7.0in"}ion-menu "push" Type

![A screenshot of a cell phone Description automatically
generated](media/image19.png){width="3.71in" height="7.0in"}ion-menu
"reveal" Type

## Menu Implementation

Open the file src/app/app.component.ts. This is where you will define
the menu. 

Replicating what you saw during the tour, create an array of pages.
Inside the array, provide two object literals: one for the home page,
with the appropriate url and icon; then one for the Roster page, with
its URL /roster, and use the icon called people.

> const appPages = \[
>
> {
>
> title: \'Home\',
>
> url: \'/home\',
>
> icon: home
>
> },
>
> {
>
> title: \'Roster\',
>
> url: \'/roster\',
>
> icon: people
>
> }
>
> \];

Next comes the menu itself. That will live inside the app component
markup, src/app/app.component.html, which should be pretty empty right
now. You need to flesh it out by adding some Ionic components.

To build the menu content, create an ion-menu element as the first
element inside of the ion-app element. Set its contentId to
main-content. This value must match the HTML element id of the
ion-router-outlet, so add an id attribute to ion-router-outlet with the
same value.

For the menu type, I am partial to overlay, but feel free to try push or
reveal.

Add an ion-header, with an ion-toolbar, and an ion-title. Inside the
title, provide a title such as Menu. 

This is what the markup should look like at this point.

> \<ion-app\>
>
> \<ion-menu contentId=\"main-content\" type=\"overlay\"\>
>
> \<ion-header\>
>
> \<ion-toolbar\>
>
> \<ion-title\>Menu\</ion-title\>
>
> \</ion-toolbar\>
>
> \</ion-header\>
>
> \</ion-menu\>
>
> \<ion-router-outlet id=\"main-content\"\>
>
> \</ion-router-outlet\>
>
> \</ion-app\>

Just after the ion-header, add an ion-content. And just inside that an
ion-list. This is where the menu will be constructed, by iterating over
the appPages array.

As you did with the students, you will use an ngFor directive inside of
an ion-menu-toggle component.

> \<ion-menu-toggle auto-hide=\"false\" \*ngFor=\"let p of appPages; let
> i = index\"\>

This is a slightly different ngFor expression than you have seen
previously. It is looping over the appPages array, but there is also the
second portion, let i = index. This does what you probably suspect,
providing an integer representing the array index of each page in the
array.

As I mentioned earlier, set the auto-hide property to false, unless you
enjoy watching things vanish for no apparent reason.

Inside the toggle, place an ion-item with a routerLink set to
appPage.url. Doing this automatically turns the item into a hyperlink,
which is pretty cool. Make sure you get the binding syntax right, as I
am showing here. Otherwise, you could end up sending your users to a
route literally called "appPage.url." Set the routerDirection to none or
root, your choice. This affects the animation. It is subtle, so play
with it and decide which you prefer.

Also include a click handler to the ion-item that sets selectedIndex =
i. This allows the app component to track the current page. With a
little CSS styling, it is reasonably simple to highlight that page in
the menu.

You can do that by conditionally adding the selected class with the
expression \[class.selected\]=\"selectedIndex == i\". Recall that
specifying an attribute inside of square brackets causes Angular to
execute the expression in quotes on the right side of the = sign. If the
expression evaluates to true, then the class will be applied. The only
thing missing is the custom styling for the selected class, but I will
leave that as an exercise for you.

If you want a visible line separating your menu items, set the lines
attribute to \"full\" or omit the attribute entirely. I am not a fan of
the looks, so I tend to choose "none."

Finally, set detail to false. That will prevent the menu from having a
gray forward chevron on its side. I do not like the effect for a menu,
but to each his own.

Inside the ion-item, add an ion-icon with its slot set to start and its
name set to the page.icon. Again, pay attention to the binding syntax.

Your complete menu should look like this.

> \<ion-menu contentId=\"main-content\" type=\"overlay\"\>
>
> \<ion-header\>
>
> \<ion-toolbar\>
>
> \<ion-title\>Menu\</ion-title\>
>
> \</ion-toolbar\>
>
> \</ion-header\>
>
> \<ion-content\>
>
> \<ion-list id=\"inbox-list\"\>
>
> \<ion-menu-toggle auto-hide=\"false\"
>
> \*ngFor=\"let page of appPages; let i = index\"\>
>
> \<ion-item (click)=\"selectedIndex = i\"
>
> routerDirection=\"root\"
>
> \[routerLink\]=\"\[page.url\]\"
>
> lines=\"none\"
>
> detail=\"false\"
>
> \[class.selected\]=\"selectedIndex == i\"\>
>
> \<ion-icon slot=\"start\" \[name\]=\"page.icon\"\>
>
> \</ion-icon\>
>
> \<ion-label\>{{ page.title }}\</ion-label\>
>
> \</ion-item\>
>
> \</ion-menu-toggle\>
>
> \</ion-list\>
>
> \</ion-content\>
>
> \</ion-menu\>

Make sure you close all your tags properly.

## Menu Button

You need to add a menu icon to both of our pages. Nope, it is not
automatic. Open src/app/home/home.page.html.

Inside the ion-toolbar, just before the ion-title, you need to add an
ion-buttons component with slot=\"start\". Then an ion-menu-button
component inside of that.

You do not need to add any text or icons. Those will be managed
automatically.

Then you need to do exactly the same code in the Roster page. Just copy
and paste the same block of code. 

Both page's headers should now look like this, with the appropriate
value for ion-title, of course.

> \<ion-header\>
>
> \<ion-toolbar\>
>
> \<ion-buttons slot=\"start\"\>
>
> \<ion-menu-button\>\</ion-menu-button\>
>
> \</ion-buttons\>
>
> \<ion-title\>Home\</ion-title\>
>
> \</ion-toolbar\>
>
> \</ion-header\>

Save the files and try it.

If all went well, you should now be able to navigate between the home
and roster pages with ease. 

## Split Pane

The one thing left to do is to implement the split pane. Remember in the
guided tour, you saw that when the window was narrow, as on a mobile
device, the menu was hidden, and would slide out from the side when you
click on the menu icon.

The split pane allows you to keep the menu visible when the screen is
wide enough. Though you can override this behavior, as a general rule,
"wide enough" means if the HTML page is wider than 992 pixels.

Adding the split pane requires just two more lines of code. Back in
src/app/app.component.html, as the first child of ion-app, just before
the ion-menu, add an ion-split-pane component with the contentId
attribute set to main-content. Yes, this exactly matches the contentId
attribute of the menu and the id attribute of the ion-router-outlet.
This is how Ionic knows that the three components are tied together.

Should you want, you can add a when attribute to the ion-split-pane to
indicate when you want it visible. Valid values are xs, sm, md, lg, or
xl. The default is lg. Play around with them and choose the one you like
best.

## Wrap Up

To recap what just happened in this Chapter: if you want to add a page,
these are the things you should do:

-   Create the page component itself, with the markup and code you want.

-   Add a route with a URL so that users can get to the page.

-   If you want the page in your application\'s side menu, add it to the
    appPages array, with the URL, a title, and an icon.

-   Repeat as needed.

There will be more pages in future volumes of this series. I hope you
will join me.

# Where to Go from Here?

I hope you enjoyed this introduction to developing web applications with
Ionic and Angular. By this point, you should be comfortable with:

-   The basics of the Ionic Framework.

-   Some of the "Angularisms" and how they work with Ionic.

-   Looking for more information in the [Ionic
    Documentation](https://ionicframework.com/docs).

-   Building a functional UI composed of various Ionic Components.

This is Volume One in the series: *Ionic and Angular: Idea to App
Store*. Please look for the other volumes in this series.

## Ionic and Angular Video Course

I mentioned this before, but it bears repeating. There is also an online
video version of this course, encompassing this entire book series.

> More information on the courses, along with occasional discount codes,
> can be found by signing up on my website: <https://walkingriver.com>.

## Reviews Appreciated!

If you enjoyed this book, please consider leaving me a review on Amazon
and Goodreads .

# Apply What You Have Learned

Now that you have completed this volume, take a few moments to apply
what you have learned to the demo application you just built. Here are a
few enhancements you attempt.

## Modify the "Delete" Toast

The toast notification you added to indicate that a student was deleted
from the roster positions itself at the top of the screen, stays for
3000 ms (3 seconds), and then vanishes. It cannot be manually dismissed
by the user. And sometimes, it can be a little hard to see in its
default color and position. Your challenge is to fix that.

1.  Change the duration of the toast to 5 seconds.

<!-- -->

4.  Add a close button so the user can close the toast sooner. Toast
    buttons are configured the same way that Action Sheet buttons are.
    Hint: use a role rather than a handler.

5.  Move the toast to the bottom or middle of the screen using
    its position attribute.

6.  Change its color.

## Modify the Icons

Maybe you do not like my icons. Head over to <https://ionicons.com> and
find some you like better. Here are some ideas: 

1.  You can change the absent/present icons to something else, change
    their colors, or both.

<!-- -->

7.  The icon you use in the roster is pretty generic. You could add a
    gender to the Student interface and then adjust the icon based on
    that value at runtime. 

8.  Change the color of any icon.

## Advanced: Undo Delete

Instead of a close button on the toast notification, you could add a
quick "undo" button.

## Advanced: Sort Roster

TypeScript arrays have a sort function. Provide a button in the Roster
toolbar to sort by the students\' last names instead of the current
default.

## Advanced: Header Component

It seems that every page needs a header with a title and menu button.
For a demo application with only two pages, copying and pasting the
header code might be acceptable. As your app grows, this might become a
burden. Create a custom component that includes a menu button, with a
title you can pass as an attribute.

## References

<https://ionicframework.com/docs>

# Introduction to App Store Deployment

These days, it seems that everyone wants to build mobile apps. Even web
developers.

The bad news is that there are too many technologies involved and the
process can be somewhat convoluted. Apple certainly does its best to
complicate things.

The good news is that you do not have to ignore standard Web
technologies such as HTML, JavaScript, and TypeScript.

![A screenshot of a cell phone Description automatically
generated](media/image20.png){width="4.5in" height="2.53125in"}\
\
If you are a web developer and want to build mobile apps, but you do not
want to take the time to learn native mobile development technologies,
then this book is for you.

I will show you not only how easy it is to build your own app, but also
how fun it can be.

You will see how you can quickly take your existing Web application and
deploy it to the Apple App Store and make it available to millions of
iOS devices.

Take a look at these apps.

![A screenshot of a cell phone Description automatically
generated](media/image21.png){width="4.5in" height="2.53125in"}

Each one of them is a Web application wrapped in an Xcode project and
deployed to the App Store. And these are just the few that I built
myself. Almost a third of all apps in the Apple App Store are built with
Web technologies. How amazing is that?

Now it is your turn. Get your favorite Web app ready and join me on this
fast-paced journey to enter the world of mobile application development.

This section is about one thing and one thing only. Getting your web
application onto the Apple App Store, where it will then be available to
the tens of millions of iOS users all over the world. 

In this book, I will show you how to get a web application prepared and
deployed to the Apple App Store.

How are you going to do that? With Capacitor from Ionic.

Capacitor is a modern piece of technology that will allow you to wrap an
existing web application in an Xcode project and then deploy it to the
Apple App Store. This book will cover the basics you need to take one of
your own web apps (or you can use one of mine if you prefer) and turn it
into a function iOS app. 

When you are finished, you should be able to replicate the process with
every web app you want to put in the hands of iOS owners everywhere.

# Before You Begin

## Prerequisites

There are some prerequisites you must have before you
begin.![](media/image22.emf){width="0.7488320209973753in"
height="0.7754571303587051in"}![](media/image23.emf){width="0.7755172790901137in"
height="0.7698151793525809in"}

> ![](media/image22.emf){width="0.9541666666666667in"
> height="0.9875in"}![A screen shot of a computer Description
> automatically
> generated](media/image24.png){width="1.0291666666666666in"
> height="0.7680555555555556in"}You need a Mac; which I assume you have
> if you are reading this; if not, feel free to follow along. But you
> will not be able to deploy anything.
>
> ![](media/image23.emf){width="0.5590277777777778in"
> height="0.5555555555555556in"}You need to be a registered Apple
> developer. I will not go over everything required to get set up as an
> Apple developer, but you can sign up
> at [https://developer.apple.com](https://developer.apple.com/)
>
> And finally, you need Xcode, which you can download from the Mac App
> Store.

## Demo Application

This section is designed as a continuation of the last section, so feel
free to use the demo application you just built. If you skipped that
first section, or simply want to follow along, you can use one of the
following projects.

<https://github.com/walkingriver/at10dance-angular>

<https://github.com/walkingriver/at10dance-react>

Simply clone one of these repositories and then execute

> npm install

inside the generated folder. You will need Node 8 or later, which you
can find at <http://nodejs.org>.

If you decide to clone one of my repos, use one the following blocks of
commands to get you up and running quickly:

### Clone and Build the Angular Version

> git clone <https://github.com/walkingriver/at10dance-angular.git>
>
> npm install
>
> npm run build

### Clone and Build the React Version

> git clone <https://github.com/walkingriver/at10dance-react.git>
>
> npm install
>
> npm run build

Note: These two repositories are for the demo application from my Ionic
"Idea to App Store" series.

See <https://amazon.com/author/mcallaghan>

# Creating an Xcode Project

The first thing you must do is create a project that you can open in
Xcode from an existing web application. This will become the basis of
the application you eventually deploy to Apple.

The best way to create either an iOS Project from any Web app is by
adding Capacitor to your project. Sure, you could use Cordova, but that
is so last decade.

If you want the best experience with the least amount of friction, trust
me, you will want to use Capacitor.

![capacitorjs.com](media/image25.png){width="4.5in" height="2.53125in"}

Capacitor (<https://capacitorjs.com>) is a technology from Ionic, which
does not actually require Ionic. In fact, nothing you are about to see
or do requires Ionic.

## Install Capacitor into the Project

To use Capacitor, you must have some code built already, which you
should have done at the end of the last chapter.

At this point, you have a complete Web application inside of the build
folder.

Enter the following commands to install and initialize Capacitor.

> npm install \@capacitor/cli \@capacitor/core
>
> npx cap init \[name\] \[id\]

## Create Xcode Project

The next thing, now that you have Capacitor, is to install the iOS
platform, which will create an Xcode project for you automatically.

And you do that with this command:

> npx cap add ios

In case you are not familiar with it, NPX is Node's way of executing a
command that may not be installed on your machine, but possibly those
that exist only on the Node registry.

One of the benefits of NPX is that can execute node package binaries
that are not in your system directory but installed somewhere inside of
your node_modules folder.

And because Capacitor is installed locally, it is not on your normal
command path.

For more information about NPX, see this article:
<https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner>

## Open the Xcode Project

Next you will want to open the project in Xcode itself. You can do that
with Capacitor also, using the command:

> npx cap open ios

This will launch Xcode with the project.

Now see if you can run it. Choose any of the simulated devices in the
dropdown. Select a device and click the Play button.

![A screenshot of a computer Description automatically
generated](media/image26.png){width="4.364120734908137in"
height="1.4984339457567803in"}

If you look at the bottom area of Xcode, you can see the console. Any
console or log messages that are happening or any errors that are
running, any errors that occur while you are running will appear here.

![A screenshot of a computer Description automatically
generated](media/image27.png){width="4.5in"
height="3.3784722222222223in"} Play around with the running application
and make sure it works as expected.

That is as far as you need to dig into Capacitor for now. It has done
the hard part for you.

## Convenience Script (postbuild)

Now that you have an iOS project for the demo app, a couple of things
you want to do quickly. And again, everything you do here applies for
all the different types of applications.

The first is to open the package.json file in the project and add a
script that will make some of this a little easier.

If you make any changes at all to the web app, you must rebuild it, and
then you must synchronize those changes with the Capacitor project.

To do that, you are going to make use of npm's "post" scripts.

Whenever you have a script that starts with the word "post" followed by
another word, npm will run that script right after the first script.

Create a script in package.json called "postbuild" that will synchronize
with the Capacitor project. Place it inside the "scripts" section.

\"scripts\": {

\"postbuild\": \"cap sync\",

Because it is named "postbuild" it will run right after the build
script.

This script is simply calling capacitor's sync command, which will
automatically copy the built artifacts to all the Capacitor projects
that you have, with whatever platforms that are installed.

Give that a try. Run the command:

> npm run build

NPM will build the application. Then it will immediately synchronize
with Capacitor. It may have even updated some native iOS dependencies.

# Run on Device

Next you need to get the application running on an actual device. You
just ran it on the simulator, but that is not where you need to be to
get this thing onto the App Store.

What you see below is that Xcode is not very happy right now because
before I took this screenshot, I removed my developer account from
Xcode. I have also told it not to automatically manage signing.

![A screenshot of a computer Description automatically
generated](media/image28.png){width="4.5in"
height="3.0078204286964128in"}

But you want to do that, so click the button to have it automatically
manage signing. Xcode will not like that unless you are already logged
in with your Apple developer account.

If not, then it still is not going to work.

Why?

![A screenshot of a cell phone Description automatically
generated](media/image29.png){width="4.5in"
height="3.0840277777777776in"}Because you need a development team, so
log into your Apple development account. Then click the button to
"Automatically manage signing." Select a team and update the bundle
identifier to something unique.

Xcode should select the right Provisioning Profile and Signing
Certificate for you. Now when you build the project, it should succeed.

## Using QuickTime to Mirror an iPhone

If you have not yet done so, connect your iPhone to your Mac.

I want to show you a cool little feature that you may not be aware of.
Launch QuickTime Player, which will let you enable a movie recording to
mirror your iPhone to your Mac.

Once you have launched QuickTime Player, select the File \| New Movie
Recording and then select your iPhone.

You will not have any control over the iPhone from your computer, but
you can you can simply control it from your phone as you normally would.

## Run App on the Device

By now Xcode should be building your project successfully. But you did
not run it yet.

![A screenshot of a cell phone Description automatically
generated](media/image30.tiff){width="4.5in"
height="3.2284722222222224in"}Select your device you just connected in
the dropdown and press the Play icon.

![A screenshot of a cell phone Description automatically
generated](media/image31.png){width="4.5in"
height="4.756944444444445in"}

What you should see first is the default Capacitor icon as the
application is deployed to the phone.

Next, the application will launch with the default Capacitor splash
screen. We will take care of those soon.

![A screenshot of a cell phone Description automatically
generated](media/image32.png){width="4.5in"
height="3.977777777777778in"}

![A screenshot of a cell phone Description automatically
generated](media/image33.png){width="4.5in"
height="4.121527777777778in"}

You can see the application's console log scrolling at the bottom of the
Xcode window.

How cool is that?

# Creating the App Store App

The next major step is getting the built application to the App Store.

But first, you need a place to put it.

You need to go to Appstore Connect to create the application before you
can upload it.

To do that, open a browser to <https://appstoreconnect.apple.com> and
log in with your Apple developer account.

Once you are logged in, it shows you all the applications that you have
currently got on the App Store.

![A screenshot of a cell phone Description automatically
generated](media/image34.png){width="4.5in"
height="2.369167760279965in"}

This is my Apps list. You can see a few of them with the red badges and
the word "Rejected" next to them. There are many reasons for this: Apple
policy violations, potential copyright issues, or even value judgments
by Apple.

I am not going to go into any more details here. Just be aware that
Apple is known to reject applications, sometimes for bizarre reasons.

## Create New Application Bundle

To create a new application, simply click the blue plus icon and select
"New App."

![A screenshot of a cell phone Description automatically
generated](media/image35.png){width="4.5in"
height="2.504032152230971in"}

### Bundle ID

On the popup window that appears, click on "Certificates, Identifiers &
Profiles."

![A screenshot of a cell phone Description automatically
generated](media/image36.png){width="4.5in"
height="4.834027777777778in"}

On the next screen, enter a simple description for the ID. This is what
will appear in the Bundle ID dropdown on the previous page.

Select an Explicit Bundle ID and enter the exact same string you entered
in Xcode.

![A screenshot of a cell phone Description automatically
generated](media/image37.png){width="4.5in"
height="3.4659722222222222in"}

### Application Capabilities

Apple also wants to know what iOS features that you are planning to use
in this application. In my demo app, I am not planning for any of these,
so I left them all blank.

Scroll through the list and select only those capabilities you know your
app will need.

When you are finished, click, the Continue button.

## Create New App

Unfortunately, you may need to start the new app process again. If so,
click New App... again.

Look at the Bundle ID drop down and you should see your new ID.

Complete the form as you did before using this example if necessary.

![A screenshot of a cell phone Description automatically
generated](media/image38.png){width="4.5in"
height="4.618055555555555in"}

There is no need to limit your users. That is beyond this tutorial.
Anyone who wants to can download it. Click Create, which will return you
to the Apps page.

At this point, you can stop. There is a lot more to be done here, but
the purpose of doing this was simply to get an app created so that you
can upload the application.

# Upload to AppStore Connect

In this chapter, your goal is going to be uploading the application to
Apple. You will not do anything with it yet.

I just want to show you how to create a signed application bundle and
upload it to Apple.

Open the project in Xcode again.

I will explain one of the first mistakes I made, so you do not have to
suffer the pain I did.

Imagine you are using the iPhone Simulator to run the app.

The first mistake I made is not knowing that Archive is the command to
use to create the signed bundle.

![A screenshot of a cell phone Description automatically
generated](media/image39.png){width="4.5in"
height="2.7694444444444444in"}The second mistake was not being able to
figure out why the Archive command is almost always disabled.

The reason is the device specified, the active scheme as it is called,
is a simulated device.

Earlier, when I first showed this running an Xcode, I used the iPhone SE
simulator and now you do not have any iPhone connected to the Mac.

What can you do about it? You have two choices. You can either plug in a
real device or you can simply set the device to Generic.

That act alone will enable archive. Go ahead and do one of those two
things now.

## Archive and Create the App Bundle

Now, select the Archive command from the Product menu.

![A screenshot of a cell phone Description automatically
generated](media/image40.png){width="4.5in"
height="2.3895833333333334in"}At this point, assuming you took the
Capacitor application, built it and ran it on your iPhone, logged into
your Apple account and everything is being automatically managed, all
the signing, etc... in theory, this should just work.

It can take quite some time to build everything.

Hopefully, after a few minutes, the build succeeded and now.

## Distribute App

Xcode next wants to know what you want to do with your archive.

![A screenshot of a social media post Description automatically
generated](media/image41.png){width="4.5in"
height="1.2159722222222222in"}Notice that the application name is still
App. Probably not where you want to leave it, nor do you want version
1.0. For now, that is not critical.

The next step is to distribute the application. Click the Distribute App
button and a new screen appears.

### Select a Method of Distribution

There are four choices here.

-   App Store Connect

-   Ad Hoc

-   Enterprise

-   Development

![A screenshot of a cell phone Description automatically
generated](media/image42.png){width="4.5in"
height="2.6770833333333335in"}I recommend accepting the default (App
Store Connect) because, quite frankly, you probably do not want to use
ad hoc to install on arbitrary devices or as it says here, designated
devices.

You probably do not have an enterprise in which to distribute the
application, nor do you have a development team. Click Next.

### Select a Destination 

You can either sign your app and create the bundle without uploading it
to the App Store, or you can just go directly to the App Store, which is
the default.

You are going to upload directly to App Store. Click Next.

### 

![A screenshot of a cell phone Description automatically
generated](media/image43.png){width="4.5in"
height="2.7159722222222222in"}

### App Store Connect Distribution Options

![A screenshot of a cell phone Description automatically
generated](media/image44.png){width="4.5in"
height="2.717361111111111in"}

Again, you are going to take the defaults. All these options make sense
for something you are going to distribute. Click Next.

### Application Signing

The next screen is about signing.

![A screenshot of a cell phone Description automatically
generated](media/image45.png){width="4.5in"
height="2.7055555555555557in"}

You are going to let Apple and XCode do all the hard work. I simply do
not see the point in manually managing these things.

Maybe if you are part of a large organization, you might have a specific
set of certificates that you have to use and device profiles.

This process is hard enough as it is. You want it to be as easy as
possible and not make it any more difficult than necessary.

### Review App.ipa Content

At this point, everything is done; everything has been built. Now the
only thing left is to upload it to the App Store Connect and it was
successful. Click Upload.

![A screenshot of a cell phone Description automatically
generated](media/image46.png){width="4.5in"
height="2.7083333333333335in"}

After a few minutes, assuming there were no errors, you should see this
message indicating that the App was successfully uploaded to Apple.

![A screenshot of a cell phone Description automatically
generated](media/image47.png){width="4.5in"
height="2.6930555555555555in"}

# AppStore Connect Details

What do you need to do to get this thing in the App Store?

Log into <https://appstoreconnect.apple.com> and navigate to the App you
just created in the last chapter. As you can see, it does not even have
an icon yet.

![A screenshot of a cell phone Description automatically
generated](media/image48.png){width="4.5in"
height="1.8486111111111112in"}

That is fine for now, so go ahead and click on it and look at what you
must do: supply a lot of images.

To me, the images are some of the hardest things to do because creating
them is such a manual process.

I will show you how to get those images later. At this point, I want to
help you get the rest of this form completed.

## Version Information

You must supply up to 170 seventy characters of promotional text. This
is the first blurb of texts that your potential customers will see in
the App Store. Think of it as a Tweet for your app. Be brief.

![A screenshot of a cell phone Description automatically
generated](media/image49.png){width="4.5in"
height="2.7159722222222222in"}

However, you have a lot more flexibility with the Description field.
This is where you can have a lot of fun. This is where you want to tell
the story of your application. You have up to 4000 characters to do so.

My recommendation is you spend a lot of time building this description.
Think of it as the landing page for your application. You need to sell
it. Why do people want to use your application?

![A screenshot of a cell phone Description automatically
generated](media/image50.png){width="4.5in" height="1.9125in"}

Next, you can also supply up to 100 characters of keywords. There is an
entire art to selecting keywords and there are Web sites devoted to the
subject.

This URL should be a web page where can people go if they have questions
about supporting the application.

Apple is going to require support URL when people have issues with your
application. Apple will not offer support for your application. That is
your job.

Next, you may optionally enter a marketing URL, which is a little bit
different. This will be a URL that is visible in the App Store, which
people can click on to find more information.

You must enter at least the support URL. You do not have to supply the
marketing URL, but you probably should.

### App Clip

The app clip is a new feature from Apple in iOS 14. If you want to learn
more about how it works, please see this URL:
<https://help.apple.com/app-store-connect/#/dev5b665db74>.

### iMessage App

The app I built for this demo is not an iMessage App, so I will be
skipping that one, too.

### Apple Watch App

This application that you are building now does not deal with the
message app or the Apple Watch. As with the last two, you are going to
skip those.

I am not suggesting that these are unimportant, but they are not
relevant here.

## Build

As you scroll down, you get to the Build section.

![A screenshot of a cell phone Description automatically
generated](media/image51.png){width="4.5in"
height="1.4388888888888889in"}

This is where you associate a build you just uploaded to the application
being created on this page.

Uploading the application bundle to Apple is not instant, but it is
quick. By the time you get here, it should have completed processing
Click the big blue button to see a list of builds you have sent.

![A screenshot of a cell phone Description automatically
generated](media/image52.png){width="4.5in"
height="2.0340277777777778in"}

In the screenshot above you can see I have uploaded a single build. If
you do not see any builds listed, but are sure you completed the upload
successfully, you probably need to wait a little longer. Apple will
email you when it has finished processing the upload.

Assuming you have one, select a build and click Done.

If you get a popup asking about encryption, Apple wants to know if you
are breaking any U.S. encryption export laws.

And as far as I know, at least for my demo app, it does not. You need to
ensure you answer honestly.

App Icon

![A screenshot of a cell phone Description automatically
generated](media/image53.png){width="4.5in" height="3.00625in"}

The application icon, as you can see, is the default one from Capacitor.
To fix that, you have to go back into Xcode and add the correct icons
that you want and then upload a new build.

We will take care of that later.

## General App Information

You need to go through everything else on App Store Connect first.

![A screenshot of a cell phone Description automatically
generated](media/image54.png){width="4.5in"
height="1.3784722222222223in"}

Here you need to give your app a version string, which should default to
the one that corresponds to the build you selected.

Next, explain who owns the copyright. In other words, who owns the
rights to the application? It should be you.

### Age Rating

Next, you need to help Apple calculate an age rating. You do that by
clicking the Edit link and answering a massive list of questions.

This should be straightforward for you. Simply answer the questions
honestly and let Apple do the rest.

The list is longer than the screenshot below, so make sure you scroll
through the entire list.

![A screenshot of a cell phone Description automatically
generated](media/image55.png){width="4.5in"
height="4.063888888888889in"}

Here is the complete list, as of the time I am writing this:

-   Cartoon or Fantasy Violence

-   Realistic Violence

-   Prolonged Graphic or Sadistic Realistic Violence

-   Profanity or Crude Humor

-   Mature/Suggestive Themes

-   Horror/Fear Themes

-   Medical/Treatment Information

-   Alcohol, Tobacco, or Drug Use or References

-   Simulated Gambling

-   Sexual Content or Nudity

-   Graphic Sexual Content and Nudity

-   Unrestricted Web Access

-   Gambling and Contests

-   Made for Kids (Requires an age recommendation)

Once you answer those questions, Apple then applies a rating.

### Game Center

If your app is a game, click the Game Center checkbox. You may need to
supply more information about your game's multiplayer compatibility,
which is beyond the scope of this writing.

### App Review Information

This next section is additional information for the reviewer, the human
who's going to review your application.

![A screenshot of a cell phone Description automatically
generated](media/image56.png){width="4.5in"
height="2.0055555555555555in"}

Do they need to sign in to use the app? If so, check the "Sign-in
required" box and supply a username and password that will let them log
into the app.

This is an important thing to pay attention to because it is possible
that your app might be password protected. If that is not the case,
leave it unchecked.

Contact information is pretty straightforward. Although I have never had
it happen, you should give them enough information to contact you in
case they have questions.

### Notes

The notes box is for any other information you think the reviewer might
need to help with the review. Personally, I have always left it blank.

### Attachment

If your application is complicated enough, you may attach documentation
or videos or other type of help to make it easier for the person who is
reviewing it to understand how to use your application.

### Version Release

When do you want them to release the application to the public?

-   You can manually do it.

-   You can automatically do it, which is the default.

-   Or you can specify a date, and Apple will note release before this
    particular date and time.

### Advertising Identifier

And then finally, advertising. Does your application use ads? In other
words, does it display ads? I found out the hard way a long time ago,
that if you use Google AdSense, that counts as a yes.

And if you tell them no, and your application really does it will get
rejected.

If you select Yes, a few more options appear. If you are going to serve
ads, but you are not going to link apps together so that the
advertisements, can be related. I believe that is what the second one
is.

Personally, I have never done anything other than simply serving ads
from AdSense, and I have never checked the second and third boxes.

### Limit Ad Tracking setting in iOS

You must click the final checkbox or you cannot continue.

However, make sure you look at that red text. If you answer the
questions incorrectly and they find out about it, Apple will reject your
app, remove it from the apps or issue a warning.

And if you do it again, they may ban your account entirely.

Save everything now, but do not try to submit it for review just yet.
You still need to take care of the icons, splash screen, and
screenshots.

We will do that over the next two chapters.

# App Icons and Splash Screen

Now it is time get the application icon and splash screen taken care of.
It is not hard to do, and I will show you a straightforward way to
handle it.

Back in the pre-Capacitor days when everyone was using Cordova, Cordova
had a command line option to generate icons and splash screens from a
source image.

These days, I am trying to stay away from any of the Cordova tools,
because Capacitor is the future.

## Cordova-Res

The tool you are going to use is called cordova-res, which you can see
at <https://github.com/ionic-team/cordova-res>.

It is a tool from the Ionic team that replicates the functionality that
the Cordova command line used to provide.

The bonus is that it does it all locally rather than sending the file
out to the Web.

I have a feeling they are going to rename it soon and get rid of the
word "cordova" in its name.

## Default Images

Take a look at the screenshot below.

![A screenshot of a cell phone Description automatically
generated](media/image57.png){width="4.5in"
height="1.3981485126859143in"}

What you have on the left is a resources folder that is just inside your
project root folder. This is where the source images are going to live.

On the right, you can see the iPhone simulator is running with the
default Capacitor icon visible.

And if you were to launch the application, you would quickly see the
splash screen.

![A screenshot of a cell phone Description automatically
generated](media/image58.png){width="4.5in"
height="2.6486111111111112in"}

The default splash screen is just a white image with the Capacitor logo
in the middle. That seems to be the case for a lot of iOS apps, so you
are going to stick to that for the purposes of this demo.

## Icon Image

![A close up of a logo Description automatically
generated](media/image59.png){width="4.5in" height="4.5in"}To find my
icon, I downloaded a PNG file from <https://pixabay.com>, an archive of
more than a million images that are free to use for almost any purpose.
It is simply a clipboard with a checklist and pencil.

Apple highly recommends not using transparency in your icons.

And if you look at the icons that are visible in the simulator, you can
see what happens.

![A screenshot of a cell phone Description automatically
generated](media/image60.png){width="4.5in"
height="2.502872922134733in"}The files and \@10dance icons all have
white backgrounds, but most icons in iOS seem not to do that.

For the most part, you want your icon to be the color that you expect it
to be. What will happen is because you are using a PNG file with
transparency, those transparent areas will be turned white. I am OK with
that if you are.

## Splash Screen Image

And the splash screen is similar. It is the same exact image centered
within a much larger image. The image size is 2732 x 2732, which is the
recommended or required size.

Stay in the command line for now. Once you have your favorite terminal
or shell ready, go ahead and install the package as a development
dependency for this project.

> npm install -D cordova-res

The -D flag installs the package as a development dependency. This means
it will be available to your project at build time, but it will not ship
with the application. This is exactly what we want.

Next, you are going to tell Cordova Res to build the images you need.
You can execute it with simple npx command:

> npx cordova-res ios \--skip-conf \--copy

The first part of the command, npx, allows you to execute an npm package
that is only installed locally.

"cordova-res" is the actual command name.

"ios" indicates to build an icon and splash screen only for an iOS
project. You can also specify "android" but you probably do not want to
do that just now.

Because you do have a config file, which is part of a Cordova
application, specify the "\--skip-config" flag.

Finally, "\--copy" instructs the command to copy the resulting resources
into your Xcode project.

You are likely to see some warnings, but otherwise it should run
quickly.

## Generated Icons

If you look in the ./ios/icon folder, you should see almost 30 generated
icons of various sizes.

![A screenshot of a cell phone Description automatically
generated](media/image61.png){width="4.5in"
height="2.9229166666666666in"}

## Generated Splash Screens

It also created the splash screen for you in multiple sizes. You can
find those in the ./ios/splash folder.

![A screenshot of a cell phone Description automatically
generated](media/image62.png){width="4.5in"
height="2.928472222222222in"}

An important thing to note is that the cordova-res utility assumes that
you are executing it from the root folder of your project.

It further assumes that the icon in the splash screen are in a folder
called Resources at that root level, that the icon is called icon, and
the splash screen is called Splash and they are both PNG files.

You may see a warning that because there was an alpha channel, which
means there was transparency, that all the transparency will be filled
in with white.

Personally, I am fine with that. If you are not, you need to edit your
images to replace the transparency with the color of your choice.

## Using the New Images

To see how it looks and the changes that were made, you simply need to
open the Xcode project, which you can you can do with the following
handy command.

> npx cap open ios

That will launch Xcode for you.

At this point, all you need to do is execute the application and let it
deploy to the simulator. Xcode should have already picked up all the new
assets for you.

Pay close attention to the simulator screen after you press play. You
should see the icon change and then the splash screen should appear.

![A close up of a phone Description automatically
generated](media/image63.png){width="4.5in"
height="3.1840277777777777in"}![A screenshot of a cell phone Description
automatically generated](media/image64.png){width="4.5in"
height="7.381944444444445in"}Upload New Build

You still need to upload this version of the code to the App Store, but
that is the exact same process you saw a few chapters ago. I will not go
through that again here.

# Screenshots and Final Submission

The very last thing you need to do now to submit the application to the
App Store officially is to provide some screenshots at various
resolutions.

I am going to take a little bit of a detour here. There really is no
point in submitting my demo app as it now stands to Apple. It does not
really do anything, and Apple will not approve anything like that.

To help me get my point across and show exactly how this is done, I am
going to submit an update to an existing application.

I will show you how you create the screenshots.

Then I will show you a completed App Store submission and show how to
submit an update.

All these things working together I think will be important for you in
the future with your own applications.

## Park Pursuit 

Here is my application, known as Park Pursuit. If you would like to
follow along, please visit <https://park-pursuit.com> and select the
appropriate store from which to download the app.

![A screenshot of a cell phone Description automatically
generated](media/image65.png){width="4.5in"
height="1.1944444444444444in"}

It is a visual scavenger hunt with geolocation built into it.

It is itself an Ionic app, and it uses Capacitor, so it is everything
you may have seen so far in my books and courses.

On the right in the picture above, you can see the iPhone 11 Pro Max
running in the iOS Simulator. Apple wants screenshots of various sizes,
and this phone is one of them.

This is the bare minimum as I am writing this book. You must supply
images from a 6.5-inch iPhone display and a 5.5-inch iPhone display.

![A screenshot of a cell phone Description automatically
generated](media/image66.png){width="4.5in"
height="2.6486111111111112in"}

Plus, because this application supports iPads, you must also supply
screenshots for an iPad Pro, both second and third generation.

![A screenshot of a computer Description automatically
generated](media/image67.png){width="4.5in"
height="2.6493055555555554in"}

You can supply images for every possible screen size, but it is not
strictly necessary. The App Store is OK with that and will use the
larger screenshots in place of the smaller devices.

You can see that it is using the 12.9-inch display for the iPad. For
some of the smaller iPhone models, it uses the larger screenshots and
simply scales down.

I do need to replace a few of these. One of the existing screenshots
shows the theme parks available to play for the scavenger hunt. I now
provide more theme parks, so I want to upload the new screenshot to show
that change.

### App Demo

Here is a quick look at the App back in Xcode. When I launch it in the
simulator, you can see its custom splash screen.

![A screenshot of a computer screen Description automatically
generated](media/image68.png){width="2.25in"
height="4.47926290463692in"}

The app starts with the instruction screen.

![A screenshot of a cell phone Description automatically
generated](media/image69.png){width="2.25in"
height="4.4743143044619424in"}

At that point, the user can choose to start a new game.

![A screenshot of a cell phone Description automatically
generated](media/image70.png){width="2.25in"
height="4.5505610236220475in"}

The first thing you need to do with the new game is to tell Park Pursuit
what theme park you are visiting.

Let us imagine you are visiting Universal Studios and there are only 20
clues.

![A screenshot of a cell phone Description automatically
generated](media/image71.png){width="2.25in"
height="4.580583989501313in"}

The player might select a short game of five clues. When they then click
the theme park, it immediately selects five random clues from the 20
that it has and displays them in the game screen.

The object of the game is to look for these hidden details or these
small details as you visit the theme parks.

![A screenshot of a cell phone Description automatically
generated](media/image72.png){width="2.25in"
height="4.590968941382327in"}

When you think you found one, you can select it to see a slightly larger
image. This screen also allows you to tell the game you think you have
found the clue shown.

![A picture containing monitor Description automatically
generated](media/image73.png){width="2.25in"
height="4.559099956255468in"}

Tapping the image flips the card to reveal a hint on the back along with
a button that says "Found It."

The game is GPS-aware. It calculates the distance between where the
image was taken and the current location of your mobile device. It
allows a match if the two are within approximately ten meters from each
other.

You can try to play it from a distance greater than that, but if you
tell it you found a clue, it is not going to believe you.

![A screenshot of a cell phone Description automatically
generated](media/image74.png){width="2.141742125984252in"
height="4.3389260717410325in"} ![A close up of a device Description
automatically generated](media/image75.png){width="2.1568832020997375in"
height="4.324175415573054in"}

In this case, it asks whether you are even in the same park. I am about
a dozen miles from this park, and the game knows it. Quite frankly, that
is the behavior I want.

## Create the Screenshots

Going back to the New Game screen, this is the primary screenshot I want
to replace. You are free to upload as many as ten screenshots of any
part of your app that you feel will help sell it. Choose wisely.

![A screenshot of a cell phone Description automatically
generated](media/image70.png){width="2.25in"
height="4.5505610236220475in"}

I can take that screenshot in any one of three ways: Select the File \|
Save Screen menu, Click the camera icon in the simulator window's title
bar, or simply type Cmd + S.

By default, the screenshot is saved on the Desktop, with the name being
Simulator Screen Shot, the name of simulator's loaded device, followed
by a date and time stamp.

![A screenshot of a cell phone Description automatically
generated](media/image76.png){width="4.5in"
height="0.5868055555555556in"}

At the absolute minimum, the App Store is going to require screenshots
at three different resolutions. At the time of this writing, the way to
get those sizes is to use these iPhone models (either real devices or in
the simulator):

  -----------------------------------------------------------------------
  App Store Connect                   Simulator Device
  ----------------------------------- -----------------------------------
  iPhone 6.5" Display                 iPhone 11 Pro Max

  iPhone 5.5" Display                 iPhone 8 Plus

  iPad Pro 12.9" (3^rd^ Generation)   iPad Pro 12.9" (4^th^ Generation)
  -----------------------------------------------------------------------

If you are following along, go ahead and make your screenshots for each
of these devices and set them aside for a few moments.

## Submit a New Build

When anything in your application changes, you need to submit a new
build to Apple. If you are simply following along and want to get
straight to the screenshots, you can skip this part. I am including it
here for completeness.

To submit a new build, the important thing to recall is that the command
to start this process is the menu Product \| Archive. Do not forget that
you cannot start an archive while you have a simulator selected. You
must either select a real iPhone that is currently connected to your
Mac, or a Generic Device.

In my case, I usually select my real iPhone.

That allows me to archive.

![A screenshot of a cell phone Description automatically
generated](media/image77.png){width="4.5in"
height="1.8979166666666667in"}

It is worth pointing out that I bumped the version number in Xcode, this
should create a brand new build and should automatically submit it to
App Store Connect for me.

![A screenshot of a cell phone Description automatically
generated](media/image78.png){width="4.5in"
height="2.097916666666667in"}

Once the app is uploaded, you can return to Safari.

It created a new version, but that version is not reflected yet in the
App Store. You can clearly see that the version strings do not match.
![A screenshot of a cell phone Description automatically
generated](media/image79.png){width="4.5in"
height="1.3972222222222221in"}This version, 20.2.24, tells me that I
have not released since February 24, 2020. This is how I have been
versioning, by the date the app was released.

## Create a New Version

To release the build I just uploaded, I need to tell it I want a new
version, so I click the plus here.

The first thing Apple wants to know for a new version is what the new
version should be

![A screenshot of a cell phone Description automatically
generated](media/image80.png){width="4.5in"
height="2.0340277777777778in"}

Then I need to tell it what has changed since the last version.

![A screenshot of a social media post Description automatically
generated](media/image81.png){width="4.5in"
height="1.5895833333333333in"}

I added more theme parks and removed all ads. That is enough detail.

Next, I need to replace the outdated screenshots with some new ones. I
already have 10 of the maximum10 screenshots, so I have to delete one
for each new one I want to add.

![A screenshot of a cell phone Description automatically
generated](media/image82.png){width="4.5in"
height="2.9194444444444443in"}

I want to add the one I just captured, which shows the New Game screen
with the additional theme parks. You can select images from your
computer or simply drag them into this window.

Once uploaded, you can drag the images around to order them however you
think makes sense. I usually put them in the same order a player would
likely encounter them.

Let me show you what happens if you try to drag a file the wrong size so
you know you what it will do.

If try to drag a file from the wrong iPhone, it complains with a pretty
obvious error.

![A screenshot of a cell phone Description automatically
generated](media/image83.png){width="4.5in"
height="2.2472222222222222in"}

It will not allow it because the dimensions are wrong, which means you
need to go back into Xcode and the simulator. If you have not yet done
so, you need to provide it with an 8 Plus screen for a 5.5" Display.

Once you have completed the iPhone screens, you still need to upload
images for an iPad pro and an iPad pro second edition.

This is simply repeating the same process over for these.

I think it is pretty straightforward from here, that you can create the
screenshots, and now you know where to put them.

## Final Submission

Once your screenshots are all there, it is time to finish the
submission.

In my case, I need to scroll down and tell the App Store that the
application no longer provides advertising. It should be safe to select
no here.

![A screenshot of a tree Description automatically
generated](media/image84.png){width="4.5in"
height="2.4277777777777776in"}

The next thing to do is to provide some promotional text.

![A screenshot of a cell phone Description automatically
generated](media/image85.png){width="4.5in"
height="1.136111111111111in"}

Finally, it is time to select a build.

![A screenshot of a cell phone Description automatically
generated](media/image86.png){width="4.5in"
height="1.0854166666666667in"}

This is the one you just uploaded, and you can see it is missing a
compliance, but you'll show you what you need to do next.

![A screenshot of a cell phone Description automatically
generated](media/image87.png){width="4.5in" height="1.30625in"}

Essentially, it wants to make sure that you are allowed to export the
application from the United States, and so it wants to know if you are
using an encryption that's trade restricted.

Be careful with this one. You do not want to answer it incorrectly. In
my case, I am not using any encryption.

![A screenshot of a cell phone Description automatically
generated](media/image88.png){width="4.5in"
height="4.822222222222222in"}

You can see what would happen if you said yes, then you would have to go
through some other steps, but as I said, I am not doing that. I am not
using any encryption.

![A screenshot of a cell phone Description automatically
generated](media/image89.png){width="4.5in"
height="2.7888888888888888in"}

Select the appropriate answer for the app, assuming you are following
along. Then you can save.

![A picture containing table, game Description automatically
generated](media/image90.png){width="4.5in" height="0.93125in"}

And finally, you can submit the application for review.

![A close up of a device Description automatically
generated](media/image91.png){width="4.5959612860892385in"
height="0.6930555555555555in"}

## The Review Process

And now, as with all things Appstore, you wait.

Your worst-case scenario is it gets rejected entirely. Unfortunately, I
have had a number of those that have done that.

Your best case scenario, and what you should expect to happen, is that
it will be approved relatively quickly.

This is the progression of emails you should expect after you submit
your app to the App Store.

### Completed Processing

This first one indicates that the that you uploaded has completed
processing. You need to wait for that to finish before you can select it
as your build.

![A screenshot of a social media post Description automatically
generated](media/image92.png){width="4.5in"
height="3.234722222222222in"}

### Waiting for Review

A few minutes later, after clicking submit for approval, I received this
email telling me that the application is now waiting for review.

This means it is in the queue, but not yet assigned to a person.

![A screenshot of a social media post Description automatically
generated](media/image93.png){width="4.5in"
height="2.9194444444444443in"}

### In Review

Almost eight hours later, I received the email telling me that the app
is now in review by a person at Apple.

![A screenshot of a social media post Description automatically
generated](media/image94.png){width="4.5in"
height="2.902083333333333in"}

### Available for Sale

Finally, about three hours after that, I received this email letting me
know that my application has been approved and is now available for sale
on the App Store.

![A screenshot of a social media post Description automatically
generated](media/image95.png){width="4.5in"
height="3.259027777777778in"}

Total elapsed time from submission to approval: just under 11 hours.

Do not get too discouraged if you hear nothing for hours at a time,
especially if you are submitting a brand new app.

I think my first one took almost a week to get approved.

# Wrap Up

Congratulations! In this book, you managed to build an App Store version
of a web application using Ionic's Capacitor.

You saw the application run on a real device and on the iOS simulator.

Then you successfully created and uploaded the application to Apple's
App Store Connect.

You created some custom icons and splash screens, making the app look
more normal, more natural.

You used the iOS Simulator to create the required App Store screenshots
at various resolutions.

And finally, if all went well, you submitted the app to the App Store
for approval.

If you have been following along, you should now have everything you
need to get your own application submitted to the App Store and
hopefully approved.

# What Next?

I hope you enjoyed this overview of deploying a web application to the
Apple App Store. If so, please consider leaving me a positive review at
the seller's site where you purchased it. Also consider some of my other
titles.

You can always checkout my other offerings at
<https://walkingriver.gumroad.com>.

Please follow me at Twitter for regular updates. My handle is
[\@walkingriver](https://twitter.com/walkingriver).
