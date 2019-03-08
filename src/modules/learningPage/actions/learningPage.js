import * as actionTypes from './actionTypes';
import axios from '../../../axios';

const getUserwordsRequest = () => ({
  type: actionTypes.GET_USERWORDS_REQUEST,
});

const getUserwordsSuccess = userwords => ({
  type: actionTypes.GET_USERWORDS_SUCCESS,
  userwords,
});

const getUserwordsFailure = err => ({
  type: actionTypes.GET_USERWORDS_FAILURE,
  err,
});

export const getUserwords = () => (dispatch) => {
  dispatch(getUserwordsRequest());
  axios.get('/userword')
    .then((response) => {
      dispatch(getUserwordsSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getUserwordsFailure(err));
    })
};