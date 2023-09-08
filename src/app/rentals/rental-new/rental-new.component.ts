import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalsService } from '../rentals.service';
import { APIAsSource, serverBaseUrl } from 'src/main';

@Component({
  selector: 'app-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.css']
})
export class RentalNewComponent implements OnInit {

  APIAsSource : boolean = APIAsSource
  serverBaseUrl : string = serverBaseUrl

  constructor(private rentalService : RentalsService){ }

  editedRental : Rental

  ngOnInit(): void {
    this.editedRental = this.rentalService.newRental()
  }

}
