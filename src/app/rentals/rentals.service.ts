import { Injectable } from '@angular/core';
import { IOwner, Rental } from '../models/rental';
import { rentalsList } from '../mockdatas/mock-rentals-list';

const APIBaseUrl =  "http://127.0.0.1:5678/"

// allows to inject this service in any component constructor
// pipes / directives & components extends Injectable
@Injectable(/*{ 
  providedIn: 'root' // service transmitted to root so it can be accessed anywhere into the app
  // since we only want this service to be accessible by the rentals module, we will pass it as a provider into the module itself
}*/)
export class RentalsService {

  rentalsList = [...rentalsList]

  constructor() { }

  async getAllOwners() : Promise<Array<IOwner> | void>{ // define return value
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

  async getRental(id : string) : Promise<Rental | void>{  // define return value
    try{
      const response = await fetch(`${APIBaseUrl}rental/${id}`,
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

  /* 
  endof
  */

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

  updateRentalById(updatedRental : Rental, targetRentalId : string) : boolean{
    const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false
    this.rentalsList[targetRentalIndex] = updatedRental
    return true
  }

  removeTag(tagValue: string, targetRentalId : string) : boolean{
    const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false
    const tagIndex = this.rentalsList[targetRentalIndex].tags.findIndex(tag => tag === tagValue)
    if(tagIndex == null) return false
    this.rentalsList[targetRentalIndex].tags.splice(tagIndex, 1)
    console.log(this.rentalsList[targetRentalIndex].tags)
    return true
  }

  removeEquipment(equipmentValue: string, targetRentalId : string) : boolean{
    const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false
    const equipmentIndex = this.rentalsList[targetRentalIndex].equipments.findIndex(equipment => equipment === equipmentValue)
    if(equipmentIndex == null) return false
    this.rentalsList[targetRentalIndex].equipments.splice(equipmentIndex, 1)
    console.log(this.rentalsList[targetRentalIndex].equipments)
    return true
  }

  addEquipment(equipmentValue: string, targetRentalId : string) : boolean{
    if(equipmentValue.match(/^[a-zA-Zèéàèïîêôöùûç '-]{1,30}$/) == null) return false
    const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false
    if(this.rentalsList[targetRentalIndex].equipments.includes(capitalizeFirstLetter(equipmentValue))) return false
    this.rentalsList[targetRentalIndex].equipments.push(capitalizeFirstLetter(equipmentValue))
    return true
  }

  addTag(tagValue: string, targetRentalId : string) : boolean{
    if(tagValue.match(/^[a-zA-Zèéàèïîêôöùûç '-]{1,30}$/) == null) return false
    const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false
    if(this.rentalsList[targetRentalIndex].tags.includes(capitalizeFirstLetter(tagValue))) return false
    this.rentalsList[targetRentalIndex].tags.push(capitalizeFirstLetter(tagValue))
    return true
  }

  deleteImg(imgPath : string, targetRentalId : string) : boolean{
    const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false
    const imgIndex = this.rentalsList[targetRentalIndex].pictures.findIndex(pic => pic === imgPath)
    if(imgIndex == null) return false
    this.rentalsList[targetRentalIndex].pictures.splice(imgIndex, 1)
    return true
  }
}

function capitalizeFirstLetter(str : string) : string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}