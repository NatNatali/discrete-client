import produce from 'immer';

import { getSingleLessonAction } from '../actions/lessons.actions';

export const defaultState = {
  lecture: '',
};

const lessons = produce((state, action) => {
  switch (action.type) {
    case getSingleLessonAction.requestTypes.SUCCESS :
      state.lecture = action.lecture;
      break;
    default:
      break;
  }
}, defaultState);

export default lessons;
