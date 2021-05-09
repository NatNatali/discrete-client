import { makeAction, makeRequestAction } from './action-generator';
import { errorToast, successToast } from '../Shared/Notification';
import history from '../histoty';

export const getProfileAction = makeRequestAction('GET_PROFILE', {
  onSuccess(_, response){
    successToast('You logged in successfully');
    localStorage.setItem('token', response.token);
    history.push('/');
    return {
      userType: response.type,
      id: response.id,
    };
  },
  onFailure(_, error) {
    return {
      error
    };
  }
});

export const signUpAction = makeRequestAction('SIGN_UP', {
  onSuccess(params, response){
    history.push('/sign-in');
    successToast('Your account was created Successfully!');
    return {
      response,
    };
  },
  onFailure(params, error) {
    errorToast('Something went wrong!');
    return {
      error
    };
  }
});

export const logOutAction = makeAction('LOG_OUT');
