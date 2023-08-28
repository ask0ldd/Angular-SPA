import { Component, OnInit } from '@angular/core';
import { rentalsList } from '../mockdatas/mock-rentals-list';
import { Rental } from '../models/rental';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.rentalId = this.route.snapshot.paramMap.get('id') // error if non existing id or invalid id
    this.activeRental = rentalsList.find(rental => rental.id === this.rentalId) // || {...rentalsList[0]}
    if(this.activeRental == undefined) return
    this.rentalOwner = {firstname : this.activeRental.host.name.split('0')[0], lastname : this.activeRental.host.name.split('0')[1]}
    this.activeRentalRating = parseInt(this.activeRental.rating)
  }

  nextImg() {
    if(this.activeRental == undefined) return
    if(this.activeImg + 1 >= this.activeRental.pictures.length) return
    this.activeImg += 1
  }

  prevImg() {
    if(this.activeRental == undefined) return
    if(this.activeImg <= 0) return
    this.activeImg -= 1 
  }
  
}
