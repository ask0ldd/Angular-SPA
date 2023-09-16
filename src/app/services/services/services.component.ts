import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  collapsesOpenStatus : boolean[] = [true, false, false, false]

  ngOnInit(): void {
    
  }

}
