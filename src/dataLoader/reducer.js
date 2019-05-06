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

const callApi = (state, action) => {
  const path = action.payload.resource;
  return {
    ...state,
    [path]: {
      isLoading: true,
    }
  };
}

const callApiSuccess = (state, action) => {
  const path = action.payload.resource;
  return {
    ...state,
    [path]: {
      data: action.payload.data,
      isLoading: false,
      isError: false,
    },
  };
}

const callApiFail = (state, action) => {
  const path = action.payload.resource;
  return ({
    ...state,
    [path]: {
      isError: action.payload.err.msg, 
      isLoading: false,
    }
  });
}

const setTokens = (state, action) => ({
  'userTokens': {
    data: action.data,
  }
})


export default handleActions({
  [actions.callApi]: callApi,
  [actions.callApiSuccess]: callApiSuccess,
  [actions.callApiFail]: callApiFail,
  [actions.setTokens]: setTokens,
}, INITIAL_STATE());