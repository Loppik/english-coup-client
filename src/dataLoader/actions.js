import * as reduxActions from 'redux-actions'

export const callApi = reduxActions.createAction('CALL_API');
export const callApiSuccess = reduxActions.createAction('CALL_API_SUCCESS');
export const callApiFail = reduxActions.createAction('CALL_API_FAIL');
export const setTokens = reduxActions.createAction('SET_TOKENS');
