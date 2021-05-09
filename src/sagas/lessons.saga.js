import {
  createLessonAction,
  getSingleLessonAction,
  getAllLessonsAction,
  passLessonAction,
  getLessonUsersAction,
} from '../actions/lessons.actions';
import {
  createLessonApi,
  getSingleLessonApi,
  getAllLessonsApi,
  passLessonApi,
  getLessonUsersApi,
} from '../services/lessons.services';

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

export const watchPassLesson = {
  ...passLessonAction,
  api: passLessonApi
};

export const watchGetLessonUsers = {
  ...getLessonUsersAction,
  api: getLessonUsersApi
};
