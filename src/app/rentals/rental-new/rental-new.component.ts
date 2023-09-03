import { Component } from '@angular/core';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.css']
})
export class RentalNewComponent {

  editedRental : Rental

  ngOnInit(): void {
    this.editedRental = {
      id : "",
      title : "",
      cover : "",
      pictures : [],
      description : "",
      host : {name : "", picture : ""},
      rating : "",
      location : "",
      equipments : [],
      tags : []
    }
  }
}
