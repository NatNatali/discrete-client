import produce from 'immer';
import { getSingleLessonAction, getAllLessonsAction } from '../actions/lessons.actions';

export const defaultState = {
  lecture: '',
  allLessons: [],
};

const lessons = produce((state, action) => {
  switch (action.type) {
    case getSingleLessonAction.requestTypes.SUCCESS:
      state.lecture = action.lecture;
      break;
    case getAllLessonsAction.requestTypes.SUCCESS:
      state.allLessons = action.allLessons;
      break;
    default:
      break;
  }
}, defaultState);

export default lessons;
