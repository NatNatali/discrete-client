import {
  createTestAction,
  getSectionTestsAction,
  submitTestAction
} from '../actions/test.actions';
import {
  createTestApi,
  getSectionTestsApi,
  submitTestApi,
} from '../services/test.services';

export const watchGetTestsSaga = {
  ...getSectionTestsAction,
  api: getSectionTestsApi
};

export const watchCreateTestSaga = {
  ...createTestAction,
  api: createTestApi,
};

export const watchSubmitTestSaga = {
  ...submitTestAction,
  api: submitTestApi,
};
