import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { immocardHoverDirective } from './immocard-hover.directive';
import { RatingColorPipe } from './rating-color.pipe';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RentalsGalleryComponent } from './rentals-gallery/rentals-gallery.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RentalsService } from './rentals.service';
import { FormsModule } from '@angular/forms';
import { RentalsEditComponent } from './rentals-edit/rentals-edit.component';
import { RentalNewComponent } from './rental-new/rental-new.component';
import { RentalFormComponent } from './rental-form/rental-form.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

const rentalRoutes: Routes = [
  {path: 'gallery', component: RentalsGalleryComponent},
  {path: 'rental/new', component: RentalNewComponent},
  {path: 'rental/edit/:id', component: RentalsEditComponent},
  {path: 'rental/:id', component: RentalDetailsComponent},
];

@NgModule({
  declarations: [ 
    immocardHoverDirective, 
    RatingColorPipe, 
    RentalsGalleryComponent, 
    RentalDetailsComponent, 
    RentalsEditComponent, RentalNewComponent, RentalFormComponent,
  ],
  imports: [    
    BrowserModule,
    // AppRoutingModule,
    FormsModule, // allows the whole app to access Angular Forms functionalities
    RouterModule.forChild(rentalRoutes), // import the routes specific to this module 
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RentalsService, // import the service as a provider instead of passing it to the root module through the service file itself : @Injectable({providedIn: 'root'})
    ApiService,
  ]
})
export class RentalsModule { }
