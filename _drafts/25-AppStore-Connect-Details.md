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

