import produce from 'immer';

import { getSectionsAction } from '../actions/sections.actions';

export const defaultState = {
  sections: []
};

const chapters = produce((state, action) => {
  switch (action.type) {
    case getSectionsAction.requestTypes.SUCCESS :
      state.sections = action.sections;
      break;
    default:
      break;
  }
}, defaultState);

export default chapters;
