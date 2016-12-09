import { Component } from '@angular/core';
import { Logger } from 'angular2-logger/core';

@Component({
  selector: 'hours-log-table-row',
  template: require('./hours-log-table-row.component.html'),
  styles: [require('./hours-log-table-row.component.scss')]
})
export class HoursLogTableRowComponent {

  constructor(private $log: Logger) { }

}
