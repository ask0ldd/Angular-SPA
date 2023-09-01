import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../../mockdatas/mock-rentals-list';
import { Rental } from '../../models/rental';
import { Router } from '@angular/router';
import { RentalsService } from '../rentals.service';

@Component({
  selector: 'app-rentals-gallery',
  templateUrl: './rentals-gallery.component.html',
  styleUrls: ['./rentals-gallery.component.css'],
  // providers : possibility to pass a service, but new instance of the service that won't be share by other components
})
export class RentalsGalleryComponent implements OnInit {

  title = 'angularprj';

  rentalsList : Array<Rental>
  selectedRental : Rental | undefined
  likedRentals : Array<string> = []

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

  inputedRental(value : string) : void{
    if(isNaN(parseInt(value)) === false) {
      this.selectedRental = rentalsList[parseInt(value)]
    }else{
      this.selectedRental = undefined
    }
  }
  */

  goToRentalPage(id : string) : void { 
    // this.router.navigateByUrl('/rental/'+id) // programmatic nav
  }

  onGalleryFilterChange(activeOption : string) : void {
    const [optionType , optionValue] = activeOption.split(':')
    switch(optionType){
      case 'any':
        this.rentalsList = this.rentalService.getAllRentals()
      break;
      case 'location':
        optionValue === 'Paris' ? this.rentalsList = this.rentalService.getRentalsByLocation('Paris') : this.rentalsList = this.rentalService.getRentalsByLocation('Outside Paris')
      break;
      case 'rating':
        optionValue === '4' ? this.rentalsList = this.rentalService.getRentalsByRating(4) : this.rentalsList = this.rentalService.getRentalsByRating(5)
      break;
      case 'tags':
        optionValue === 'Appartement' ? this.rentalsList = this.rentalService.getRentalsByType('appartement') : this.rentalsList = this.rentalService.getRentalsByType('studio')
      break;
    }
  }

  switchRentalLikeStatus(e: MouseEvent, rentalId : string) : any {
    e.preventDefault()
    e.stopPropagation()
    if(this.likedRentals.includes(rentalId) === false || this.likedRentals === undefined) return this.likedRentals.push(rentalId)
    const indexOfRentalToUnlike = this.likedRentals.indexOf(rentalId)
    this.likedRentals.splice(indexOfRentalToUnlike, 1)
  }

  isRentalLiked(rentalId : string) : string {
    return this.likedRentals === undefined || this.likedRentals.includes(rentalId) === false ? "assets/favoutline.svg" : "assets/favfull.svg"
  }
}

