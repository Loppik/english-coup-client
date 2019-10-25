import { connect } from 'react-redux';

import App from '../components/app/App';

import { withRouter } from 'react-router-dom';
import RESOURCES from '@dtl/resources';
import { callApi, setTokens } from '@dtl/actions';

const mapDispatchToProps = (dispatch: any) => ({
  // dispatchGetUserData: (history) => dispatch(getUserData(history)),
  dispatchGetUserData: () => dispatch(callApi({
    resource: RESOURCES.USER_DATA,
    type: 'get',
    url: '/users',
  })),

  dispatchSetTokens: (tokens: any) => dispatch(setTokens(tokens)),
});

// @ts-ignore
export default withRouter(connect(null, mapDispatchToProps)(App));
