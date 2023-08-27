import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../mockdatas/mock-rentals-list';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit {

  title = 'angularprj';

  activeRental = {...rentalsList[0]}

  // constructor method is not defined for most angular component

  ngOnInit(): void {
    console.log(this.title, "aaa")
  }
  
}
