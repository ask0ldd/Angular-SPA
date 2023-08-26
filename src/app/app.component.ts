import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // tag name of this custom component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularprj';

  // constructor method is not defined for most angular component

  ngOnInit(): void {
    console.log(this.title, "aaa")
  }
}

// https://angular.io/guide/lifecycle-hooks