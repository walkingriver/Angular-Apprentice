import { Component, ElementRef, EventEmitter, Output, ViewChild, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-webcam',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="webcam-container">
      <video #video [hidden]="hasPhoto()" autoplay playsinline></video>
      <canvas #canvas [hidden]="!hasPhoto()"></canvas>
      @if (!hasPhoto()) {
        <button mat-raised-button color="accent" (click)="capture()">
          Take Photo
        </button>
      } @else {
        <div class="button-group">
          <button mat-raised-button color="warn" (click)="retake()">
            Retake
          </button>
          <button mat-raised-button color="primary" (click)="accept()">
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
      
      video, canvas {
        width: 100%;
        max-width: 400px;
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
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>;
  @Output() photoTaken = new EventEmitter<string>();

  hasPhoto = signal(false);
  private stream: MediaStream | null = null;

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        }
      });
      this.videoElement.nativeElement.srcObject = this.stream;
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }

  capture() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) return;

    // Set canvas size to match video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the video frame on the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    this.hasPhoto.set(true);
  }

  retake() {
    this.hasPhoto.set(false);
  }

  accept() {
    const canvas = this.canvasElement.nativeElement;
    const imageData = canvas.toDataURL('image/jpeg');
    this.photoTaken.emit(imageData);
    this.stopCamera();
  }

  ngAfterViewInit() {
    this.startCamera();
  }

  ngOnDestroy() {
    this.stopCamera();
  }
}
