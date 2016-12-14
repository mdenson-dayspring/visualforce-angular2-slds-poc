import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import { EnvService } from './env.service';

@Injectable()
export class VFService {
  constructor(private $env: EnvService, private $log: Logger) {
    this.$log.debug('VFService: Logged In User is \'' + this.$env.loggedInUser + '\'.');
    this.fetchShiftReports();
  }
  private fetchShiftReports(): void {
      let sr = new window.SObjectModel.Shift_Report__c();

      sr.retrieve({ limit: 100 }, (err: ROError, records: RORecord[], event: any) => {
        if (err) {
          alert(err.message);
        } else {
          records.forEach((record: RORecord) => {
            this.$log.debug(record.get('Start_Hour__c') + ' ' + record.get('End_Hour__c'));
          });
        }
      });
    };
}
