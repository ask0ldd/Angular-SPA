import { Component, OnInit } from '@angular/core';
import { IRental, Rental } from '../../models/rental';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { APIAsSource, serverBaseUrl } from 'src/main';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})

export class RentalDetailsComponent implements OnInit {

  rentalId : string | number | null
  activeRental : Rental | IRental | undefined | void
  activeImg : number = 0
  rentalOwner : {firstname : string, lastname : string}
  activeRentalRating : number
  equipementsCollapsed = false
  descriptionCollapsed = false

  APIAsSource : boolean = APIAsSource
  serverBaseUrl : string = serverBaseUrl

  constructor(private router:Router, private route: ActivatedRoute, private rentalService : RentalsService, private apiService : ApiService){ }

  // retrieve the target rental datas 
  ngOnInit(): void {
    this.rentalId = this.route.snapshot.paramMap.get('id')
    if(this.rentalId == null) {
      this.router.navigateByUrl('/404') 
      return
    }

    if(!this.APIAsSource){
      // retrieve the target rental datas through the mockAPI
      this.activeRental = this.rentalService.getRentalById(this.rentalId)
      if(this.activeRental == undefined) {
        this.router.navigateByUrl('/404') 
        return
      }
      this.rentalOwner = {firstname : this.activeRental.host.firstname, lastname : this.activeRental.host.lastname}
      this.activeRentalRating = +this.activeRental.rating
      return
    }

    // retrieve the target rental datas through the API
    this.apiService.getRental(this.rentalId).subscribe({
      next : (datas : IRental) => {
        this.activeRental = datas
      },
      error : (error: any) => {
        console.error(error)
        if(this.activeRental == undefined) {
          this.router.navigateByUrl('/404') 
          return
        }
      },
      complete : () => {
        if(this.activeRental == undefined) return
        this.rentalOwner = {firstname : this.activeRental.host.firstname, lastname : this.activeRental.host.lastname}
        this.activeRentalRating = +this.activeRental.rating
      }
    })
  }

  // slideshow : next image
  nextImg() : void {
    if(this.activeRental == undefined) return
    if(this.activeImg + 1 >= this.activeRental.pictures.length) return
    this.activeImg += 1
  }

  // slideshow : previous image
  prevImg() : void {
    if(this.activeRental == undefined) return
    if(this.activeImg <= 0) return
    this.activeImg -= 1 
  }

  // collapses : open / close
  switchCollapse(targetCollapse : string){
    switch(targetCollapse){
      case 'equipements':
        this.equipementsCollapsed = !this.equipementsCollapsed
      break;
      case 'description':
        this.descriptionCollapsed = !this.descriptionCollapsed
      break;
    }
  }
  
}
