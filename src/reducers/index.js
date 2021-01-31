import { combineReducers } from 'redux';
import loading from './loading.reducer';
import error from './error.reducer';
import profile from './profile.reducer';

const combinedReducers = {
  loading,
  error,
  profile,
};

export default combineReducers(combinedReducers);
