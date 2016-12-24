import { createSelector } from 'reselect';
import { HourLog } from '../models/hour-log';
import * as hourLogPage from '../actions/hourlog-page';

export interface State {
  readOnly: boolean;
  openRow: number;
};

const initialState: State = {
  readOnly: undefined,
  openRow: undefined
};

export function reducer(state = initialState, action: hourLogPage.Actions): State {
  switch (action.type) {
    case hourLogPage.ACTION.EDIT_PAGE:
      return {
        readOnly: false,
        openRow: undefined
      };

    case hourLogPage.ACTION.OPEN:
      return {
        readOnly: state.readOnly,
        openRow: action.payload
      };
    case hourLogPage.ACTION.CLOSE:
      return {
        readOnly: state.readOnly,
        openRow: undefined
      };

    default:
      return state;
  }
}

export const getHourLogPageState = (state: State) => state;
