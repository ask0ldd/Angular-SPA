import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RentalsService, capitalizeFirstLetter } from '../rentals.service';
import { IRental, Rental } from 'src/app/models/rental';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent {

  /* props equivalent */
  @Input() editedRental : Rental | IRental
  @Input() rentalId : string
  @Input() APIAsSource : boolean
  @Input() serverBaseUrl : string

  hostId : string

  // equivalent to useRef
  @ViewChild('newTag'/*, { static: true }*/) 
  newTag: ElementRef

  @ViewChild('newEquipment') 
  newEquipment: ElementRef

  @ViewChild('rentalForm') 
  rentalForm: ElementRef

  constructor(private rentalService : RentalsService, private apiService : ApiService){ }

  ngAfterViewInit() {}

  onSubmit(form: NgForm) : void {
    const formRental : IRental = {
        id : parseInt(this.rentalId),
        title : form.value["title"],
        cover : form.value["cover"],
        pictures : this.editedRental.pictures,
        description : form.value["description"],
        host : {id:form.value["host"], firstname:"", lastname:"", picture:""}, // form.value["host"]
        rating : this.editedRental.rating as number,
        location : form.value["location"],
        equipments : (() => { 
          const equipments = []
          let equipmentIndex = 0
          while(form.value["equipment"+equipmentIndex] != null){
            equipments.push(form.value["equipment"+equipmentIndex])
            equipmentIndex++
          }
          return equipments
        })(),
        tags : (() => { 
          const tags = []
          let tagIndex = 0
          while(form.value["tag"+tagIndex] != null){
            tags.push(form.value["tag"+tagIndex])
            tagIndex++
          }
          return tags
        })()
        ,
    } 
    this.apiService.updateRental(this.rentalId, formRental)
  }

  removeTag(tagValue : string){ 
    if(this.APIAsSource === false) {
      this.rentalService.removeTag(tagValue)
    }else{
      this.editedRental.tags = this.editedRental.tags.filter(tag => tag != tagValue)
    }
  }

  removeEquipment(equipmentValue : string){
    if(this.APIAsSource === false) {
      this.rentalService.removeEquipment(equipmentValue)
    }else{
      this.editedRental.equipments = this.editedRental.equipments.filter(equipment => equipment != equipmentValue)
    }
  }

  addEquipment(equipmentValue : string){
    if(equipmentValue === "") return
    if(this.APIAsSource === false) {
      // should verify if value is valid
      const isSuccessful = this.rentalService.addEquipment(equipmentValue)
      if(isSuccessful) this.newEquipment.nativeElement.value=""
    }else{
      if(this.editedRental == null) return
      if(!this.editedRental.equipments.includes(capitalizeFirstLetter(equipmentValue))) {
        this.editedRental.equipments.push(capitalizeFirstLetter(equipmentValue))
        this.newEquipment.nativeElement.value=""
      }
    }
  }

  addTag(tagValue : string){
    if(tagValue === "") return
    if(this.APIAsSource === false) {
      const isSuccessful = this.rentalService.addTag(tagValue)
      if(isSuccessful) this.newTag.nativeElement.value=""
    }else{
      if(this.editedRental == null) return
      if(!this.editedRental.tags.includes(capitalizeFirstLetter(tagValue))) {
        this.editedRental.tags.push(capitalizeFirstLetter(tagValue))
        this.newTag.nativeElement.value=""
      }
    }
  }

  deleteImg(filename : string){
    if(this.APIAsSource === false) {
      if (this.rentalId!=null) this.rentalService.deleteImg(filename, this.rentalId)
    }else{
      if(this.editedRental == null) return
      this.editedRental.pictures = this.editedRental.pictures.filter(picture => picture != filename)
    }
  }

  whenFileUploaded(filename : string){
    this.editedRental.pictures.push(filename)
  }

  setInputContainerAsFocused(event : Event, onOff : boolean){
    const input = event.target as HTMLInputElement
    if(input.parentElement)
      if(onOff){
        input.parentElement.style.border="1px solid #58756f"
      }else{
        input.parentElement.style.border="none"
      }
  }

}

/*
typescript
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    const formData = new FormData();
    for (let key in form.value) {
      formData.append(key, form.value[key]);
    }
    this.http.post('https://example.com/upload', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
*/