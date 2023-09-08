import { Component } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalsService } from '../rentals.service';
import { APIAsSource } from 'src/main';

@Component({
  selector: 'app-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.css']
})
export class RentalNewComponent {

  APIAsSource : boolean = APIAsSource

  constructor(private rentalService : RentalsService){ }

  editedRental : Rental

  ngOnInit(): void {
    this.editedRental = this.rentalService.newRental()
  }

}
