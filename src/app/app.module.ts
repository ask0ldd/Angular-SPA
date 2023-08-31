import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { RentalsModule } from './rentals/rentals.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [ // components, directives, pipes to import
    AppComponent, 
    Page404Component, LoginComponent,
    // immocardHoverDirective, RatingColorPipe, RentalsGalleryComponent, RentalDetailsComponent, Page404Component
  ],
  imports: [ // other modules to import
    BrowserModule,
    FormsModule,
    RentalsModule,
    AppRoutingModule,
  ],
  providers: [], // for dependencies injection but a bit obsolete nowdays
  bootstrap: [AppComponent] // specific to the root module
})
export class AppModule { }
