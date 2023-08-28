import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';
import { rentalsList } from '../mockdatas/mock-rentals-list';

// allows to inject this service in any component constructor
// pipes / directives & components extends Injectable
@Injectable(/*{ 
  providedIn: 'root' // service transmitted to root so it can be accessed anywhere into the app
  // since we only want this service to be accessible by the rentals module, we will pass it as a provider into the module itself
}*/)
export class RentalsService {

  rentalsList = [...rentalsList]

  constructor() { }

  getAllRentals() : Array<Rental>{
    return this.rentalsList
  }

  getRentalById(rentalId : string) : Rental | undefined {
    return this.rentalsList.find(rental => rental.id === rentalId)
  }

  getRentalHost(rentalId : string) : {name:string, picture: string} | undefined {
    return this.rentalsList.find(rental => rental.id === rentalId)?.host
  }

  getRentalsByRating(minRating : number) : Array<Rental> {
    return this.rentalsList.filter(rental => parseInt(rental.rating) >= minRating) 
  }

  getRentalsByType(type : 'studio' | 'appartement') : Array<Rental>{
    return this.rentalsList.filter(rental => rental.tags.includes(type) || rental.tags.includes(capitalizeFirstLetter(type)) || rental.title.includes(type) || rental.title.includes(capitalizeFirstLetter(type)))
  }

  getRentalsByLocation(location : 'Paris' | 'Outside Paris') : Array<Rental>{
    if(location == "Paris") return this.rentalsList.filter(rental => rental.location.includes("Paris"))
    return this.rentalsList.filter(rental => !rental.location.includes("Paris"))
  }
}

function capitalizeFirstLetter(str : string) : string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}