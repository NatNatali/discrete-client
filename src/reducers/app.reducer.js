import produce from 'immer';

import { getStatisticsAction } from '../actions/app.actions';

export const defaultState = {
  statistics: {
    usersCount: 1,
    lessonsCount: 1,
    visitsCount: 1,
  }
};

const statistics = produce((state, action) => {
  switch (action.type) {
    case getStatisticsAction.requestTypes.SUCCESS :
      state.statistics = {
        usersCount: action.statistics.users,
        lessonsCount: action.statistics.lessons,
        visitsCount: action.statistics.visits,
      };
      break;
    default:
      break;
  }
}, defaultState);

export default statistics;
