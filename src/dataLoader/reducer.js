import { handleActions } from 'redux-actions';
import * as actions from './actions';
import * as Resources from './resources';

const INITIAL_STATE = () => {
  let initState = {};
  Object.keys(Resources).forEach((resource) => {
    initState[Resources[resource]] = {
      data: [],
      isLoading: false,
      isError: false,
    }
  });
  return initState;
}

const loadDataRequest = (state, action) => {
  const path = action.payload.resource;
  return ({
    ...state,
    [path]: {
      isLoading: true,
    }
  });
}

const loadDataSuccess = (state, action) => {
  const path = action.payload.resource;
  return ({
    ...state,
    [path]: {
      data: action.payload.data,
      isLoading: false,
      isError: false,
    },
  });
}

const loadDataFailure = (state, action) => {
  const path = action.payload.resource;
  return ({
    ...state,
    [path]: {
      isError: action.payload.err, 
      isLoading: false,
    }
  });
}

export default handleActions({
  [actions.loadDataRequest]: loadDataRequest,
  [actions.loadDataSuccess]: loadDataSuccess,
  [actions.loadDataFail]: loadDataFailure,
}, INITIAL_STATE);