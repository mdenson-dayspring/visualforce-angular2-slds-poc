import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logger } from 'angular2-logger/core';
import { Subject } from 'rxjs/Subject';

import * as fromRoot from '../../reducers';
import * as page from '../../actions/hourlog-page';

import { HourLog } from '../../models/hour-log';

@Component({
  selector: 'hours-log-table-row',
  template: require('./hours-log-table-row.component.html'),
  styles: [require('./hours-log-table-row.component.scss')]
})
export class HoursLogTableRowComponent {
  @Input() hour: HourLog;
  @Input() pageReadOnly: boolean;
  @Input() editMode: boolean;

  constructor(private store: Store<fromRoot.State>, private $log: Logger) { }

  clickEdit() {
    this.$log.debug('clicked edit');
    this.store.dispatch(new page.OpenAction(this.hour.hour));
  }
  clickSave() {
    this.store.dispatch(new page.CloseAction(this.hour.hour));
  }
  clickCancel() {
    this.store.dispatch(new page.CloseAction(this.hour.hour));
  }
}
