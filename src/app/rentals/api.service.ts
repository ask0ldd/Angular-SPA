import { Injectable } from '@angular/core';
import { IHost, IRental } from '../models/rental';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverBaseUrl } from 'src/main';
import { CookiesService } from '../auth/cookies.service';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

  APIBaseUrl =  serverBaseUrl

  activeRental : IRental | undefined
  rentalsList : Array<IRental>

  constructor(private httpClient : HttpClient, private cookiesManager : CookiesService) { }

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

  getAllRentals(/*rules ?: { sort?: {column : string, value : string}, order?:{direction : 'asc' | 'desc', column : string } }*/) : /*Promise<Array<IRental> | void*>*/  Observable<Array<IRental>> {
    // if(rules != null) return this.httpClient.post<Array<IRental>>(`${this.APIBaseUrl}rentals/withRules`, rules)
    return this.httpClient.get<Array<IRental>>(`${this.APIBaseUrl}rentals`)
  }

  getFilteredRentals(filter : {column : string, value : string | number}) : Observable<Array<IRental>> {
    return this.httpClient.post<Array<IRental>>(`${this.APIBaseUrl}rentals/filtered`, {column : filter.column, value : filter.value})
  }

  getRental(id : string) : Observable<IRental> /*Promise<Rental | void>*/{  // define return value
    return this.httpClient.get<IRental>(`${this.APIBaseUrl}rentals/${id}`)
  }

  async updateRental(id : string, rental : IRental){
    try{
      const token = this.cookiesManager.getToken()
      const cookieUserId = this.cookiesManager.getUserId()
      if(cookieUserId == null || token == null) return console.log("Cookies corrupted. Please relog.")
      const response = await fetch(`${this.APIBaseUrl}rentals/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({rental, userId : +cookieUserId})
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

  postPicture(file : File): Observable<{message:string, filename:string}>{
    const formData: FormData = new FormData()
    formData.append('image', file)
    return this.httpClient.post<{message:string, filename:string}>(`${this.APIBaseUrl}upload/picture`, formData, { reportProgress: true, responseType: 'json' })
  }

  getLikesList(userId : string) : Observable<Array<string | number>>{
    // console.log('getLikesList id ', userId)
    return this.httpClient.get<Array<string | number>>(`${this.APIBaseUrl}likesList/${userId}`)
  }

  setUnsetLike(userId : string, rentalId : string) : Observable<{liked : boolean}>{
    return this.httpClient.post<{liked : boolean}>(`${this.APIBaseUrl}like/`, {userId, rentalId}, { responseType: 'json' })
  }

  login(credentials : {userEmail: string, password : string}) : Observable<{userId:string, token:string}>{
    return this.httpClient.post<{userId:string, token:string}>(`${this.APIBaseUrl}auth/login/`, credentials)
  }

}



function handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred.
    console.error('An error occurred:', error.error)
  } else {
    // The backend returned an unsuccessful response code.
    console.error(`Backend returned code ${error.status}, body was: `, error.error)
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