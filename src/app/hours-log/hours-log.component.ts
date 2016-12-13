import { Component } from '@angular/core';
import { Logger } from 'angular2-logger/core';

@Component({
  selector: 'hours-log',
  template: require('./hours-log.component.html'),
  styles: [require('./hours-log.component.scss')]
})
export class HoursLogComponent {

  constructor(private $log: Logger) { }

}
