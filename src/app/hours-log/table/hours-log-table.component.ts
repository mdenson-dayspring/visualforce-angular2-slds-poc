import { Component } from '@angular/core';
import { Logger } from 'angular2-logger/core';

@Component({
  selector: 'hours-log-table',
  template: require('./hours-log-table.component.html'),
  styles: [require('./hours-log-table.component.scss')]
})
export class HoursLogTableComponent {

  constructor(private $log: Logger) { }

}
