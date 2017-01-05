import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { ShiftReport } from '../models/shift-report';
import { HourLog } from '../models/hour-log';

import { EnvService } from './env.service';

@Injectable()
export class VFService {
  constructor(private $env: EnvService, private $log: Logger) {
    this.$log.debug('VFService: Logged In User', this.$env.loggedInUser);
  }

  fetchShiftReport(): Observable<ShiftReport> {
    let sr = new window.SObjectModel.Shift_Report__c();

    return Observable.create((subscriber: Subscriber<ShiftReport>) => {
      sr.retrieve({ limit: 100 }, (err: ROError, records: RORecord[], event: any) => {
        if (err) {
          subscriber.error(new Error(err.message));
        } else {
          records.forEach((record: RORecord) => {
            let shiftReport = new ShiftReport();
            shiftReport.id = record.get('Id');

            shiftReport.hourComment = [
              record.get('Hr_Desc_00__c'),
              record.get('Hr_Desc_01__c'),
              record.get('Hr_Desc_02__c'),
              record.get('Hr_Desc_03__c'),
              record.get('Hr_Desc_04__c'),
              record.get('Hr_Desc_05__c'),
              record.get('Hr_Desc_06__c'),
              record.get('Hr_Desc_07__c'),
              record.get('Hr_Desc_08__c'),
              record.get('Hr_Desc_09__c'),
              record.get('Hr_Desc_10__c'),
              record.get('Hr_Desc_11__c'),
              record.get('Hr_Desc_12__c'),
              record.get('Hr_Desc_13__c'),
              record.get('Hr_Desc_14__c'),
              record.get('Hr_Desc_15__c'),
              record.get('Hr_Desc_16__c'),
              record.get('Hr_Desc_17__c'),
              record.get('Hr_Desc_18__c'),
              record.get('Hr_Desc_19__c'),
              record.get('Hr_Desc_20__c'),
              record.get('Hr_Desc_21__c'),
              record.get('Hr_Desc_22__c'),
              record.get('Hr_Desc_23__c')
            ];
            shiftReport.hourDescribe = [
              record.get('Hr_Picklist_00__c'),
              record.get('Hr_Picklist_01__c'),
              record.get('Hr_Picklist_02__c'),
              record.get('Hr_Picklist_03__c'),
              record.get('Hr_Picklist_04__c'),
              record.get('Hr_Picklist_05__c'),
              record.get('Hr_Picklist_06__c'),
              record.get('Hr_Picklist_07__c'),
              record.get('Hr_Picklist_08__c'),
              record.get('Hr_Picklist_09__c'),
              record.get('Hr_Picklist_10__c'),
              record.get('Hr_Picklist_11__c'),
              record.get('Hr_Picklist_12__c'),
              record.get('Hr_Picklist_13__c'),
              record.get('Hr_Picklist_14__c'),
              record.get('Hr_Picklist_15__c'),
              record.get('Hr_Picklist_16__c'),
              record.get('Hr_Picklist_17__c'),
              record.get('Hr_Picklist_18__c'),
              record.get('Hr_Picklist_19__c'),
              record.get('Hr_Picklist_20__c'),
              record.get('Hr_Picklist_21__c'),
              record.get('Hr_Picklist_22__c'),
              record.get('Hr_Picklist_23__c')
            ];
            shiftReport.setHours(record.get('Start_Hour__c'), record.get('End_Hour__c'));

            subscriber.next(shiftReport);
          });
          subscriber.complete();
        }
      });
    });
  }

  saveHourLog(hour: HourLog): Observable<ShiftReport> {
    this.$log.debug(hour);
    return this.fetchShiftReport();
  }
}
