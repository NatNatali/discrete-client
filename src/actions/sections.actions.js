import { makeRequestAction } from './action-generator';

export const getSectionsAction = makeRequestAction('GET_SECTIONS', {
  onSuccess(params, response) {
    return response;
  },
  onFailure(params, error) {
    return error;
  }
});

export const createSectionAction = makeRequestAction('CREATE_SECTIONS', {
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
