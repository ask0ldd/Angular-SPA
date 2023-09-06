import { Component, OnInit } from '@angular/core';
import { rentalsList } from './mockdatas/mock-rentals-list';
import { Rental } from './models/rental';

@Component({
  selector: 'app-root', // tag name of this custom component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularprj';

  rentalsList = rentalsList
  selectedRental : Rental | undefined

  // constructor method is not defined for most angular component

  ngOnInit(): void {
  }

}

// https://angular.io/guide/lifecycle-hooks