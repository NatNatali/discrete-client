import produce from 'immer';

import { getSectionTestsAction, submitTestAction } from '../actions/test.actions';

export const defaultState = {
  test: [],
  correctCount: null,
  correctAnswers: [],
};

const tests = produce((state, action) => {
  console.log('action', action);
  switch (action.type) {
    case getSectionTestsAction.requestTypes.SUCCESS:
      state.test = action.tests;
      break;
    case submitTestAction.requestTypes.SUCCESS:
      state.correctAnswers = action.correctAnswers;
      state.correctCount = action.correctCount;
      break;
    default:
      break;
  }
}, defaultState);

export default tests;
