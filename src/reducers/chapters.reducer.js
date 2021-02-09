import produce from 'immer';

import { getChaptersAction } from '../actions/chapters.actions';

export const defaultState = {
  chapters: []
};

const chapters = produce((state, action) => {
  switch (action.type) {
    case getChaptersAction.requestTypes.SUCCESS :
      state.chapters = action.chapters;
      break;
    default:
      break;
  }
}, defaultState);

export default chapters;
