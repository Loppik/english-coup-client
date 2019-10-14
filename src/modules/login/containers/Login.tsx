import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import RESOURCES from '@dtl/resources';
import { callApi } from '@dtl/actions';
import Login from '../components/login/Login';
import {ComponentClass} from 'react';

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

export default compose(
  reduxForm({ form: 'login' }),
  connect(mapStateToProps, mapDispatchToProps)
)(Login) as ComponentClass;
