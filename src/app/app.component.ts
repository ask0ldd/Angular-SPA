import { Component, OnInit } from '@angular/core';
import { rentalsList } from './mockdatas/mock-rentals-list';
import { Rental } from './models/rental';
import { CookiesService } from './auth/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root', // tag name of this custom component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularprj'

  isConnected = false
  rentalsList = rentalsList
  selectedRental : Rental | undefined

  // constructor method is not defined for most angular component
  constructor(private cookieManager : CookiesService, private router : Router){}

  ngOnInit() : void {
    this.isConnected = this.cookieManager.isTokenAlive()
  }

  disconnect() : void{
    this.cookieManager.eraseCookie()
    this.router.navigateByUrl('/gallery')
  }

}

// https://angular.io/guide/lifecycle-hooks