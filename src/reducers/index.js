import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import learningWordsReducer from '../modules/learningPage/reducers/learningPage';
import userLoginReducer from '../modules/login/reducer';
import r from '../dataLoader/reducer';

export default combineReducers({
  user: userLoginReducer,
  data: r,
  form: formReducer,
});