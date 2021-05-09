import produce from 'immer';
import {
  getSingleLessonAction,
  getAllLessonsAction,
  getLessonUsersAction
} from '../actions/lessons.actions';

export const defaultState = {
  lecture: '',
  allLessons: [],
  lessonUsers: [],
};

const lessons = produce((state, action) => {
  switch (action.type) {
    case getSingleLessonAction.requestTypes.SUCCESS:
      state.lecture = action.lecture;
      break;
    case getAllLessonsAction.requestTypes.SUCCESS:
      state.allLessons = action.allLessons;
      break;
    case getLessonUsersAction.requestTypes.SUCCESS:
      state.lessonUsers = action.users;
      break;
    default:
      break;
  }
}, defaultState);

export default lessons;
