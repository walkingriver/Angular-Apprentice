# Chapter 20: Displaying Student Photos in the Roster

Now that we can capture student photos, let's enhance our roster page to display them. We'll add avatars for each student and combine them with attendance status indicators for a more visual and informative interface.

## The Challenge

Our roster page needs to:
1. Display student photos where available
2. Show a placeholder for students without photos
3. Indicate attendance status visually
4. Maintain a clean, professional look
5. Work well on mobile and desktop

## Implementation

Let's see how we implement the avatar display in our roster component:

### 1. Template Structure
```html
<table mat-table [dataSource]="students()" class="mat-elevation-z1">
  <!-- Avatar Column -->
  <ng-container matColumnDef="avatar">
    <th mat-header-cell *matHeaderCellDef></th>
    <td mat-cell *matCellDef="let student">
      <div class="avatar-container">
        @if (student.photoUrl) {
          <img [src]="student.photoUrl" 
               [alt]="student.firstName + ' ' + student.lastName"
               class="student-avatar" />
        } @else {
          <mat-icon class="student-avatar-placeholder">account_circle</mat-icon>
        }
        @if (student.status) {
          <mat-icon [class]="'status-indicator ' + student.status">
            {{ student.status === 'present' ? 'check_circle' : 'cancel' }}
          </mat-icon>
        }
      </div>
    </td>
  </ng-container>

  <!-- Other columns... -->
</table>
```

### 2. Styling
We'll add these styles to make our avatars look polished:

```scss
.avatar-container {
  position: relative;
  width: 40px;
  height: 40px;
}

.student-avatar,
.student-avatar-placeholder {
  width: 40px;
  height: 40px;
}

.student-avatar {
  border-radius: 50%;
  object-fit: cover;
}

.student-avatar-placeholder {
  font-size: 40px;
  color: #bdbdbd;
}

.status-indicator {
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  border-radius: 50%;
  background: white;
  
  &.present {
    color: #4caf50;  // Material Green 500
  }
  
  &.absent {
    color: #f44336;  // Material Red 500
  }
}

.mat-column-avatar {
  width: 60px;
  padding-right: 8px !important;
}
```

### 3. Component Logic
Our roster component handles the display and updates:

```typescript
@Component({
  selector: 'app-roster',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatCell,
    MatCellDef,
    MatRow,
    MatRowDef,
    MatColumnDef,
    MatIcon,
    MatIconButton,
    RouterLink
  ],
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent {
  private studentsService = inject(StudentsService);
  students = signal(this.studentsService.getAll());
  displayedColumns = ['avatar', 'name', 'actions'];

  // Status update methods
  markPresent(student: Student) {
    student.status = 'present';
    this.snackBar.open(
      `Marked ${student.firstName} as present`,
      'Dismiss',
      { duration: 3000 }
    );
  }

  markAbsent(student: Student) {
    student.status = 'absent';
    this.snackBar.open(
      `Marked ${student.firstName} as absent`,
      'Dismiss',
      { duration: 3000 }
    );
  }
}
```

## Key Design Decisions

1. **Avatar Display**
   - Fixed size of 40x40 pixels for consistency
   - Circular shape using `border-radius: 50%`
   - Material icon placeholder for missing photos
   - `object-fit: cover` for proper photo scaling

2. **Status Indicators**
   - Small icon overlay at bottom-right
   - Color-coded for quick recognition (green/red)
   - White background circle for visibility
   - Material icons for present/absent states

3. **Layout Integration**
   - Fixed width avatar column (60px)
   - Extra padding for status indicator
   - Consistent spacing in the table
   - Mobile-optimized layout

4. **Responsive Design**
   - Adjusted padding on mobile devices
   - Maintained avatar visibility at all sizes
   - Adapted table layout for small screens
   - Preserved status indicator clarity

## Best Practices

1. **Performance**
   - Use appropriate image sizes
   - Leverage Material icons for placeholders
   - Minimize layout shifts
   - Optimize for mobile devices

2. **User Experience**
   - Clear visual feedback for status
   - Intuitive icon choices
   - Consistent sizing and spacing
   - Smooth transitions

3. **Maintainability**
   - Organized SCSS structure
   - Clear class naming
   - Reusable components
   - Mobile-first approach

## Exercise

Try enhancing the avatar implementation:

1. Add a loading state for images
2. Implement image error handling
3. Add hover effects for the status indicator
4. Create animated status transitions

## Summary

Our roster avatar implementation:
- Provides clear visual identification
- Shows attendance status effectively
- Works well on all devices
- Maintains a professional appearance
- Integrates seamlessly with Material Design
