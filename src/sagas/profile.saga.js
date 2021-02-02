import { getProfileAction, signUpAction } from '../actions/profile.actions';
import { getProfileApi, signUpApi } from '../services/profile.services';

export const watchGetProfile = {
  ...getProfileAction,
  api: getProfileApi,
};

export const watchSignUp = {
  ...signUpAction,
  api: signUpApi,
};
