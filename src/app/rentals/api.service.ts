import { Injectable } from '@angular/core';
import { IHost, Rental } from '../models/rental';

const APIBaseUrl =  "http://127.0.0.1:5678/"

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

  activeRental : Rental | undefined
  rentalsList : Array<Rental>

  constructor() { }

  async getAllOwners() : Promise<Array<IHost> | void>{ // define return value
    try{
      const response = await fetch(`${APIBaseUrl}owners`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },    
            })

      if(response.ok && response.status === 200)
      {            
        return response.json()
      }
      else
      {
          console.log(response.statusText)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  async getAllRentals() : Promise<any | void>{
    try{
      const response = await fetch(`${APIBaseUrl}rentals`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },    
            })

      if(response.ok && response.status === 200)
      {            
        return response.json()
      }
      else
      {
          console.log(response.statusText)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  async getRental(id : string) : Promise<Rental | void>{  // define return value
    try{
      const response = await fetch(`${APIBaseUrl}rentals/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },    
            })

      if(response.ok && response.status === 200)
      {            
        return response.json()
      }
      else
      {
          console.log(response.statusText)
      }
    }
    catch(error){
      console.log(error)
    }
  }
}
