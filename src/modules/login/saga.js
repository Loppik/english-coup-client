import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import axios from '../../axios';

function* loginUserWorker(dataObject) {
  try {
    const response = yield call(axios.post('/signin', dataObject));
    const user = response.data;
    yield put(actions.loginUserSuccess(user));
  } catch (err) {
    yield put(actions.loginUserFailure(err));
  }
}

export function* loginUserWatcher(dataObject) {
  yield takeLatest(actionTypes.LOGIN_USER_REQUEST, loginUserWorker);
}