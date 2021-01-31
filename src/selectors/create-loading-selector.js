import { createSelector } from 'reselect';

const getLoading = state => state.loading;

const createLoadingSelector = loadActionType =>
  createSelector(getLoading, loading => !!loading[loadActionType]);

export default createLoadingSelector;
