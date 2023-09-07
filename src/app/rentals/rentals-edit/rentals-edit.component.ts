import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { IRental, Rental } from 'src/app/models/rental';
import { APIAsSource } from 'src/main';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rentals-edit',
  templateUrl: './rentals-edit.component.html',
  styleUrls: ['./rentals-edit.component.css']
})
export class RentalsEditComponent {

  rentalId : string | null
  editedRental : Rental | IRental | undefined | void
  APIAsSource : boolean

  constructor(private router:Router, private route: ActivatedRoute, private rentalService : RentalsService, private apiService : ApiService){ }

  async ngOnInit(): Promise<void> {
    this.APIAsSource = APIAsSource
    this.rentalId = this.route.snapshot.paramMap.get('id')
    
    if(this.rentalId == null) {
      this.router.navigateByUrl('/404') 
      return
    }

    if(this.APIAsSource){
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
    }else{
      this.editedRental = this.rentalService.getRentalById(this.rentalId)
      if(this.editedRental == undefined) {
        this.router.navigateByUrl('/404') 
        return
      }
    }
    // this.activeRental = this.APIAsSource ? await this.apiService.getRental(this.rentalId) : this.rentalService.getRentalById(this.rentalId)
  }
}
