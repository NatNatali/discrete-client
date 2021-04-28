import { makeRequestAction } from './action-generator';

export const addVisitCountAction = makeRequestAction('ADD_VISIT_COUNT', {
  onSuccess(params, response) {
    localStorage.setItem('visited', 'true');
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});

export const getStatisticsAction = makeRequestAction('GET_STATISTICS', {
  onSuccess(params, response) {
    localStorage.setItem('visited', 'true');
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});
