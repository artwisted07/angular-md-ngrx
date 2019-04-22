import { Action } from '@ngrx/store';

export enum UserActionTypes {

  ChangeUserName = '[User] Change User Name'
}

export class ChangeUserName implements Action {
  readonly type = UserActionTypes.ChangeUserName;
  constructor(public payload) {}
}


export type UserActions = ChangeUserName;
