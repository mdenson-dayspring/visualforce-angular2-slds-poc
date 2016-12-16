import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logger } from 'angular2-logger/core';

import * as fromRoot from './reducers';
import * as shiftReport from './actions/shift-report';

@Component({
  selector: 'my-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {

  constructor(private store: Store<fromRoot.State>, private $log: Logger) { 
    this.store.dispatch(new shiftReport.LoadAction());
  }
}
