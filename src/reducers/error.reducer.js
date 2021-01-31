export default (state = {}, action) => {
  const { type, error } = action;
  const matches = /(.*)_(SUCCESS|FAILURE)/.exec(type);
  // not a *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;
  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is has errors or not
    // e.g. will be the error when receiving TODOS_FAILURE
    // and false when receiving TODOS_SUCCESS
    [`LOAD_${requestName}`]:
            requestState === 'SUCCESS' ? false : error,
  };
};
