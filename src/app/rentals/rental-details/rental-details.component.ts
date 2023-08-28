import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../../mockdatas/mock-rentals-list';
import { Rental } from '../../models/rental';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})

export class RentalDetailsComponent implements OnInit {

  title = 'angularprj'
  rentalId : string | null
  activeRental : Rental | undefined
  activeImg : number = 0
  rentalOwner : {firstname : string, lastname : string}
  activeRentalRating : number

  constructor(private router:Router, private route: ActivatedRoute, private rentalService : RentalsService){ }

  ngOnInit(): void {
    this.rentalId = this.route.snapshot.paramMap.get('id')
    if(this.rentalId == undefined) {
      this.router.navigateByUrl('/404') 
      return
    }
    this.activeRental = this.rentalService.getRentalById(this.rentalId)
    if(this.activeRental == undefined) {
      this.router.navigateByUrl('/404') 
      return
    }
    this.rentalOwner = {firstname : this.activeRental.host.name.split('0')[0], lastname : this.activeRental.host.name.split('0')[1]}
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
  
}
