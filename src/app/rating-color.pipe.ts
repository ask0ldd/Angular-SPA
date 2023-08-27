import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingColor'
})
export class RatingColorPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(rating : string) : string {
    if(parseInt(rating) > 4) return " [Recommanded]"
    return ""
  }

}
