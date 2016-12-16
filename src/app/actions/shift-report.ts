import { Action } from '@ngrx/store';
import { ShiftReport } from '../models/shift-report';
import { type } from '../util';

export const ACTION = {
  LOAD:         type('[ShiftReport] Load'),
  LOAD_SUCCESS: type('[ShiftReport] Load Success')
};

export class LoadAction implements Action {
  type = ACTION.LOAD;
}

export class LoadSuccessAction implements Action {
  type = ACTION.LOAD_SUCCESS;

  constructor(public payload: ShiftReport) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction;
