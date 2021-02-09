import { createLessonAction, getSingleLessonAction, getAllLessonsAction } from '../actions/lessons.actions';
import { createLessonApi, getSingleLessonApi, getAllLessonsApi } from '../services/lessons.services';

export const watchCreateLesson = {
  ...createLessonAction,
  api: createLessonApi,
};

export const watchGetSingleLesson = {
  ...getSingleLessonAction,
  api: getSingleLessonApi,
};

export const watchGetAllLessons = {
  ...getAllLessonsAction,
  api: getAllLessonsApi
};
