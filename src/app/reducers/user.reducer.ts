import { UserActions, UserActionTypes } from './../actions/user.actions';

export interface State {
  name: string;
  id: string;
}

export const initialState: State = {
  name: '',
  id: ''
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.ChangeUserName:
    return { ...state, name: action.payload };

    default:
      return state;
  }
}
