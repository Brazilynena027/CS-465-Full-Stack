import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TripListingComponent } from './trip-listing/trip-listing.component';
import { RouterOutlet } from '@angular/router';
import { TripCardComponent } from './trip-card/trip-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Traveler Getaways Admin!';
}