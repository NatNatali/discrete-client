export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/**
 * @param {String} base
 * @returns {{ SUCCESS: String, REQUEST: String, FAILURE: String}}
 */
export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

export const action = (type, payload = {}) => ({ type, ...payload });

/**
 *
 * @param {String} name
 * @param {Object} options
 * @returns {GenerateAction}
 */
export const makeRequestAction = (name, options) => new GenerateAction(name, options);

export const makeAction = name => new GenerateAction(name, { advanced: false });

class GenerateAction {
  constructor(name, options) {
    if (!name) {
      throw Error('Action Name must be specified');
    }
    this.name = name;
    this.options = options || {};
    this.options.advanced = this.options.advanced == null ? true : this.options.advanced;
    this.requestTypes = createRequestTypes(this.name);
    return this.generate();
  }

  get loadActionName() {
    return this.options.advanced ? `LOAD_${this.name}` : this.name;
  }

  get cancelActionName() {
    return `${this.loadActionName}_CANCEL`;
  }

  onFailure(params, error) {
    return {
      error,
    };
  }

  // eslint-disable-next-line no-unused-vars
  onSuccess(params, response) {}
  // eslint-disable-next-line no-unused-vars
  onRequest(params, response) {}

  advancedResolveFunction = ({ params }, response) => (
    action(
      this.requestTypes[SUCCESS],
      this.options.hasOwnProperty('onSuccess')
        ? this.options.onSuccess(params, response)
        : this.onSuccess(params, response),
    )
  );

  onRequestFunction = ({ params }, response) => (
    action(
      this.requestTypes[REQUEST],
      this.options.hasOwnProperty('onRequest')
        ? this.options.onRequest(params, response)
        : this.onRequest(params, response),
    )
  );

  onFailureFunction = ({ params }, error) => (
    action(
      this.requestTypes[FAILURE],
      this.options.hasOwnProperty('onFailure')
        ? this.options.onFailure(params, error)
        : this.onFailure(params, error),
    )
  );


  create = () => ({
    request: this.onRequestFunction,
    success: this.advancedResolveFunction,
    failure: this.onFailureFunction,
  });

  /**
   *
   * @returns {{
   * cancel: (function(): {type: *}),
   * request: (function(*=): {type: *}),
   * actions: ({request: function({params?: *}): {type: *},
   * success: function({params?: *}, *=): {type: *},
   * failure: function({params?: *}, *=): {type: *}}),
   * cancelActionName: string,
   * actionName: string,
   * requestTypes: (*)}}
   */
  generate = () => ({
    actionName: this.loadActionName,
    requestTypes: this.options.advanced ? this.requestTypes : {},
    actions: this.options.advanced ? this.create() : {},
    request: (data = {}) =>
      action(this.loadActionName, {
        params: Array.isArray(data) ? data : { ...data },
      }),
    cancelActionName: this.cancelActionName,
    cancel: () => action(this.cancelActionName),
  });
}
