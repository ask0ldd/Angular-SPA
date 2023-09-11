import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookiesService } from '../cookies.service';
import { ApiService } from 'src/app/rentals/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEmail : string
  userPassword : string

  constructor(private cookieManager : CookiesService, private apiService : ApiService, private router:Router){ }

  ngOnInit(): void {
    this.userEmail = "john.doe@email.com"
    this.userPassword = "genericpassword"
  }

  onSubmit(form: NgForm) : void {
    this.apiService.login({userEmail:form.value["login"], password:form.value["password"]}).subscribe(data => {
      // !! should handle error
      this.cookieManager.setCookie({userId : +data.userId, email : form.value["login"], token: data.token})
      this.router.navigateByUrl('/gallery')
    })
  }

}
