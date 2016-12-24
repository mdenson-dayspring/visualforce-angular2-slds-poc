import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromHourLogPage from './hourlog-page';
import * as fromShiftReport from './shift-report';

export interface State {
    hourLogPage: fromHourLogPage.State;
    shiftReport: fromShiftReport.State;
    router: fromRouter.RouterState;
}

const reducers = {
    hourLogPage: fromHourLogPage.reducer,
    shiftReport: fromShiftReport.reducer,
    router: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (process.env.ENV === 'production') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getHourLogPageState = (state: State) => state.hourLogPage;

export const getShiftReportState = (state: State) => state.shiftReport;
export const getShiftReport = (state: State) => state.shiftReport.report;
