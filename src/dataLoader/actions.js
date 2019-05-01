const reduxActions = require('redux-actions');

exports.callApi = reduxActions.createAction('CALL_API');
exports.callApiSuccess = reduxActions.createAction('CALL_API_SUCCESS');
exports.callApiFailure = reduxActions.createAction('CALL_API_FAILURE');
