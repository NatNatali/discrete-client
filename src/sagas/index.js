import { all, fork } from 'redux-saga/effects';
import { makeSaga } from './makeSaga';
import * as profile from './profile.saga';
import * as lessons from './lessons.saga';

const combinedSagas = {
  ...profile,
  ...lessons,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map(i => fork(makeSaga(i))));
}
