import { createSelector } from 'reselect';

const getError = state => state.error;

const createErrorSelector = loadActionType =>
  createSelector(getError, error => !!error[loadActionType]);

export default createErrorSelector;
