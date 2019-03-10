import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  isError: false,
}

const getUserwordsRequest = state => ({
  ...state,
  isLoading: true,
});

const getUserwordsSuccess = (state, action) => ({
  ...state,
  items: action.userwords,
  isLoading: false,
  isError: false,
});

const getUserwordsFailure = (state, action) => ({
  ...state,
  isLoading: false,
  isError: action.err,
});

export default handleActions({
  [actionTypes.GET_USERWORDS_REQUEST]: getUserwordsRequest,
  [actionTypes.GET_USERWORDS_SUCCESS]: getUserwordsSuccess,
  [actionTypes.GET_USERWORDS_FAILURE]: getUserwordsFailure,
}, INITIAL_STATE);