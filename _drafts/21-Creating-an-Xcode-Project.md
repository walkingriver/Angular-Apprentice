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

