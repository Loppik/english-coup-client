import { all } from 'redux-saga/effects';
import { callApiWatcher } from '@dtl/sagas';

export default function* rootSaga() {
  yield all([
    callApiWatcher(),
  ])
}