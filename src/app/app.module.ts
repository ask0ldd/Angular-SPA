import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { immocardHoverDirective } from './immocard-hover.directive';
import { RatingColorPipe } from './rating-color.pipe';
import { RentalsGalleryComponent } from './rentals-gallery/rentals-gallery.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';

@NgModule({
  declarations: [ // components, directives, pipes to import
    AppComponent, 
    immocardHoverDirective, RatingColorPipe, RentalsGalleryComponent, RentalDetailsComponent
  ],
  imports: [ // other modules to import
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // for dependencies injection but a bit obsolete nowdays
  bootstrap: [AppComponent] // specific to the root module
})
export class AppModule { }
