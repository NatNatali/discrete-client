import { addVisitCountAction, getStatisticsAction } from '../actions/app.actions';
import { addVisitCountApi, getStatisticsApi } from '../services/app.services';

export const watchAddVisitsSaga = {
  ...addVisitCountAction,
  api: addVisitCountApi,
};

export const watchGetStatisticsSaga = {
  ...getStatisticsAction,
  api: getStatisticsApi,
};
