import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookiesService } from '../cookies.service';
import { ApiService } from 'src/app/rentals/api.service';
import { Router } from '@angular/router';
import { APIAsSource } from 'src/main';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEmail : string
  userPassword : string
  APIAsSource : boolean = APIAsSource

  constructor(private cookieManager : CookiesService, private apiService : ApiService, private router:Router){ }

  ngOnInit(): void {
    this.userEmail = "john.doe@email.com"
    this.userPassword = "genericpassword"
  }

  onSubmit(form: NgForm) : void {
    if(!this.APIAsSource){
      this.cookieManager.setCookie({userId : 1, email : form.value["login"], token: Math.random().toString()})
      this.router.navigateByUrl('/gallery')
      return
    }
    this.apiService.login({userEmail:form.value["login"], password:form.value["password"]}).subscribe(data => {
      // !! should handle error
      this.cookieManager.setCookie({userId : +data.userId, email : form.value["login"], token: data.token})
      this.router.navigateByUrl('/gallery')
    })
  }

}
