import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookiesService } from '../cookies.service';
import { ApiService } from 'src/app/rentals/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /*@ViewChild("login")
  login:ElementRef*/
  /*login : any
  password : any*/

  userEmail : string
  userPassword : string

  ngOnInit(): void {
    this.userEmail = "john.doe@email.com"
    this.userPassword = "genericpassword"
  }

  constructor(private cookieManager : CookiesService, apiService : ApiService){ }

  onSubmit(form: NgForm) : void {
    this.userEmail = form.value["login"]
    this.userPassword = form.value["password"]
    
  }

}
