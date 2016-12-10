import { Component } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { HourLog } from '../models/hour-log';

@Component({
  selector: 'hours-log-table',
  template: require('./hours-log-table.component.html'),
  styles: [require('./hours-log-table.component.scss')]
})
export class HoursLogTableComponent {
  hours: HourLog[] = [
    { hour: 8, mood: 'Good', comment: 'Sleeping'},
    { hour: 9, mood: 'Good', comment: 'Woke up in a good mood'},
    { hour: 10, mood: 'Good', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum turpis neque, ut mollis odio porta at. Maecenas justo ipsum, facilisis vitae vehicula in, accumsan id sapien. Donec lacinia augue leo, a luctus lorem ullamcorper eu. Proin quis sollicitudin nulla. Nulla dictum ligula ac sed.'},
    { hour: 11, mood: 'n/a', comment: ''},
    { hour: 12, mood: 'n/a', comment: ''},
    { hour: 13, mood: 'n/a', comment: ''},
    { hour: 14, mood: 'n/a', comment: ''},
    { hour: 15, mood: 'n/a', comment: ''}
  ];

  constructor(private $log: Logger) { }

}
