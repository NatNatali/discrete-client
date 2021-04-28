import { makeRequestAction } from './action-generator';

export const addCommentAction = makeRequestAction('ADD_COMMENT', {
  onSuccess(params, response) {
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});

export const getCommentsAction = makeRequestAction('GET_COMMENTS', {
  onSuccess(params, response) {
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});
