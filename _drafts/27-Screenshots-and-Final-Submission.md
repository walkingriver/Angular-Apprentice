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

