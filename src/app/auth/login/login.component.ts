import { Component, ElementRef, ViewChild } from '@angular/core';

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

  ngOnInit(): void { }


}
