import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingColor'
})
export class RatingColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
