import { Component, OnInit } from '@angular/core';
import { IRental, Rental } from '../../models/rental';
import { Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { ApiService } from '../api.service'
import { APIAsSource, serverBaseUrl } from 'src/main';
import { CookiesService } from 'src/app/auth/cookies.service';

@Component({
  selector: 'app-rentals-gallery',
  templateUrl: './rentals-gallery.component.html',
  styleUrls: ['./rentals-gallery.component.css'],
  // providers : possibility to pass a service, but new instance of the service that won't be share by other components
})
export class RentalsGalleryComponent implements OnInit{

  APIAsSource : boolean = APIAsSource
  serverBaseUrl : string = serverBaseUrl

  selectedRental : Rental | undefined
  likedRentals : Array<string | number> = []

  rentals : Array<Rental | IRental> | void

  isLogged : boolean = false
  activeUserId : string | undefined

  // services are injected as parameters of the component constructor
  constructor(private router:Router, private rentalService : RentalsService, private apiService : ApiService, private cookieManager : CookiesService){}

  ngOnInit(): void {
    // get log status / active user id
    this.isLogged = this.cookieManager.isTokenAlive()
    if(this.isLogged) this.activeUserId = this.cookieManager.getUserId()

    if(!this.APIAsSource){
      this.rentals = this.rentalService.getAllRentals()
      return 
    }

    if(this.activeUserId != null) this.apiService.getLikesList(this.activeUserId).subscribe(datas =>  this.likedRentals = datas)
    this.apiService.getAllRentals().subscribe(datas => this.rentals = datas)
    // this.rentals = this.APIAsSource ? await this.apiService.getAllRentals() : this.rentalService.getAllRentals()
  }

  ngDoCheck() {
    if(this.cookieManager.isTokenAlive() != this.isLogged) this.isLogged = this.cookieManager.isTokenAlive()
  }

  goToRentalPage(id : string) : void { 
    // this.router.navigateByUrl('/rental/'+id) // programmatic nav
  }

  onGalleryFilterChange(activeOption : string) : void {
    const [optionType , optionValue] = activeOption.split(':')

    if(this.APIAsSource){
      if(optionType === 'any'){
        this.apiService.getAllRentals().subscribe(datas => this.rentals = datas)
        return
      }
      this.apiService.getFilteredRentals({column : optionType, value : optionValue}).subscribe(datas => this.rentals = datas)
      return
    }
    switch(optionType){
      case 'any':
        this.rentals = this.rentalService.getAllRentals()
      break;
      case 'location':
        this.rentals = optionValue === 'Paris' ? this.rentalService.getRentalsByLocation('Paris') : this.rentalService.getRentalsByLocation('Outside Paris')
      break;
      case 'rating':
        this.rentals = optionValue === '4' ? this.rentalService.getRentalsByRating(4) : this.rentalService.getRentalsByRating(5)
      break;
      case 'tags':
        this.rentals = optionValue === 'Appartement' ? this.rentalService.getRentalsByType('appartement') : this.rentalService.getRentalsByType('studio')
      break;
    }
  }

  switchRentalLikeStatus(e: MouseEvent, rentalId : string | number) : any {
    e.preventDefault()
    e.stopPropagation()
    if(!this.isLogged) return
    const userId = this.cookieManager.getUserId()
    if(this.APIAsSource && userId!= null) this.apiService.setUnsetLike(userId, rentalId.toString()).subscribe(datas => console.log(datas))
    if(this.likedRentals.includes(rentalId) === false || this.likedRentals === undefined || this.likedRentals.length === 0) return this.likedRentals.push(rentalId) // !!! must set to local storage
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