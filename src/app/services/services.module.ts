import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { RouterModule, Routes } from '@angular/router';

const servicesRoutes: Routes = [
  {path: 'services', component: ServicesComponent},
]

@NgModule({
  declarations: [
    ServicesComponent,
  ],
  imports: [
    RouterModule.forChild(servicesRoutes),
    CommonModule,
  ]
})
export class ServicesModule { }
