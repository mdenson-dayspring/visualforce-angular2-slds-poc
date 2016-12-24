import { createSelector } from 'reselect';
import { ShiftReport } from '../models/shift-report';
import * as shiftReport from '../actions/shift-report';

export interface State {
  report: ShiftReport;
};

const initialState: State = {
  report: undefined
};

export function reducer(state = initialState, action: shiftReport.Actions): State {
  switch (action.type) {
    case shiftReport.ACTION.LOAD_SUCCESS:
      return {
        report: action.payload
      };

    default:
      return state;
  }
}

export const getShiftReport = (state: State) => state.report;
