import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Series {
  id: number;
  title: string;
  year: number;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredSeries: Series[] = [
    { id: 1, title: 'The Good Place', year: 2016, rating: 8.2, image: 'assets/images/good-place.jpg' },
    { id: 2, title: 'Breaking Bad', year: 2008, rating: 9.5, image: 'assets/images/breaking-bad.jpg' },
    { id: 3, title: 'The Americans', year: 2013, rating: 8.4, image: 'assets/images/americans.jpg' },
    { id: 4, title: 'The Leftovers', year: 2014, rating: 8.3, image: 'assets/images/leftovers.jpg' },
    { id: 5, title: 'Six Feet Under', year: 2001, rating: 8.7, image: 'assets/images/six-feet-under.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
