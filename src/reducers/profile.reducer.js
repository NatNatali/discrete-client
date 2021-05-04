import produce from 'immer';

import { getProfileAction } from '../actions/profile.actions';

export const defaultState = {
  type: '',
  message: '',
  number: null,
};

const profile = produce((state, action) => {
  switch (action.type) {
    case getProfileAction.requestTypes.SUCCESS:
      state.type = action.userType;
      state.number = action.id;
      state.message = action.message;
      break;
    case getProfileAction.requestTypes.FAILURE:
      state.message = action.message;
      break;
    default:
      break;
  }
}, defaultState);

export default profile;
