import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import learningWordsReducer from '../modules/learningPage/reducers/learningPage';
import userLoginReducer from '../modules/login/reducer';

export default combineReducers({
  learningWords: learningWordsReducer,
  user: userLoginReducer,
  form: formReducer,
});