import { all } from 'redux-saga/effects';
import { callApiWatcher } from './dataLoader/sagas';

export default function* rootSaga() {
  yield all([
    callApiWatcher(),
  ])
}