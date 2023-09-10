import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CookiesService } from './cookies.service';
import { ApiService } from '../rentals/api.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    CookiesService,
    ApiService,
  ],
})
export class AuthModule { }
