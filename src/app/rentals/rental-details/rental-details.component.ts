import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../../mockdatas/mock-rentals-list';
import { IRental, Rental } from '../../models/rental';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { APIAsSource } from 'src/main';
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
  APIAsSource : boolean

  constructor(private router:Router, private route: ActivatedRoute, private rentalService : RentalsService, private apiService : ApiService){ }

  async ngOnInit(): Promise<void> {
    this.APIAsSource = APIAsSource

    this.rentalId = this.route.snapshot.paramMap.get('id')
    if(this.rentalId == null) {
      this.router.navigateByUrl('/404') 
      return
    }
    this.activeRental = this.APIAsSource ? await this.apiService.getRental(this.rentalId) : this.rentalService.getRentalById(this.rentalId)
    if(this.activeRental == undefined) {
      this.router.navigateByUrl('/404') 
      return
    }
    // this.rentalOwner = {firstname : this.activeRental.host.name.split(' ')[0], lastname : this.activeRental.host.name.split(' ')[1]}
    this.rentalOwner = {firstname : this.activeRental.host.firstname, lastname : this.activeRental.host.lastname}
    this.activeRentalRating = parseInt(this.activeRental.rating)
  }

  nextImg() : void {
    if(this.activeRental == undefined) return
    if(this.activeImg + 1 >= this.activeRental.pictures.length) return
    this.activeImg += 1
  }

  prevImg() : void {
    if(this.activeRental == undefined) return
    if(this.activeImg <= 0) return
    this.activeImg -= 1 
  }

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
