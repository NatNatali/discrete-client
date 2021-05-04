import { makeRequestAction } from './action-generator';
import history from '../histoty';

export const getSectionTestsAction = makeRequestAction('GET_TESTS', {
  onSuccess(params, response) {
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});

export const createTestAction = makeRequestAction('CREATE_TEST', {
  onSuccess(params, response) {
    history.push('/lesson');
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});

export const submitTestAction = makeRequestAction('SUBMIT_TEST', {
  onSuccess(params, response) {
    return {
      correctCount: response.data.correctAnswersCount,
      correctAnswers: response.data.correctOptions,
    };
  },
  onFailure(params, error) {
    return error;
  }
});
