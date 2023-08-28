import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../../mockdatas/mock-rentals-list';
import { Rental } from '../../models/rental';
import { Router } from '@angular/router';
import { RentalsService } from '../rentals.service';

@Component({
  selector: 'app-rentals-gallery',
  templateUrl: './rentals-gallery.component.html',
  styleUrls: ['./rentals-gallery.component.css']
})
export class RentalsGalleryComponent implements OnInit {

  title = 'angularprj';

  rentalsList : Array<Rental>
  selectedRental : Rental | undefined

  // services are injected as parameters of the component constructor
  constructor(private router:Router, private rentalService : RentalsService){}

  ngOnInit(): void {
    this.rentalsList = this.rentalService.getAllRentals()
  }

  /* kept as a learning reference
  clickRental(rental : Rental) : void{
    console.log(`The rental with the following id has been clicked : ${rental.id}`)
  }

  changeRental(event : MouseEvent) : void{
    const inputValue = (event.target as HTMLInputElement).value// + : convert to a number. example : +(event.target as HTMLInputElement).value
    console.log(inputValue)
  }
  */

  inputedRental(value : string) : void{
    if(isNaN(parseInt(value)) === false) {
      this.selectedRental = rentalsList[parseInt(value)]
    }else{
      this.selectedRental = undefined
    }
  }

  goToRentalPage(id : string) : void{ 
    this.router.navigateByUrl('/rental/'+id) // programmatic nav
  }
}