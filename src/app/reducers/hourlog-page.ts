import { createSelector } from 'reselect';
import { HourLog } from '../models/hour-log';
import * as hourLogPage from '../actions/hourlog-page';

export interface State {
  openPanel: number;
};

const initialState: State = {
  openPanel: undefined
};

export function reducer(state = initialState, action: hourLogPage.Actions): State {
  switch (action.type) {
    case hourLogPage.ACTION.OPEN:
      return {
        openPanel: action.payload
      };
    case hourLogPage.ACTION.CLOSE:
      return {
        openPanel: undefined
      };

    default:
      return state;
  }
}

export const getHourLogPageState = (state: State) => state;
export const getHourLogPage = (state: State) => state.openPanel;
