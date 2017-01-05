import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Logger } from 'angular2-logger/core';
import { Subject } from 'rxjs/Subject';

import * as fromRoot from '../../reducers';
import * as page  from '../../actions/hourlog-page';
import * as shift from '../../actions/shift-report';

import { HourLog } from '../../models/hour-log';

@Component({
  selector: 'hours-log-form',
  template: require('./hours-log-form.component.html')
})
export class HoursLogFormComponent implements OnInit {
  @Input() hour: HourLog;
  hourData: FormGroup;

  constructor(
      private store: Store<fromRoot.State>,
      private fb: FormBuilder,
      private $log: Logger) { }

  ngOnInit() {
    this.hourData = this.fb.group({
      describe: [this.hour.describe, [Validators.required]],
      comment: [this.hour.comment, [Validators.required, Validators.maxLength(255)]]
    });
  }

  onSubmit() {
    this.store.dispatch(new page.CloseAction(this.hour.hour));
    let newHour = this.hour.setComment(this.hourData.value.comment);
    newHour = newHour.setDescribe(this.hourData.value.describe);

    this.store.dispatch(new shift.SaveHourLogAction(newHour));
  }
  onCancel() {
    this.store.dispatch(new page.CloseAction(this.hour.hour));
  }
}
