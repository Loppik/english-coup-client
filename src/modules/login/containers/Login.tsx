import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Resources from '@dtl/resources';
import { callApi } from '@dtl/actions';
import Login from '../components/login/Login';

const mapStateToProps = state => ({
  isError: state.data.userTokens.isError,
  tokens: state.data.userTokens.data,
});

const mapDispatchToProps = dispatch => ({
  // dispatchLoginUser: (dataObject, history) => dispatch(loginUser(dataObject, history)),
  dispatchSignIn: (signInData, onSuccess) => dispatch(callApi({
    resource: Resources.UserTokens,
    type: 'post',
    url: '/signin',
    content: signInData,
    onSuccess,
  })),

  dispatchGetUserData: () => dispatch(callApi({
    resource: Resources.UserData,
    type: 'get',
    url: '/users',
  }))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

