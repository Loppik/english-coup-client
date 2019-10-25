import { ComponentClass } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import Login from '../components/login/Login';

import { selectUserTokens, selectIsUserTokensError } from '@mdl/login/selectors';
import RESOURCES from '@dtl/resources';
import { callApi } from '@dtl/actions';

const mapStateToProps = createStructuredSelector({
  userTokens: selectUserTokens,
  isUserTokensError: selectIsUserTokensError
});

const mapDispatchToProps = dispatch => ({
  // dispatchLoginUser: (dataObject, history) => dispatch(loginUser(dataObject, history)),
  dispatchSignIn: (signInData, onSuccess) => dispatch(callApi({
    resource: RESOURCES.USER_TOKENS,
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
