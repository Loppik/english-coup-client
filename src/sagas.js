import { all } from 'redux-saga/effects';
import { loadDataWatcher } from './dataLoader/sagas';

export default function* rootSaga() {
  yield all([
    loadDataWatcher(),
  ])
}