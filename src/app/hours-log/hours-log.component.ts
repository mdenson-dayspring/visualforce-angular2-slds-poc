import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as fromHourLogPage from '../reducers/hourlog-page';
import { ShiftReport } from '../models/shift-report';

@Component({
  selector: 'hours-log',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./hours-log.component.html'),
  styles: [require('./hours-log.component.scss')]
})
export class HoursLogComponent {
  shift$: Observable<ShiftReport>;
  pageState$: Observable<fromHourLogPage.State>;

  constructor(store: Store<fromRoot.State>, private $log: Logger) {
    this.shift$ = store.select(fromRoot.getShiftReport);
    this.pageState$ = store.select(fromRoot.getHourLogPageState);
  }

}
