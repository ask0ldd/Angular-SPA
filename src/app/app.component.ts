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

  // constructor method is not defined for most angular component

  ngOnInit(): void {
    console.log(this.title, "aaa")
  }

  clickRental(rental : Rental){
    console.log(`The rental with the following id has been clicked : ${rental.id}`)
  }
}

// https://angular.io/guide/lifecycle-hooks