import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import axios from '../axios';

function* loadData(action) {
  try {
    const response = yield call(axios.get, action.payload.url);
    yield put(actions.loadDataSuccess({data: response.data, resource: action.payload.resource}));
  } catch (err) {
    yield put(actions.loadDataFailure({err, resource: action.payload.resource}));
  }
}

export function* loadDataWatcher() {
  yield takeEvery(actions.loadDataRequest, loadData);
}