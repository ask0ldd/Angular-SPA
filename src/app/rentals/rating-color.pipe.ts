import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingColor'
})
export class RatingColorPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(rating : string) : string {
    /*if(parseInt(rating) > 4) return " [Recommanded]" // can be used to control the css properties of a tag, like the color of a pill changing with the innertag value
    return ""*/
    if(parseInt(rating) > 4) return "green"
    if(parseInt(rating) > 3) return "yellow"
    return "orange"
  }

}
