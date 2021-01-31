import { makeRequestAction } from './action-generator';
import { successToast } from '../Shared/Notification';
import history from '../histoty';

export const getProfileAction = makeRequestAction('GET_PROFILE', {
  onSuccess(_, response){
    successToast('You logged in successfully');
    localStorage.setItem('token', response.token);
    if (response.type === 'admin') {
      history.push('/admin');
    } else {
      history.push('/');
    }
    return {
      type: response.type,
    };
  },
  onFailure(_, error) {
    console.log(error);
  }
});
