import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import r from '../dataLoader/reducer';

export default combineReducers({
  data: r,
  form: formReducer,
});