import { combineReducers } from 'redux';
import loading from './loading.reducer';
import error from './error.reducer';
import profile from './profile.reducer';
import lessons from './lessons.reducer';
import chapters from './chapters.reducer';
import sections from './sections.reducer';
import tests from './tests.reducer';
import statistics from './app.reducer';
import comment from './comments.reducer';

const combinedReducers = {
  loading,
  error,
  profile,
  lessons,
  chapters,
  sections,
  tests,
  statistics,
  comment
};

export default combineReducers(combinedReducers);
