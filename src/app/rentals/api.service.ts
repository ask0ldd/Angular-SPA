import { Injectable } from '@angular/core';
import { IHost, IRental, Rental } from '../models/rental';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

  APIBaseUrl =  "http://127.0.0.1:5678/"

  activeRental : IRental | undefined
  rentalsList : Array<IRental>

  constructor(private httpClient : HttpClient) { }

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

    /*this.httpClient.get<Array<IRental>>(`${this.APIBaseUrl}owners`).subscribe(data => {
      return data
    })*/
  }

  getAllRentals() : /*Promise<Array<IRental> | void*>*/  Observable<Array<IRental>> {
    return this.httpClient.get<Array<IRental>>(`${this.APIBaseUrl}rentals`)
  }

  getRental(id : string) : Observable<IRental> /*Promise<Rental | void>*/{  // define return value
    /*try{
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
    }*/
    return this.httpClient.get<IRental>(`${this.APIBaseUrl}rentals/${id}`)
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

function handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred.
    console.error('An error occurred:', error.error)
  } else {
    // The backend returned an unsuccessful response code.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error)
  }
  // Return an observable with a user-facing error message.
  // return throwError(() => new Error('Something bad happened; please try again later.'))
}



/*try{
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
*/