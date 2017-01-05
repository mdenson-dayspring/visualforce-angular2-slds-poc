import { Action } from '@ngrx/store';
import { ShiftReport } from '../models/shift-report';
import { HourLog } from '../models/hour-log';
import { type } from '../util';

export const ACTION = {
  LOAD:         type('[ShiftReport] Load'),
  LOAD_SUCCESS: type('[ShiftReport] Load Success'),
  SAVE_HOURLOG: type('[ShiftReport] Save Hour Log')
};

export class LoadAction implements Action {
  type = ACTION.LOAD;
}

export class LoadSuccessAction implements Action {
  type = ACTION.LOAD_SUCCESS;

  constructor(public payload: ShiftReport) { }
}

export class SaveHourLogAction implements Action {
  type = ACTION.SAVE_HOURLOG;

  constructor(public payload: HourLog) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | SaveHourLogAction;
