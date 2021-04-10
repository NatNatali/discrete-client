import { combineReducers } from 'redux';
import loading from './loading.reducer';
import error from './error.reducer';
import profile from './profile.reducer';
import lessons from './lessons.reducer';
import chapters from './chapters.reducer';
import sections from './sections.reducer';
import tests from './tests.reducer';

const combinedReducers = {
  loading,
  error,
  profile,
  lessons,
  chapters,
  sections,
  tests
};

export default combineReducers(combinedReducers);
