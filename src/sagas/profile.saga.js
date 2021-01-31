import { getProfileAction } from '../actions/profile.actions';
import { getProfileApi } from '../services/profile.services';

export const watchForgotPassword = {
  ...getProfileAction,
  api: getProfileApi,
};
