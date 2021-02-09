import { createSelector } from 'reselect';

export const lessonsState = (state) => state.lessons;

export const singleLessonSelector = createSelector(lessonsState, lessons => lessons.lecture);
export const allLessonSelector = createSelector(lessonsState, lessons => lessons.allLessons);
