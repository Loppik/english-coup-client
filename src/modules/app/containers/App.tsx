import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Resource from '@/dataLoader/resources';
import { callApi, setTokens } from '@/dataLoader/actions';
import App from '../components/app/App';

const mapDispatchToProps = (dispatch: any) => ({
  // dispatchGetUserData: (history) => dispatch(getUserData(history)),
  dispatchGetUserData: () => dispatch(callApi({
    resource: Resource.UserData,
    type: 'get',
    url: '/users',
  })),

  dispatchSetTokens: (tokens) => dispatch(setTokens(tokens)),
});

export default withRouter(connect(null, mapDispatchToProps)(App));