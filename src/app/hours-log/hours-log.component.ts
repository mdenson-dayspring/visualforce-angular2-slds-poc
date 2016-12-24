import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as fromHourLogPage from '../reducers/hourlog-page';
import * as page from '../actions/hourlog-page';
import { ShiftReport } from '../models/shift-report';

@Component({
  selector: 'hours-log',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./hours-log.component.html'),
  styles: [require('./hours-log.component.scss')]
})
export class HoursLogComponent {
  @Input() readOnly: boolean = false;
  shift$: Observable<ShiftReport>;
  pageState$: Observable<fromHourLogPage.State>;

  constructor(private store: Store<fromRoot.State>, private $log: Logger) {
    this.shift$ = store.select(fromRoot.getShiftReport);
    this.pageState$ = store.select(fromRoot.getHourLogPageState);

    this.pageState$.subscribe((state) => {
      this.readOnly = (state.readOnly !== undefined) ? state.readOnly : this.readOnly;
    });
  }

  clickEdit() {
    this.store.dispatch(new page.EditPageAction());
  }
}
