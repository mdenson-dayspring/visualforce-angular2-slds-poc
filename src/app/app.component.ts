import { Component } from '@angular/core';
import { Logger } from 'angular2-logger/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {

  constructor(private $log: Logger) { }

}
