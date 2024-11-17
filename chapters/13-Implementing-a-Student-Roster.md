# Implementing a Student Roster

Now you need to put those students you just created into the roster
page. Open src/app/roster/roster.page.ts.

Just before the constructor, create an array of students to hold the
list you will retrieve from the StudentsService:

> //This will hold the list of students
>
> students: Student\[\] = \[\];

Next, you need to inject a reference to the StudentsService into the
page's constructor. Insert a new private parameter studentService, of
type StudentsService.

> constructor(
>
> private studentService: StudentsService) { }

Make sure you get the casing right, or Angular will not be happy with
you. Marking the parameter private automatically exposes the parameter
as a member of the component class. It is a handy shortcut TypeScript
provides.

By default, the RosterPage implements Angular's OnInit interface, which
requires you to implement the OnInit Angular hook you saw in the guided
tour.

The function implementation, called ngOnInit, should currently be empty.
Inside this function, call the getAllStudents function from the
StudentService, and assign its result to the component\'s students
array.

> ngOnInit() {
>
> this.students = this.studentService.getAll();
>
> }

Now open the roster.page.html file in the same folder, so you can create
some markup to render the students.

The header is already done, and its name should be set to Roster, so
there is nothing you need to do there. You could change it to "Class
Roster" or something if you really want.

I am hoping that the ion-header is familiar, as you have seen it on the
home page, and during the guided tour.

Immediately after the ion-header, you need an ion-content. Inside the
ion-content, I will introduce a new component: The ion-list.

## ion-list

An ion-list is another container component, designed to wrap multiple
types of items in a visually consistent manner. ion-lists contain things
called ion-items, which in turn wrap ion-labels, ion-buttons, ion-icons,
form input fields and so forth. You will use all of those and more
during this book.

ion-lists can also be used to implement item sliding, which you have
probably seen before. These are options that appear only when you swipe
a list item left or right, revealing a less often used, or potentially
dangerous option, such as delete.

Inside of the ion-list, you can iterate over the students array with an
\*ngFor directive on the outermost element inside the list. In this
case, it will be an ion-item-sliding component. It will look like this.

> \<ion-item-sliding \*ngFor=\"let student of students\"\>

This will create one ion-item-sliding component (and everything inside
it) for each student in the students array.

ion-item-sliding will provide us with the item swipe, or slide, option.
Inside that will be an ion-item tag. This component will encapsulate the
complete list item.

Inside the ion-item, add an ion-icon and an ion-label as siblings. Set
the icon's slot attribute to "start," meaning that it will appear at the
start of the line. Inside the ion-label, bind some text to the student's
last and first names, separated by a comma.

Next to those, create two more ion-icon tags, which you will
conditionally render based on the student's status of absent or present.
The first one is for present; set it to display the eye icon. The second
is to be displayed when the student is absent, so for that one, use the
eye-off-outline, which is an outline of an eye with a line through it.

The way you render the icons conditionally is to add the \*ngIf
directive to each icon. One will evaluate to true if the student's
status is present. The other will render if the student's status is
absent.

Note that it is entirely possible for the student's status to be set to
neither value, because the status field is optional. In that case,
neither icon will be rendered, which is what I want.

Here is the completed ion-content code with the list.

> \<ion-content\>
>
> \<ion-list\>
>
> \<ion-item-sliding \*ngFor=\"let student of students\"\>
>
> \<ion-item\>
>
> \<ion-icon slot=\"start\" name=\"person-outline\"\>
>
> \</ion-icon\>
>
> \<ion-label\>
>
> {{student.lastName}}, {{student.firstName}}
>
> \</ion-label\>
>
> \<ion-icon \*ngIf=\"student.status===\'present\'\"
>
> slot=\"end\" name=\"eye\"\>\</ion-icon\>
>
> \<ion-icon \*ngIf=\"student.status===\'absent\'\"
>
> slot=\"end\" name=\"eye-off-outline\"\>
>
> \</ion-icon\>
>
> \</ion-item\>
>
> \</ion-item-sliding\>
>
> \</ion-list\>
>
> \</ion-content\>

Save the file now and see how it looks. If all went well, all of our
students are displayed as expected.

![A screenshot of a cell phone Description automatically
generated](media/image10.png){width="4.5in" height="2.35in"}

I want to wrap up this chapter by finishing that sliding item.
Immediately before the ion-itemSliding closing tag, add an
ion-itemOptions slide, with the side attribute set to end. This means
you want the option to appear at the end of the item, meaning when you
slide it toward the beginning of the item.

Inside of that tag, add a single ion-itemOption tag (mind the
singular/plural here. The plural tag is the outer tag). Set this one's
color to danger, which by default is a scary looking orange/red color.
You will deal with the click handler later, so for now, simply set the
tag's value to the word Delete. The complete code should now look like
this.

> \<ion-content\>
>
> \<ion-list\>
>
> \<ion-item-sliding \*ngFor=\"let student of students\"\>
>
> \<ion-item\>
>
> \<ion-icon slot=\"start\" name=\"person-outline\"\>
>
> \</ion-icon\>
>
> \<ion-label\>
>
> {{student.lastName}}, {{student.firstName}}
>
> \</ion-label\>
>
> \<ion-icon \*ngIf=\"student.status===\'present\'\"
>
> slot=\"end\" name=\"eye\"\>\</ion-icon\>
>
> \<ion-icon \*ngIf=\"student.status===\'absent\'\"
>
> slot=\"end\" name=\"eye-off-outline\"\>\</ion-icon\>
>
> \</ion-item\>
>
> \<ion-item-options side=\"end\"\>
>
> \<ion-item-option color=\"danger\"\>Delete
>
> \</ion-item-option\>
>
> \</ion-item-options\>
>
> \</ion-item-sliding\>
>
> \</ion-list\>
>
> \</ion-content\>

Save the file and refresh the page. At this point, the only
interactivity is the slider itself, so click and drag an item towards
the beginning of the item. You should see a Delete button. You can click
it. It behaves visually as you would expect it to, but it will not do
anything...yet.

![A screenshot of a cell phone Description automatically
generated](media/image11.png){width="4.5in" height="2.35in"}

In the next chapter you will wire up some new commands to this page so
that you can manage our roster of students.

