import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalsGalleryComponent } from './rentals-gallery/rentals-gallery.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';

const routes: Routes = [
  {path:'/gallery', component:RentalsGalleryComponent},
  {path:'/rental', component:RentalDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
