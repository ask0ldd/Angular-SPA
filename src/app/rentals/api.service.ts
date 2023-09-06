import { Injectable } from '@angular/core';
import { IHost, IRental, Rental } from '../models/rental';
import { HttpClient } from '@angular/common/http';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

  APIBaseUrl =  "http://127.0.0.1:5678/"

  activeRental : Rental | undefined
  rentalsList : Array<Rental>

  constructor(/*private httpClient : HttpClient*/) { }

  async getAllOwners() : Promise<Array<IHost> | void>{ // define return value
    try{
      const response = await fetch(`${this.APIBaseUrl}owners`,
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

  async getAllRentals() : Promise<Array<IRental> | void> /* Observable<Object> */ {
    try{
      const response = await fetch(`${this.APIBaseUrl}rentals`,
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
    // return this.httpClient.get(`${this.APIBaseUrl}rentals`)
  }

  async getRental(id : string) : Promise<Rental | void>{  // define return value
    try{
      const response = await fetch(`${this.APIBaseUrl}rentals/${id}`,
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

  async updateRental(id : string, rental : IRental){
    try{
      const response = await fetch(`${this.APIBaseUrl}rentals/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rental)
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
