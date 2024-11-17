import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, 
         MatCardTitle, MatCardSubtitle, MatCardImage } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    MatCard, MatCardContent, MatCardHeader,
    MatCardTitle, MatCardSubtitle, MatCardImage,
    MatButton
  ]
})
export class HomeComponent {}
