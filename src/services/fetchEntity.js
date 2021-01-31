import { put, call, cancelled } from 'redux-saga/effects';
import { CancelToken } from 'axios';
import { showToast } from '../Shared/Notification';
/*
 * entity: {request:fn, success:fn, failure:fn}
 * apiFn: api function
 * id: data to pass to apiFn
 *
 * will dispatch the entity actions on request, success and failure of the api
 * */
export default function* fetchEntity(entity, apiFn, actionObj, toast) {
  const source = CancelToken.source();
  yield put(entity.request(actionObj));
  try {
    const { data } = yield call(apiFn, actionObj, source.token);
    yield put(entity.success(actionObj, data));
    if (toast?.success) {
      yield showToast('success', toast.title || 'Success', toast.message);
    }
  } catch (error) {
    // Don't remove this. Sometimes errors are not stored in redux. This will help in that cases.
    console.log('Fetching process Error -->', error);
    yield put(
      entity.failure(actionObj, {
        error: error.response ? error.response.data : error,
        isError: true,
      }),
    );
    if (toast?.error) {
      yield showToast('error', toast.title || 'Error', toast.message || 'Something went wrong');
    }
  } finally {
    if (yield cancelled()) {
      yield source.cancel('Request canceled!');
    }
  }
}
