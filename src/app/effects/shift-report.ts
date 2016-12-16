import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { VFService } from '../services/vf.service';
import * as shiftReport from '../actions/shift-report';

@Injectable()
export class ShiftReportEffects {

    @Effect()
    shiftReport$: Observable<Action> = this.actions$
        .ofType(shiftReport.ACTION.LOAD)
        .switchMap(() => {
            return this.vf.fetchShiftReport()
                .map(reports => new shiftReport.LoadSuccessAction(reports))
                .catch(() => of(new shiftReport.LoadSuccessAction(undefined)));
        });

    constructor(private actions$: Actions, private vf: VFService) { }

}
