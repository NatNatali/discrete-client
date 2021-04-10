import { createSelector } from 'reselect';
export const testsState = (state) => state.tests;

export const testSelector = createSelector(testsState, tests => tests.test);
export const correctAnswersCountSelector = createSelector(testsState, tests => tests.correctCount);
export const correctAnswersSelector = createSelector(testsState, tests => tests.correctAnswers);
