import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'formatHour'})

export class FormatHourPipe implements PipeTransform {
  transform(value: number): string {
    let ampm = 'am';
    if (value === 0) {
      value = value + 12;
    } else if (value === 12) {
      ampm = 'pm';
    } else if (value > 12) {
      ampm = 'pm';
      value = value - 12;
    }
    return value + ':00' + ampm;
  }
}
