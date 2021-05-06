import produce from 'immer';

import { getProfileAction, logOutAction } from '../actions/profile.actions';

export const defaultState = {
  type: '',
  message: '',
  number: null,
  isAuth: false,
};

const profile = produce((state, action) => {
  switch (action.type) {
    case getProfileAction.requestTypes.SUCCESS:
      state.type = action.userType;
      state.number = action.id;
      state.message = action.message;
      state.isAuth = true;
      break;
    case getProfileAction.requestTypes.FAILURE:
      state.message = action.message;
      break;
    case logOutAction.actionName: {
      state.isAuth = false;
      break;
    }
    default:
      break;
  }
}, defaultState);

export default profile;
