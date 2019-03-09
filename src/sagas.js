import { all } from 'redux-saga/effects';
import { getUserwordsWatcher } from './modules/learningPage/sagas';

export default function* rootSaga() {
  yield all([
    getUserwordsWatcher(),
  ])
}