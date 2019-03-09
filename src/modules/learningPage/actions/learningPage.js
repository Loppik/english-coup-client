import * as actionTypes from './actionTypes';

export const getUserwordsRequest = () => ({
  type: actionTypes.GET_USERWORDS_REQUEST,
});

export const getUserwordsSuccess = userwords => ({
  type: actionTypes.GET_USERWORDS_SUCCESS,
  userwords,
});

export const getUserwordsFailure = err => ({
  type: actionTypes.GET_USERWORDS_FAILURE,
  err,
});
