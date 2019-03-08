import { combineReducers } from 'redux';

import learningWordsReducer from '../modules/learningPage/reducers/learningPage';

export default combineReducers({
  learningWords: learningWordsReducer,
});