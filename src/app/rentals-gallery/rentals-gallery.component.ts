import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../mockdatas/mock-rentals-list';
import { Rental } from '../models/rental';

@Component({
  selector: 'app-rentals-gallery',
  templateUrl: './rentals-gallery.component.html',
  styleUrls: ['./rentals-gallery.component.css']
})
export class RentalsGalleryComponent implements OnInit {

  title = 'angularprj';

  rentalsList = [...rentalsList]
  selectedRental : Rental | undefined

  // constructor method is not defined for most angular component

  ngOnInit(): void {
    console.log(this.title, "aaa")
  }

  clickRental(rental : Rental){
    console.log(`The rental with the following id has been clicked : ${rental.id}`)
  }

  changeRental(event : MouseEvent){
    const inputValue = (event.target as HTMLInputElement).value// + : convert to a number. example : +(event.target as HTMLInputElement).value
    console.log(inputValue)
  }

  enterRental(value : string){
    if(isNaN(parseInt(value)) === false) {
      this.selectedRental = rentalsList[parseInt(value)]
    }else{
      this.selectedRental = undefined
    }
  }
}