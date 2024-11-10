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

