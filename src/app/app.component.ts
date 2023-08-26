import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag name of this custom component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularprj';
}

// console.log(new AppComponent())