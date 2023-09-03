import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-rentals-edit',
  templateUrl: './rentals-edit.component.html',
  styleUrls: ['./rentals-edit.component.css']
})
export class RentalsEditComponent {

  rentalId : string | null
  editedRental : Rental | undefined

  constructor(private router:Router, private route: ActivatedRoute, private rentalService : RentalsService){ }

  ngOnInit(): void {
    this.rentalId = this.route.snapshot.paramMap.get('id')
    // console.log(this.route.snapshot.url)
    if(this.rentalId == null) {
      this.router.navigateByUrl('/404') 
      return
    }
    this.editedRental = this.rentalService.getRentalById(this.rentalId)
    console.table(this.rentalService.getAllOwners())
  }
}
