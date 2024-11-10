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

