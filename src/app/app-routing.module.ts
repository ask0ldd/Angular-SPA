import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  /*{path: 'gallery', component: RentalsGalleryComponent},
  {path: 'rental/:id', component: RentalDetailsComponent},*/
  // {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'gallery', pathMatch: 'full'}, // page by default
  {path: '**', component: Page404Component}, // non existing url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
