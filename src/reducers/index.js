import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import learningWordsReducer from '../modules/learningPage/reducers/learningPage';

export default combineReducers({
  learningWords: learningWordsReducer,
  form: formReducer,
});