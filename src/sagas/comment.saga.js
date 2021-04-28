import { call, put, select } from 'redux-saga/effects';
import { errorToast } from '../Shared/Notification';
import { addCommentAction, getCommentsAction } from '../actions/comment.actions';
import { addCommentApi, getCommentsApi } from '../services/comment.services';
import { addCommentError } from '../selectors/comments.selectors';

export const watchAddCommentSaga = {
  ...addCommentAction,
  api: addCommentApi,
  * load(fetch, action) {
    yield call(fetch, action);
    const errorAddComment = yield select(addCommentError);
    if (!errorAddComment) {
      yield put(getCommentsAction.request({ chapterId: action.params.chapterId }));
    } else {
      errorToast('Section creation failure');
    }
  }
};

export const watchGetCommentsSaga = {
  ...getCommentsAction,
  api: getCommentsApi,
};
