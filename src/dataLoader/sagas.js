import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import axios from '../axios';

const requestType = (type) => {
  switch (type) {
    case 'get': return axios.get
    case 'post': return axios.post
    case 'put': return axios.put
    default: return axios.get
  }
}

function* callApi(action) {
  try {
    const response = yield call(requestType(action.payload.type), action.payload.url, action.payload.content);
    yield put(actions.callApiSuccess({data: response.data, resource: action.payload.resource}));
    if (action.payload.onSuccess) {
      yield put(action.payload.onSuccess);
    }
    if (action.payload.onFail) {
      yield put(action.payload.onFail);
    }
  } catch (err) {
    yield put(actions.callApiFail({err: err.response.data, resource: action.payload.resource}));
  }
}

export function* callApiWatcher() {
  yield takeEvery(actions.callApi, callApi);
}