import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[immocardHover]'
})
export class immocardHoverDirective {

  constructor(private el : ElementRef) {
    this.setBoxShadow(false)
  }

  // @Input equivalent to a react prop
  @Input('immocardHover') borderColor : string // allow to associate a value to the directive (into the template)

  @HostListener('mouseenter')
  onMouseEnter(){
    this.setBoxShadow(true)
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setBoxShadow(false)
  }

  setBoxShadow(bool : boolean){
    if(bool) {
      this.el.nativeElement.style.boxShadow = `rgba(0, 0, 0, 0.2) 0px 20px 20px,
    rgba(0, 0, 0, 0.12) 0px -6px 15px, rgba(0, 0, 0, 0.12) 0px 2px 3px,
    rgba(0, 0, 0, 0.1) 0px 3px 6px, rgba(0, 0, 0, 0.03) 0px -1px 3px`
      this.el.nativeElement.style.border = `4px solid ${this.borderColor}` || '4px solid white'
    }else{
      this.el.nativeElement.style.boxShadow = 'none'
      this.el.nativeElement.style.border = '4px solid white'
    }
  }

}
