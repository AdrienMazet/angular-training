import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkcase',
})
export class LinkCasePipe implements PipeTransform {
  transform(value: string): string {
    console.log();
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .reduce((a, b) => a + ' ' + b, '🔗 ');
  }
}
