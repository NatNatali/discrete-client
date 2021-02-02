import { combineReducers } from 'redux';
import loading from './loading.reducer';
import error from './error.reducer';
import profile from './profile.reducer';
import lessons from './lessons.reducer';

const combinedReducers = {
  loading,
  error,
  profile,
  lessons,
};

export default combineReducers(combinedReducers);
