import { all, fork } from 'redux-saga/effects';
import { makeSaga } from './makeSaga';
import * as profile from './profile.saga';
import * as lessons from './lessons.saga';
import * as chapters from './chapters.saga';
import * as sections from './sections.saga';
import * as tests from './test.saga';
import * as app from './app.saga';
import * as comment from './comment.saga';

const combinedSagas = {
  ...profile,
  ...lessons,
  ...chapters,
  ...sections,
  ...tests,
  ...app,
  ...comment,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map(i => fork(makeSaga(i))));
}
