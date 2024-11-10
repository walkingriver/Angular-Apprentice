# Apply What You Have Learned

Now that you have completed this volume, take a few moments to apply
what you have learned to the demo application you just built. Here are a
few enhancements you attempt.

## Modify the "Delete" Toast

The toast notification you added to indicate that a student was deleted
from the roster positions itself at the top of the screen, stays for
3000 ms (3 seconds), and then vanishes. It cannot be manually dismissed
by the user. And sometimes, it can be a little hard to see in its
default color and position. Your challenge is to fix that.

1.  Change the duration of the toast to 5 seconds.

<!-- -->

4.  Add a close button so the user can close the toast sooner. Toast
    buttons are configured the same way that Action Sheet buttons are.
    Hint: use a role rather than a handler.

5.  Move the toast to the bottom or middle of the screen using
    its position attribute.

6.  Change its color.

## Modify the Icons

Maybe you do not like my icons. Head over to <https://ionicons.com> and
find some you like better. Here are some ideas: 

1.  You can change the absent/present icons to something else, change
    their colors, or both.

<!-- -->

7.  The icon you use in the roster is pretty generic. You could add a
    gender to the Student interface and then adjust the icon based on
    that value at runtime. 

8.  Change the color of any icon.

## Advanced: Undo Delete

Instead of a close button on the toast notification, you could add a
quick "undo" button.

## Advanced: Sort Roster

TypeScript arrays have a sort function. Provide a button in the Roster
toolbar to sort by the students\' last names instead of the current
default.

## Advanced: Header Component

It seems that every page needs a header with a title and menu button.
For a demo application with only two pages, copying and pasting the
header code might be acceptable. As your app grows, this might become a
burden. Create a custom component that includes a menu button, with a
title you can pass as an attribute.

## References

<https://ionicframework.com/docs>

