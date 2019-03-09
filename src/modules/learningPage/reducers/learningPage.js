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

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.GET_USERWORDS_REQUEST: 
      return getUserwordsRequest(state);
    case actionTypes.GET_USERWORDS_SUCCESS:
      return getUserwordsSuccess(state, action);
    case actionTypes.GET_USERWORDS_FAILURE:
      return getUserwordsFailure(state, action);
    default:
      return state;
  }
}