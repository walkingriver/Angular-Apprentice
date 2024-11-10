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

