import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { IRental, Rental } from 'src/app/models/rental';
import { APIAsSource, serverBaseUrl } from 'src/main';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rentals-edit',
  templateUrl: './rentals-edit.component.html',
  styleUrls: ['./rentals-edit.component.css']
})
export class RentalsEditComponent implements OnInit {

  rentalId : string | null
  editedRental : Rental | IRental | undefined | void
  
  APIAsSource : boolean = APIAsSource
  serverBaseUrl : string = serverBaseUrl

  constructor(private router:Router, private route: ActivatedRoute, private rentalService : RentalsService, private apiService : ApiService){ }

  ngOnInit(): void {
    this.rentalId = this.route.snapshot.paramMap.get('id')
    // if the url is missing the rental id
    if(this.rentalId == null) {
      this.router.navigateByUrl('/404') 
      return
    }

    // if the mockAPI has been chosen as a source
    if(!this.APIAsSource){
      // retrieve the target rental datas through the mockAPI
      this.editedRental = this.rentalService.getRentalById(this.rentalId)
      if(this.editedRental == undefined) {
        this.router.navigateByUrl('/404') 
      }
      return
    }

    // if not : retrieve the target rental datas through the API
    this.apiService.getRental(this.rentalId).subscribe({
      next : (datas : IRental) => {
      this.editedRental = datas
      },
      error : (error: any) => {
        console.error(error)
        if(this.editedRental == undefined) {
          this.router.navigateByUrl('/404') 
          return
        }
      },
    })

  }

}
