import { Component, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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

  videoLoaded() {
    this.videoElement = document.querySelector('video') as HTMLVideoElement;
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
