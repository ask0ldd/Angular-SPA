import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  hostId : string

  /*rentalId : string | null
  editedRental : Rental | undefined*/

  @ViewChild('newTag'/*, { static: true }*/) 
  newTag: ElementRef

  @ViewChild('newEquipment') 
  newEquipment: ElementRef

  @ViewChild('rentalForm') 
  rentalForm: ElementRef

  /*@ViewChild('title') 
  titleInput: ElementRef*/

  constructor(private rentalService : RentalsService, private apiService : ApiService){ }

  ngOnInit(): void {
    /*this.rentalId = this.route.snapshot.paramMap.get('id')
    console.log(this.route.snapshot.url)
    if(this.rentalId == null) {
      this.router.navigateByUrl('/404') 
      return
    }
    this.editedRental = this.rentalService.getRentalById(this.rentalId)
    console.table(this.rentalService.getAllOwners())*/
  }

  ngAfterViewInit() {}

  onSubmit(form: NgForm) : void {
    const formRental : IRental = {
        id : parseInt(this.rentalId),
        title : form.value["title"],
        cover : form.value["cover"],
        pictures : [],
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
    // console.log(formRental)
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

  deleteImg(imgPath : string){
    if(this.APIAsSource === false) {
      if (this.rentalId!=null) this.rentalService.deleteImg(imgPath, this.rentalId)
    }else{
      // this.apiService
    }
  }

  /*logForm(form : any){
    console.log(form)
  }*/
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