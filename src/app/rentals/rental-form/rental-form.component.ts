import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
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
  @Input() editedRental ?: Rental | IRental
  @Input() rentalId ?: string
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

  onSubmit() : void {
    // if(this.rentalId!=null) this.router.navigateByUrl('/rental/'+this.rentalId) 
    // console.log(this.rentalForm)
    const formData = new FormData()
    // formData.append("title", this.rentalForm.get("title").value)
    // formData.append("title", this.titleInput.nativeElement.value)
    console.log(formData)
    
  }

  removeTag(tagValue : string){ 
    if(this.APIAsSource === false) {
      this.rentalService.removeTag(tagValue)
    }else{
      // this.apiService
    }
  }

  removeEquipment(equipmentValue : string){
    if(this.APIAsSource === false) {
      this.rentalService.removeEquipment(equipmentValue)
    }else{
      // this.apiService
    }
  }

  addEquipment(equipmentValue : string){
    if(this.APIAsSource === false) {
      // should verify if value is valid
      const isSuccessful = this.rentalService.addEquipment(equipmentValue)
      if(isSuccessful) this.newEquipment.nativeElement.value=""
    }else{
      // this.apiService
    }
  }

  addTag(equipmentValue : string){
    if(this.APIAsSource === false) {
      const isSuccessful = this.rentalService.addTag(equipmentValue)
      if(isSuccessful) this.newTag.nativeElement.value=""
    }else{
      // this.apiService
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