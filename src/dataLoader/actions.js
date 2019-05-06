const reduxActions = require('redux-actions');

exports.callApi = reduxActions.createAction('CALL_API');
exports.callApiSuccess = reduxActions.createAction('CALL_API_SUCCESS');
exports.callApiFail = reduxActions.createAction('CALL_API_FAIL');

exports.setTokens = reduxActions.createAction('SET_TOKENS');
