import { Component, Input } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { HourLog } from '../../models/hour-log';

@Component({
  selector: 'hours-log-table-row',
  template: require('./hours-log-table-row.component.html'),
  styles: [require('./hours-log-table-row.component.scss')]
})
export class HoursLogTableRowComponent {
  @Input() hour: HourLog;

  constructor(private $log: Logger) { }

}
