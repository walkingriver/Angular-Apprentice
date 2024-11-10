# Adding Functionality to the Student Roster

If you were a teacher and this were a real class of students, there are
a number of things you would want to be able to do with your app. A few
of those things are:

-   Mark Absent or Present.

-   Navigate to a detail page to see or edit information that is not
    present on the list.

-   Remove a student from the class, with the appropriate warnings, of
    course.

In this chapter, you will enhance the UI of the Roster page to do all of
these things.

The first thing I want to do is add a menu to each student in the
ion-list. You can either create the menu first or the button to launch
the menu first. Go and create the menu first. For that, you are going to
use an ion-action-sheet.

## ion-action-sheet

An action sheet is a menu that displays like a dialog. It often contains
at least two, but usually more, action buttons that are contextually
related in some way. In our case, the context is that of the currently
selected student.

An ion-action-sheet is Ionic's specific implementation, rendering an
action sheet that automatically looks at home on an iPhone or Android.

![A screenshot of a cell phone Description automatically
generated](media/image12.png){width="3.57in" height="7.0in"}iPhone
Action Sheet

![A screenshot of a cell phone Description automatically
generated](media/image13.png){width="4.069444444444445in"
height="7.0in"}Android Action Sheet

Buttons in an action sheet may contain a role, which can be either
destructive or cancel. Destructive is used to indicate that something
permanent can happen and is often used for delete operations. On iOS
devices, buttons with the destructive role are rendered differently than
the rest, usually in red.

A button whose role is cancel will always be rendered last, at the
bottom of the sheet. This button should have no purpose other than
dismissing the sheet with no action taken.

The buttons in an action sheet can have text and icons. However, the way
you define them is unlike a normal ion-button component.

Our action sheet will include buttons to mark a student as present or
absent, delete a student, or cancel the action and do nothing. In order
to do that, you need to do a bit of setup first.

In the roster.page.ts file, you need to inject the ActionSheetController
into the component\'s constructor. This will enable us to build an
action sheet in response to a button click. The updated constructor
should now look like this.

> constructor(
>
> private actionSheetController: ActionSheetController,
>
> private studentService: StudentsService) { }

Yes, I like keeping my constructor parameters in alphabetical order, but
it is not necessary. Ensure you import ActionSheetController from
'@ionic/angular' if VS Code does not do it for you.

Now create a function to delete a student.

> async deleteStudent(student: Student) {
>
> this.students = this.students
>
> .filter(x =\> x.id !== student.id);
>
> }

This function works by calling the filter function on the students
array, removing the student passed into the function, and then
reassigning the result of the filter to the students array.

Now create the action sheet. The function to create and present the
action sheet looks like this.

> async presentActionSheet(student: Student) {
>
> const actionSheet = await this.actionSheetController
>
> .create({
>
> header: \`\${student.firstName} \${student.lastName}\`,
>
> await actionSheet.present();
>
> }

The create function accepts an options object and returns a promise,
which resolves to the action sheet component itself. This means you must
await it, which means the function has to be marked as async.

At a minimum, you will want to provide a header and an array of buttons.
The code above sets the header to the concatenation of the provided
student's first and last names.

Once you have a reference to the action sheet component, you can display
by calling its present function. This function also returns a promise,
so you may wish to await that call also.

Continuing with the options object, you need to create the buttons
array. This is an array of button objects. Each button should have a
text field and an icon field, a handler function that gets called when a
user clicks it, and optionally a role value. For this action sheet,
create four buttons:

1.  Delete, with the role of destructive, the trash icon, and a handler
    function which calls deleteStudent.

<!-- -->

1.  Mark Present, with the eye icon, and a handler function which sets
    the selected student\'s status to Present.

2.  Mark Absent, with the eye-off-outline icon, and a handler function
    which sets the selected student\'s status to Absent.

3.  And finally, a cancel button with the close icon and the role of
    cancel. It does not need a handler.

Below is entire code for the action sheet.

> async presentActionSheet(student: Student) {
>
> const actionSheet = await this.actionSheetController
>
> .create({
>
> header: \`\${student.firstName} \${student.lastName}\`,
>
> buttons: \[{
>
> text: \'Mark Present\',
>
> icon: \'eye\',
>
> handler: () =\> {
>
> this.markPresent(student);
>
> }
>
> }, {
>
> text: \'Mark Absent\',
>
> icon: \'eye-off-outline\',
>
> handler: () =\> {
>
> student.status = \'present\';
>
> }
>
> }, {
>
> text: \'Delete\',
>
> icon: \'trash\',
>
> role: \'destructive\',
>
> handler: () =\> {
>
> this.deleteStudent(student);
>
> }
>
> }, {
>
> text: \'Cancel\',
>
> icon: \'close\',
>
> role: \'cancel\',
>
> handler: () =\> {
>
> console.log(\'Cancel clicked\');
>
> }
>
> }\]
>
> });
>
> await actionSheet.present();
>
> }

Now create a button to launch the action sheet. Open the roster page
markup and add an ion-buttons tag immediately after the two existing
icons, and right before the ion-item closing tag. Give it a slot
attribute set to end, meaning that it will appear at the end of the
item. Next, add two ion-button tags, as children of the ion-buttons tag.
Inside of each button, add an ion-icon with a slot attribute set to
icon-only. This will suppress space in the button for a text label.
Specify the name of the first as ellipsis-horizontal-outline and set the
second one to chevron-forward-outline. These names map to the name of
the icons from <https://ionicons.com>.

Add a click handler to the button with the ellipsis. When clicked, you
want to call the presentActionSheet function, passing the current
student from the array.

Leave the button with the chevron alone for now. You will finish that
one later.

When you are finished, your ion-buttons component should look something
like this.

> \<ion-buttons slot=\"end\"\>
>
> \<ion-button (click)=\"presentActionSheet(student)\"\>
>
> \<ion-icon slot=\"icon-only\"
>
> name=\"ellipsis-horizontal-outline\"\>
>
> \</ion-icon\>
>
> \</ion-button\>
>
> \<ion-button\>
>
> \<ion-icon slot=\"icon-only\"
>
> name=\"chevron-forward-outline\"\>\</ion-icon\>
>
> \</ion-button\>
>
> \</ion-buttons\>

Save the file and have a look at the results. Click the buttons and see
that they look and behave as you would expect. The forward caret will
not do anything, but the ellipsis icon should display a completely
functional action sheet.

You should be able to mark students present or absent, and see the icon
change accordingly. Likewise, you can also delete a student.

## Connect Sliding Delete Button

While you are here, you can wire up the Delete button in the
ion-item-option component. Simply add a click handler and call
deleteStudent.

> \<ion-item-option (click)=\"deleteStudent(student)\"\>
>
> color=\"danger\" Delete\</ion-item-option\>

## ion-buttons and icons

You may be wondering, what is an ion-buttons tag, and why can you not
simply drop a button where you want it? While buttons can generally be
placed anywhere you want them, when used inside an ion-item or
ion-toolbar component, you need to group them together inside an
ion-buttons tag, specifying the slot as start or end, depending on where
you want the buttons to display. As with everything else in Ionic, start
typically places the buttons on the left side of its parent component,
and end places them on the right. This order is reversed for locales
that traditionally read Right-to-Left.

The ion-button component itself acts as you expect and can be customized
in a variety of ways. Buttons can be text-only, icon-only, or a
combination of the two. Buttons can be rendered large or small, in
multiple widths, and in a variety of colors. When adding an icon to a
button, specify the icon's slot as start or end, depending on whether
you want the icon to appear before or after the button's text. To create
a button without any text, specify the slot as icon-only and do not
include any text.

As stated above, all the Ionic icons can be found at
<https://ionicons.com>.

