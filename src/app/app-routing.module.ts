import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalsGalleryComponent } from './rentals-gallery/rentals-gallery.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: 'gallery', component: RentalsGalleryComponent},
  {path: 'rental/:id', component: RentalDetailsComponent},
  {path: '', redirectTo: 'gallery', pathMatch: 'full'}, // page by default
  {path: '**', component: Page404Component}, // non existing url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
