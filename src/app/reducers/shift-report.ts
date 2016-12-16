import { createSelector } from 'reselect';
import { ShiftReport } from '../models/shift-report';
import * as shiftReport from '../actions/shift-report';

export interface State {
  id: string;
  report: ShiftReport;
};

const initialState: State = {
  id: '',
  report: undefined
};

export function reducer(state = initialState, action: shiftReport.Actions): State {
  switch (action.type) {
    case shiftReport.ACTION.LOAD:
      return state;

    case shiftReport.ACTION.LOAD_SUCCESS:
      console.log(action.payload);
      return {
        id: '',
        report: action.payload
      };

    default:
      return state;
  }
}

export const getShiftReport = (state: State) => state.report;