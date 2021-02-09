import { makeRequestAction } from './action-generator';

export const getChaptersAction = makeRequestAction('GET_CHAPTERS', {
  onSuccess(params, response) {
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});

export const createChapterAction = makeRequestAction('CREATE_CHAPTER', {
  onSuccess(params, response) {
    if (params.onSuccess) {
      params.onSuccess();
    }
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});
