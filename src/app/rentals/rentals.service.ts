import { Injectable } from '@angular/core';
import { IHost, Rental } from '../models/rental';
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

  activeRental : Rental | undefined

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
    this.activeRental = this.rentalsList.find(rental => rental.id === rentalId)
    return this.activeRental
  }

  newRental(){
    this.activeRental = {
      id : "",
      title : "",
      cover : "",
      pictures : [],
      description : "",
      host : {name : "", picture : ""},
      rating : "",
      location : "",
      equipments : [],
      tags : []
    }
    return this.activeRental
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

  removeTag(tagValue: string/*, targetRentalId : string*/) : boolean{
    /*const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false*/
    if(this.activeRental == undefined) return false
    const tagIndex = this.activeRental.tags.findIndex(tag => tag === tagValue)
    if(tagIndex == null) return false
    this.activeRental.tags.splice(tagIndex, 1)
    return true
  }

  removeEquipment(equipmentValue: string) : boolean{
    if(this.activeRental == undefined) return false
    const equipmentIndex = this.activeRental.equipments.findIndex(equipment => equipment === equipmentValue)
    if(equipmentIndex == null) return false
    this.activeRental.equipments.splice(equipmentIndex, 1)
    console.log(this.activeRental.equipments)
    return true
  }

  addEquipment(equipmentValue: string) : boolean{
    if(this.activeRental == undefined) return false
    if(equipmentValue.match(/^[a-zA-Zèéàèïîêôöùûç '-]{1,30}$/) == null) return false
    if(this.activeRental.equipments.includes(capitalizeFirstLetter(equipmentValue))) return false
    this.activeRental.equipments.push(capitalizeFirstLetter(equipmentValue))
    return true
  }

  addTag(tagValue: string/*, targetRentalId : string*/) : boolean{
    if(this.activeRental == undefined) return false
    if(tagValue.match(/^[a-zA-Zèéàèïîêôöùûç '-]{1,30}$/) == null) return false
    /*const targetRentalIndex = this.rentalsList.findIndex(rental => rental.id === targetRentalId)
    if(targetRentalIndex == null) return false
    if(this.rentalsList[targetRentalIndex].tags.includes(capitalizeFirstLetter(tagValue))) return false
    this.rentalsList[targetRentalIndex].tags.push(capitalizeFirstLetter(tagValue))*/
    if(this.activeRental.tags.includes(capitalizeFirstLetter(tagValue))) return false
    this.activeRental.tags.push(capitalizeFirstLetter(tagValue))
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