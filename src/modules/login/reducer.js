import { handleActions } from 'redux-actions';
import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  data: null,
  token: null,
  isLoading: false,
  isError: false,
}

const loginUserRequest = state => ({
  ...state,
  isLoading: true,
});

const loginUserSuccess = (state, action) => ({
  ...state,
  data: action.data,
  token: action.token,
  isLoading: false,
  isError: false,
});

const loginUserFailure = (state, action) => ({
  ...state,
  isLoading: false,
  isError: action.err,
});

export default handleActions({
  [actionTypes.LOGIN_USER_REQUEST]: loginUserRequest,
  [actionTypes.LOGIN_USER_SUCCESS]: loginUserSuccess,
  [actionTypes.LOGIN_USER_FAILURE]: loginUserFailure, 
}, INITIAL_STATE);