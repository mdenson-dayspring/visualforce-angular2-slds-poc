import { Action } from '@ngrx/store';
import { type } from '../util';

import { HourLog } from '../models/hour-log';

export const ACTION = {
  EDIT_PAGE:  type('[HourLog] Edit Page'),

  OPEN:       type('[HourLog] Open'),
  CLOSE:      type('[HourLog] Close'),
  SAVE:       type('[HourLog] Save')
};

export class EditPageAction implements Action {
  type = ACTION.EDIT_PAGE;
}

export class OpenAction implements Action {
  type = ACTION.OPEN;

  constructor(public payload: number) { }
}
export class CloseAction implements Action {
  type = ACTION.CLOSE;

  constructor(public payload: number) { }
}
export class SaveAction implements Action {
  type = ACTION.SAVE;

  constructor(public payload: HourLog) { }
}

export type Actions
  = OpenAction
  | CloseAction
  | SaveAction
  | EditPageAction;
