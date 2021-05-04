import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import loading from './loading.reducer';
import error from './error.reducer';
import profile from './profile.reducer';
import lessons from './lessons.reducer';
import chapters from './chapters.reducer';
import sections from './sections.reducer';
import tests from './tests.reducer';
import statistics from './app.reducer';
import comment from './comments.reducer';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const combinedReducers = {
  loading,
  error,
  profile: persistReducer(authPersistConfig, profile),
  lessons,
  chapters,
  sections,
  tests,
  statistics,
  comment
};

export default combineReducers(combinedReducers);
