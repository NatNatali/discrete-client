import { createSelector } from 'reselect';

export const statisticsState = (state) => state.statistics;

export const chaptersSelector = createSelector(statisticsState,
  statistics => statistics.statistics);
