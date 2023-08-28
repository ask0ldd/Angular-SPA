import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { immocardHoverDirective } from './immocard-hover.directive';
import { RatingColorPipe } from './rating-color.pipe';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RentalsGalleryComponent } from './rentals-gallery/rentals-gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ 
    immocardHoverDirective, 
    RatingColorPipe, 
    RentalsGalleryComponent, 
    RentalDetailsComponent,
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class RentalsModule { }
