import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/learningPage';
import axios from '../../../axios';

const getUserwords = () => axios.get('/userword');

function* getUserwordsWorker() {
  try {
    const response = yield call(getUserwords);
    const userwords = response.data;
    yield put(actions.getUserwordsSuccess(userwords));
  } catch (err) {
    yield put(actions.getUserwordsFailure(err));
  }
}

export function* getUserwordsWatcher() {
  yield takeLatest(actionTypes.GET_USERWORDS_REQUEST, getUserwordsWorker);
}