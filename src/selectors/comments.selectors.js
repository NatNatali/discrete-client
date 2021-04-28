import { createSelector } from 'reselect';
import createErrorSelector from './create.error.selector';
import { addCommentAction } from '../actions/comment.actions';

export const commentState = (state) => state.comment;

export const commentsSelector = createSelector(commentState, comment => comment.comments);
export const addCommentError = createErrorSelector(addCommentAction.actionName);
