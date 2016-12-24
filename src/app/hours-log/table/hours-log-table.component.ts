import { Component, Input } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { HourLog } from '../../models/hour-log';
import { ShiftReport } from '../../models/shift-report';

@Component({
  selector: 'hours-log-table',
  template: require('./hours-log-table.component.html'),
  styles: [require('./hours-log-table.component.scss')]
})
export class HoursLogTableComponent {
  @Input() shift: ShiftReport;
  @Input() openRow: number;

  constructor(private $log: Logger) { }

}
