import { call, put, select } from 'redux-saga/effects';
import { getChaptersAction, createChapterAction } from '../actions/chapters.actions';
import { getChaptersApi, createChapterApi } from '../services/chapters.services';
import { createChapterError } from '../selectors/chapters.selectors';
import { errorToast } from '../Shared/Notification';

export const watchGetChaptersSaga = {
  ...getChaptersAction,
  api: getChaptersApi,
};

export const watchCreateChapterSaga = {
  ...createChapterAction,
  api: createChapterApi,
  * load(fetch, action) {
    yield call(fetch, action);
    const errorCreateChapter = yield select(createChapterError);
    if (!errorCreateChapter) {
      yield put(getChaptersAction.request());
    } else {
      errorToast('Chapter creation failure');
    }
  }
};
