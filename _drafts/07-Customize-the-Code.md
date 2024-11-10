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

