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

