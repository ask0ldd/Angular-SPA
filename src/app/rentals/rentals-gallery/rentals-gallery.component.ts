import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../../mockdatas/mock-rentals-list';
import { IRental, Rental } from '../../models/rental';
import { Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { ApiService } from '../api.service'
import { APIAsSource } from 'src/main';

@Component({
  selector: 'app-rentals-gallery',
  templateUrl: './rentals-gallery.component.html',
  styleUrls: ['./rentals-gallery.component.css'],
  // providers : possibility to pass a service, but new instance of the service that won't be share by other components
})
export class RentalsGalleryComponent implements OnInit {

  APIAsSource : boolean = APIAsSource

  selectedRental : Rental | undefined
  likedRentals : Array<string | number> = []

  rentals : Array<Rental | IRental> | void

  // services are injected as parameters of the component constructor
  constructor(private router:Router, private rentalService : RentalsService, private apiService : ApiService){}

  ngOnInit(): void {
    if(!this.APIAsSource){
      this.rentals = this.rentalService.getAllRentals()
      return 
    }
    this.apiService.getAllRentals().subscribe(datas => this.rentals = datas)
    // this.rentals = this.APIAsSource ? await this.apiService.getAllRentals() : this.rentalService.getAllRentals()
  }

  goToRentalPage(id : string) : void { 
    // this.router.navigateByUrl('/rental/'+id) // programmatic nav
  }

  onGalleryFilterChange(activeOption : string) : void {
    const [optionType , optionValue] = activeOption.split(':')
    switch(optionType){
      case 'any':
        this.rentals = this.rentalService.getAllRentals()
      break;
      case 'location':
        optionValue === 'Paris' ? this.rentals = this.rentalService.getRentalsByLocation('Paris') : this.rentals = this.rentalService.getRentalsByLocation('Outside Paris')
      break;
      case 'rating':
        optionValue === '4' ? this.rentals = this.rentalService.getRentalsByRating(4) : this.rentals = this.rentalService.getRentalsByRating(5)
      break;
      case 'tags':
        optionValue === 'Appartement' ? this.rentals = this.rentalService.getRentalsByType('appartement') : this.rentals = this.rentalService.getRentalsByType('studio')
      break;
    }
  }

  switchRentalLikeStatus(e: MouseEvent, rentalId : string | number) : any {
    e.preventDefault()
    e.stopPropagation()
    if(this.likedRentals.includes(rentalId) === false || this.likedRentals === undefined) return this.likedRentals.push(rentalId)
    const indexOfRentalToUnlike = this.likedRentals.indexOf(rentalId)
    this.likedRentals.splice(indexOfRentalToUnlike, 1)
  }

  isRentalLiked(rentalId : string | number) : string {
    return this.likedRentals === undefined || this.likedRentals.includes(rentalId) === false ? "assets/favoutline.svg" : "assets/favfull.svg"
  }
}

 /* 
 kept as a learning reference
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