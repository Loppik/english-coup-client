import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RESOURCES from '@dtl/resources';
import { callApi } from '@dtl/actions';
import Login from '../components/login/Login';

const mapStateToProps = state => ({
  isError: state.data.userTokens.isError,
  tokens: state.data.userTokens.data,
});

const mapDispatchToProps = dispatch => ({
  // dispatchLoginUser: (dataObject, history) => dispatch(loginUser(dataObject, history)),
  dispatchSignIn: (signInData, onSuccess) => dispatch(callApi({
    resource: RESOURCES.USER_DATA,
    type: 'post',
    url: '/signin',
    content: signInData,
    onSuccess,
  })),

  dispatchGetUserData: () => dispatch(callApi({
    resource: RESOURCES.USER_DATA,
    type: 'get',
    url: '/users',
  }))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

