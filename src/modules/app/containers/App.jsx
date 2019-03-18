import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/app/App';

import { getUserData } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchGetUserData: () => dispatch(getUserData()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));