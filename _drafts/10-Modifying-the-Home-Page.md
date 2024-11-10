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

