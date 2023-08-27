import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[immocardHover]'
})
export class immocardHoverDirective {

  constructor(private el : ElementRef) {
    this.setBorder('red')
  }

  setBorder(color:string){
    this.el.nativeElement.style.border = `2px solid ${color}`
  }

}
