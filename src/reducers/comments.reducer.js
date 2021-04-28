import produce from 'immer';
import { getCommentsAction } from '../actions/comment.actions';

export const defaultState = {
  comments: [],
};

const comment = produce((state, action) => {
  switch (action.type) {
    case getCommentsAction.requestTypes.SUCCESS:
      state.comments = action.comments;
      break;
    default:
      break;
  }
}, defaultState);

export default comment;
