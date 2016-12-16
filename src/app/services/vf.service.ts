import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { ShiftReport } from '../models/shift-report';

import { EnvService } from './env.service';

@Injectable()
export class VFService {
  constructor(private $env: EnvService, private $log: Logger) {
    this.$log.debug('VFService: Logged In User is \'' + this.$env.loggedInUser + '\'.');
  }

  fetchShiftReport(): Observable<ShiftReport> {
    let sr = new window.SObjectModel.Shift_Report__c();

    return Observable.create((subscriber: Subscriber<ShiftReport>) => {
      sr.retrieve({ limit: 100 }, (err: ROError, records: RORecord[], event: any) => {
        if (err) {
          subscriber.error(new Error(err.message));
        } else {
          records.forEach((record: RORecord) => {
            let shiftReport = new ShiftReport()
            shiftReport.startHour = record.get('Start_Hour__c');
            shiftReport.endHour = record.get('End_Hour__c');

            subscriber.next(shiftReport);
            this.$log.debug(shiftReport);
          });
          subscriber.complete();
        }
      });
    });
  }
}
