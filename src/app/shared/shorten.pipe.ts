import { Pipe, PipeTransform } from '@angular/core';
import { shorten } from '../utils/shorten';

@Pipe({
  name: 'shortenPipe',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, chars: number) {
    return shorten(value, chars);
  }
}
