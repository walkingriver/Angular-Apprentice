# User Confirmation and Notification

The way the code is currently written, deleting a student from the
roster might be done accidentally if the user clicks or taps on the
wrong button in the action sheet. There is no warning or confirmation
requested. Likewise, when a student is deleted, there is no indication
that the action occurred (other than the name disappearing from the
list). You will address both of these shortcomings in this chapter.

## Delete Confirmation

It is inconsiderate for an app to take a destructive action without at
least warning the user. It is better to ask for confirmation, and that
is what you will do here. In the previous chapter, both of the Delete
buttons simply call the deleteStudent function. Instead, it would be
better to get a confirmation first. You can get that confirmation using
an ion-alert.

## ion-alert

An ion-alert is a modal UI component that provides a simple warning to
the user that something important is about to happen, and optionally
provide a way to cancel it.

Below is what I have in mind to implement the confirmation. As with all
Ionic components, it renders with the appropriate look and feel on both
Android and iPhone.

![A screenshot of a cell phone Description automatically
generated](media/image14.png){width="4.5in" height="2.38in"}

ion-alert on Android

![A screenshot of a cell phone Description automatically
generated](media/image15.png){width="4.5in" height="2.31in"}

ion-alert on iPhone

Implementing an ion-alert on the Roster page will closely resemble the
work done on the ion-action-sheet, and with good reason. Ionic has tried
to keep the development experience consistent. Much of the following
code should feel familiar.

Inside the Roster page's component code, you need to inject Ionic's
AlertController into the constructor. Make sure it gets imported at the
top of the file.

> constructor(
>
> private actionSheetController: ActionSheetController,
>
> private alertController: AlertController,
>
> private studentService: StudentsService
>
> ) { }

Next, create a new function called presentDeleteAlert. In the markup
where you are currently calling deleteStudent, change that to call
presentDeleteAlert.

> async presentDeleteAlert(student: Student) {
>
> const alert = await this.alertController.create(
>
> {
>
> header: \'Delete this student?\',
>
> subHeader:
>
> \`\${student.firstName} \${student.lastName}\`,
>
> message: \'This operation cannot be undone.\',
>
> buttons: \[
>
> {
>
> text: \'Delete\',
>
> handler: () =\> this.deleteStudent(student)
>
> },
>
> {
>
> text: \'Never mind\',
>
> role: \'cancel\'
>
> }
>
> \]
>
> }
>
> );
>
> await alert.present();
>
> }

There are three attributes that control the text inside an ion-alert.

The header attribute is a string that appears at the top of the alert.
Use something like "Delete this student?" The subHeader attribute
appears just inside the alert body. Set this attribute to a
concatenation of the student's first and last names, so the user knows
for sure exactly which student is about to be deleted. The message
attribute is the main body of the alert. Use a string such as, "This
operation cannot be undone."

Finally, the alert needs an array of buttons. You define these buttons
exactly the same way as you did for the action sheet.

The first button is the Delete button. It needs a handler that will
delete a student, so provide an arrow function that simply calls the
presentDeleteAlert function.

The second button should be a Cancel button, with the role of "cancel."
It does not need a handler.

Save and check your work. If all went well, attempting to delete a
student should no longer automatically work. Instead, you should now see
the alert asking for confirmation. Clicking the button with the role set
to "cancel" should dismiss the alert with no action taken. Only if you
select the Delete button will the student disappear.

Next, you will create a small acknowledgement to the user that the
student really was deleted.

## Toast Notifications

Many times, an application needs to provide a notification to the user
that something has happened, but it is not critical enough to interrupt
the flow of the application completely. Toast notifications fill that
role perfectly.

A toast is a small, unobtrusive pop-up informational banner. By
convention, it should impart a short message that will appear for a
brief amount of time before automatically disappearing. Some toast
notifications also contain a way for the user to dismiss it early.

Deciding whether or not to use a toast notification is simple. Does the
message require the user to take action? And is it important if the user
misses it? If the answer to both questions is "no," then a toast
notification is perfect.

## ion-toast

![A screenshot of a cell phone Description automatically
generated](media/image16.png){width="4.5in" height="2.94in"}The Ionic
implementation of a toast notification is the ion-toast component. It is
probably the most basic of all of Ionic's UI components. You can build
one with a minimal amount of effort. The most basic form of the
component consists of a message and a duration.

An ion-toast can be vertically positioned at the top, middle, or bottom
of the screen. It is always centered horizontally. It can be colored
with the "color" attribute, providing any of the Ionic color constants.
You can add buttons and icons.

You will not be doing any of that. If you want to customize your
ion-toast after you finish the chapter, feel free.

## Implementing the ion-toast

In the roster page's component, add Ionic's ToastController to the
constructor.

> constructor(
>
> private actionSheetController: ActionSheetController,
>
> private alertController: AlertController,
>
> private studentService: StudentsService,
>
> private toastController: ToastController) { }

Next, modify the deleteStudent function to create and immediately
present a toast notification. My version now looks like this.

> async deleteStudent(student: Student) {
>
> this.students = this.students
>
> .filter(x =\> x.id !== student.id);
>
> const alert = await this.toastController.create(
>
> {
>
> message:
>
> \`\${student.firstName} \${student.lastName} deleted.\`,
>
> position: \'top\',
>
> duration: 3000
>
> });
>
> await alert.present();
>
> }

Its message attribute should contain a short statement showing that the
student has been deleted. Be as detailed as you want but remember that
shorter is usually better.

The default toast position is vertically centered on the screen. I
decided to move it to the top but will leave the final decision to you.
You can choose from top, middle, or bottom.

The duration attribute controls how long the ion-toast will wait before
it automatically dismisses itself. The duration is an integer in
milliseconds. Be careful not to specify a duration that is too short,
and definitely do not pass a string. If you omit the duration attribute,
the toast will remain on the screen indefinitely, requiring user
intervention to dismiss it.

You can provide a buttons array to an ion-toast, just as with the
ion-action-sheet and ion-alert. If you feel so inclined, go ahead and
add one.

Save the file and let the browser refresh.

Now when you delete a student, in addition to the student's name
disappearing from the roster, you should also see the confirmation
toast.

If you want some ideas on how to improve this experience, I provide some
in the Challenges section later in the book.

