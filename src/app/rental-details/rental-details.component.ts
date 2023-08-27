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
  activeImg : number = 0
  rentalOwner = {firstname : this.activeRental.host.name.split('0')[0], lastname : this.activeRental.host.name.split('0')[1]}

  // constructor method is not defined for most angular component

  ngOnInit(): void {
    console.log(this.title, "aaa")
  }

  nextImg() {
    if(this.activeImg + 1 >= this.activeRental.pictures.length) return
    this.activeImg += 1
  }

  prevImg() {
    if(this.activeImg <= 0) return
    this.activeImg -= 1 
  }
  
}
