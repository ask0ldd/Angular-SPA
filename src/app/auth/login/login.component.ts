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

  constructor(private cookieManager : CookiesService, private apiService : ApiService){ }

  ngOnInit(): void {
    this.userEmail = "john.doe@email.com"
    this.userPassword = "genericpassword"
  }

  onSubmit(form: NgForm) : void {
    /*this.userEmail = form.value["login"]
    this.userPassword = form.value["password"]*/
    const response = this.apiService.login({userId:form.value["login"], password:form.value["password"]}).subscribe()
    console.log(response)
  }

}
