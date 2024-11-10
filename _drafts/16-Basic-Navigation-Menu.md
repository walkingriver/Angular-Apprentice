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

