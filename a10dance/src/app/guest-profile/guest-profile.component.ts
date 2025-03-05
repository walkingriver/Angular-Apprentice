import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface GuestWithReservation {
  reservations: Reservation[];
  id: string;
  guestId: string;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  age: number;
  guestIds: GuestIdDetails[];
  phone: Phone;
  address: Address;
  email: string;
}

interface Phone {
  type: string;
  country: string;
  number: string;
}

interface Address {
  type: string;
  country: string;
  postalCode: string;
  address: string;
  apt: string;
  city: string;
  state: string;
}

interface GuestIdDetails {
  type: string;
  number: string;
}

interface Reservation {
  // Add reservation properties as needed
  id: string;
}

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html',
  styleUrls: ['./guest-profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class GuestProfileComponent {
  guest = input.required<GuestWithReservation>();
  
  titles = signal([
    'Mr.',
    'Mrs.',
    'Ms.',
    'Dr.',
    'Prof.',
  ]);
  states = signal(['CA', 'NY', 'TX', 'FL', 'IL']); // Add more as needed
}
