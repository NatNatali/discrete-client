import { createLessonAction, getSingleLessonAction } from '../actions/lessons.actions';
import { createLessonApi, getSingleLessonApi } from '../services/lessons.services';

export const watchCreateLesson = {
  ...createLessonAction,
  api: createLessonApi,
};

export const watchGetSingleLesson = {
  ...getSingleLessonAction,
  api: getSingleLessonApi,
};
