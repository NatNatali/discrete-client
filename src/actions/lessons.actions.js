import { makeRequestAction } from './action-generator';
import { errorToast, successToast } from '../Shared/Notification';
import history from '../histoty';

export const createLessonAction = makeRequestAction('CREATE_LESSON', {
  onSuccess(params, response) {
    successToast('Lesson was created successfully');
    history.push('/lesson');
    return response;
  },
  onFailure(params, error) {
    errorToast('Something went wrong');
    return error;
  }
});

export const getSingleLessonAction = makeRequestAction('GET_SINGLE_LESSON', {
  onSuccess(params, response) {
    return {
      lecture: response.lecture,
    };
  },
  onFailure(params, error) {
    return error;
  }
});

export const getAllLessonsAction = makeRequestAction('GET_ALL_LESSONS', {
  onSuccess(params, response) {
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});
