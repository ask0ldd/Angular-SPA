import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CookiesService } from './cookies.service';
import { ApiService } from '../rentals/api.service';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes),
  ],
  providers: [
    CookiesService,
    ApiService,
  ],
})
export class AuthModule { }
