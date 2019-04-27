const reduxActions = require('redux-actions');

exports.loadDataRequest = reduxActions.createAction('LOAD_DATA_REQUEST');
exports.loadDataSuccess = reduxActions.createAction('LOAD_DATA_SUCCESS');
exports.loadDataFailure = reduxActions.createAction('LOAD_DATA_FAILURE');
