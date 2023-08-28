import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { immocardHoverDirective } from './immocard-hover.directive';
import { RatingColorPipe } from './rating-color.pipe';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RentalsGalleryComponent } from './rentals-gallery/rentals-gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const rentalRoutes: Routes = [
  {path: 'gallery', component: RentalsGalleryComponent},
  {path: 'rental/:id', component: RentalDetailsComponent},
];

@NgModule({
  declarations: [ 
    immocardHoverDirective, 
    RatingColorPipe, 
    RentalsGalleryComponent, 
    RentalDetailsComponent,
  ],
  imports: [    
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forChild(rentalRoutes), // import the routes specific to this module 
    CommonModule
  ]
})
export class RentalsModule { }
