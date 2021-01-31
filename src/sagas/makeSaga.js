import { takeLatest, call, cancel } from 'redux-saga/effects';
import fetchEntity from '../services/fetchEntity';

/**
 * Make saga
 * @param actions
 * @param actionName
 * @param cancelActionName
 * @param api
 * @param load function* (fetch, data) {
 *               yield call(fetch, data);
 *             }
 * @param take { takeLatest, takeEvery }
 * @param toast { text: 'show alert message', type: 'success' }
 * @returns {Function}
 */
export const makeSaga = ({
  actions,
  actionName,
  cancelActionName,
  api = () => {},
  load = null,
  take = takeLatest,
  toast = {},
}) => {
  const fetch = fetchEntity.bind(null, actions, api);
  function* loadRequest(data) {
    yield call(fetch, data, toast);
  }
  return function*() {
    const actionWatcher = load === null ? loadRequest : load.bind(null, fetch);
    let watcher = yield take(actionName, actionWatcher);
    if (cancelActionName) {
      yield take(cancelActionName, function*() {
        yield cancel(watcher);
        watcher = yield take(actionName, actionWatcher);
      });
    }
  };
};
