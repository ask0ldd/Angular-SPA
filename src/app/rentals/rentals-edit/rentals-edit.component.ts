import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalsService } from '../rentals.service';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-rentals-edit',
  templateUrl: './rentals-edit.component.html',
  styleUrls: ['./rentals-edit.component.css']
})
export class RentalsEditComponent {

  rentalId : string | null
  editedRental : Rental | undefined

  @ViewChild('newTag'/*, { static: true }*/) 
  newTag: ElementRef

  @ViewChild('newEquipment') 
  newEquipment: ElementRef

  @ViewChild('rentalForm') 
  rentalForm: ElementRef

  constructor(private router:Router, private route: ActivatedRoute, private rentalService : RentalsService){ }

  ngOnInit(): void {
    this.rentalId = this.route.snapshot.paramMap.get('id')
    console.log(this.route.snapshot.url)
    if(this.rentalId == null) {
      this.router.navigateByUrl('/404') 
      return
    }
    this.editedRental = this.rentalService.getRentalById(this.rentalId)
    console.table(this.rentalService.getAllOwners())
  }

  ngAfterViewInit() {}

  onSubmit() : void {
    // if(this.rentalId!=null) this.router.navigateByUrl('/rental/'+this.rentalId) 
    console.log(this.rentalForm)
  }

  removeTag(tagValue : string){
    if (this.rentalId!=null) this.rentalService.removeTag(tagValue, this.rentalId)
  }

  removeEquipment(equipmentValue : string){
    if (this.rentalId!=null) this.rentalService.removeEquipment(equipmentValue, this.rentalId)
  }

  addEquipment(equipmentValue : string){
    // should verify if value is valid
    if (this.rentalId!=null) {
      const isSuccessful = this.rentalService.addEquipment(equipmentValue, this.rentalId)
      if(isSuccessful) this.newEquipment.nativeElement.value=""
    }
  }

  addTag(equipmentValue : string){
    // should verify if value is valid
    if (this.rentalId!=null) {
      const isSuccessful = this.rentalService.addTag(equipmentValue, this.rentalId)
      if(isSuccessful) this.newTag.nativeElement.value=""
    }
  }

  deleteImg(imgPath : string){
    if (this.rentalId!=null) this.rentalService.deleteImg(imgPath, this.rentalId)
  }

  /*logForm(form : any){
    console.log(form)
  }*/
}
