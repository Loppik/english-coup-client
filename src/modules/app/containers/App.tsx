import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Resources from '@dtl/resources';
import { callApi, setTokens } from '@dtl/actions';
import App from '../components/app/App';

const mapDispatchToProps = (dispatch: any) => ({
  // dispatchGetUserData: (history) => dispatch(getUserData(history)),
  dispatchGetUserData: () => dispatch(callApi({
    resource: Resources.UserData,
    type: 'get',
    url: '/users',
  })),

  dispatchSetTokens: (tokens: any) => dispatch(setTokens(tokens)),
});

export default withRouter(connect(null, mapDispatchToProps)(App));