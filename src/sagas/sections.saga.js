import { call, put, select } from 'redux-saga/effects';
import { getSectionsAction, createSectionAction } from '../actions/sections.actions';
import { getSectionsApi, createSectionApi } from '../services/sections.services';
import { createSectionError } from '../selectors/sections.selectors';
import { errorToast } from '../Shared/Notification';

export const watchGetSectionsSaga = {
  ...getSectionsAction,
  api: getSectionsApi,
};

export const watchCreateSectionSaga = {
  ...createSectionAction,
  api: createSectionApi,
  * load(fetch, action) {
    yield call(fetch, action);
    const errorCreateSection = yield select(createSectionError);
    if (!errorCreateSection) {
      yield put(getSectionsAction.request({ chapter_id: action.params.id }));
    } else {
      errorToast('Section creation failure');
    }
  }
};
