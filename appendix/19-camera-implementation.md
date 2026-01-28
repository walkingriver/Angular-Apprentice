# Chapter 19: Implementing Student Photos

One of the key features of our attendance app is the ability to take and display student photos. This helps teachers quickly identify students and adds a personal touch to the interface. In this chapter, we'll implement a reusable camera component using the WebRTC API.

## The Challenge

We need to:
1. Create a reusable webcam component
2. Capture and display student photos
3. Allow retaking photos
4. Integrate the camera with our student details form
5. Handle the camera lifecycle properly

## Implementation

Let's create our `WebcamComponent` that handles camera interaction:

```typescript
@Component({
  selector: 'app-webcam',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="webcam-container">
      @if (!photo() || isRetaking()) {
        <video #video
               autoplay 
               playsinline
               [attr.width]="width()"
               [attr.height]="height()"
               (play)="videoLoaded()">
        </video>
        <button mat-raised-button color="accent" (click)="takePhoto()">
          Take Photo
        </button>
      } @else {
        <img [src]="photo()" 
             [width]="width()" 
             [height]="height()" 
             alt="Captured photo">
        <div class="button-group">
          <button mat-raised-button color="warn" (click)="retakePhoto()">
            Retake
          </button>
          <button mat-raised-button color="primary" (click)="acceptPhoto()">
            Accept
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .webcam-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      
      video, img {
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .button-group {
        display: flex;
        gap: 1rem;
      }
    }
  `]
})
export class WebcamComponent {
  width = signal(400);
  height = signal(300);
  photo = signal<string | null>(null);
  isRetaking = signal(false);
  photoTaken = output<string>();

  private videoElement?: HTMLVideoElement;

  ngOnInit() {
    this.startCamera();
  }

  ngOnDestroy() {
    this.stopCamera();
  }

  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: this.width(), height: this.height() }
      });

      const video = document.querySelector('video');
      if (video) {
        video.srcObject = stream;
      }
    } catch (err) {
      console.error('Camera access denied:', err);
    }
  }

  stopCamera() {
    if (this.videoElement?.srcObject) {
      const stream = this.videoElement.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  }

  takePhoto() {
    if (!this.videoElement) return;

    const canvas = document.createElement('canvas');
    canvas.width = this.width();
    canvas.height = this.height();

    const context = canvas.getContext('2d');
    if (!context) return;

    context.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
    this.photo.set(canvas.toDataURL('image/jpeg'));
    this.isRetaking.set(false);
    this.stopCamera();
  }

  retakePhoto() {
    this.isRetaking.set(true);
    this.startCamera();
  }

  acceptPhoto() {
    const currentPhoto = this.photo();
    if (currentPhoto) {
      this.photoTaken.emit(currentPhoto);
    }
  }
}
```

### Key Features

1. **State Management with Signals**
   - We use signals for reactive state management
   - `width` and `height` control the camera dimensions
   - `photo` stores the captured image data URL
   - `isRetaking` tracks when we're taking a new photo
   - `photoTaken` emits the final photo to the parent

2. **Camera Lifecycle**
   - We start the camera when the component initializes
   - We properly clean up when the component is destroyed
   - We handle the camera stream lifecycle during retakes

3. **User Interface**
   - We show the video feed when taking/retaking photos
   - We display the captured photo with accept/retake options
   - We use Material Design buttons for actions
   - We style the container for a polished look

## Integration with Student Details

Here's how we use the `WebcamComponent` in our student details form:

```typescript
@Component({
  selector: 'app-student-details',
  template: `
    <div class="form-row photo-section">
      @if (student.photoUrl) {
        <img [src]="student.photoUrl" alt="Student photo" class="student-photo">
      }
      
      @if (showCamera) {
        <app-webcam (photoTaken)="handlePhoto($event)"></app-webcam>
      }
      
      <button
        mat-raised-button
        color="primary"
        type="button"
        (click)="toggleCamera()"
      >
        {{ showCamera ? 'Cancel' : (student.photoUrl ? 'Change Photo' : 'Add Photo') }}
      </button>
    </div>
  `
})
export class StudentDetailsComponent {
  showCamera = false;

  toggleCamera() {
    this.showCamera = !this.showCamera;
  }

  handlePhoto(photoData: string) {
    this.student.photoUrl = photoData;
    this.showCamera = false;
  }
}
```

## Best Practices

Our implementation follows these key principles:

1. **Component Design**
   - Reusable, standalone component
   - Clear separation of concerns
   - Proper cleanup of resources

2. **User Experience**
   - Immediate visual feedback
   - Easy photo retaking
   - Intuitive button labels
   - Polished visual design

3. **Technical Implementation**
   - Modern Angular features (signals, standalone components)
   - Proper resource management
   - Error handling for camera access
   - Responsive design

## Exercise

Try enhancing the camera implementation:

1. Add error handling UI for camera access denial
2. Implement image compression before storage
3. Add a loading state while the camera initializes

## Summary

We've created a robust camera implementation that:
- Provides a great user experience
- Uses modern Angular features
- Properly manages system resources
- Integrates seamlessly with our student details form
