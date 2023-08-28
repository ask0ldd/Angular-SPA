import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';
import { rentalsList } from '../mockdatas/mock-rentals-list';

// allows to inject this service in any component constructor
// pipes / directives & components extends Injectable
@Injectable({ 
  providedIn: 'root'
})
export class RentalsService {

  rentalsList = [...rentalsList]

  constructor() { }

  getAllRentals() : Array<Rental>{
    return this.rentalsList
  }

  getRentalById(rentalId : string) : Rental | undefined {
    return this.rentalsList[0]
  }

  getRentalHost(rentalId : string){

  }

  getRentalsByRating(minRating : number){

  }

  getRentalsByType(type : 'studio' | 'appartement'){

  }

  getRentalsByLocation(location : 'paris' | 'outofparis'){

  }
}
