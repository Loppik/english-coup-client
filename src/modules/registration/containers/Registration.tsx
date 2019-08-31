import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import Registration from '../components/registration/Registration';
import RESOURCES from '@dtl/resources';
import { callApi } from '@dtl/actions';

const mapStateToProps = state => ({
  isError: state.data.userTokens.isError,
});

const mapDispatchToProps = dispatch => ({
  dispatchSignUp: (signUpData, onSuccess) => dispatch(callApi({
    resource: RESOURCES.USER_TOKENS,
    type: 'post',
    url: '/signup',
    content: signUpData,
    onSuccess,
  }))
});

export default compose(
  reduxForm({ form: 'reg' }),
  connect(mapStateToProps, mapDispatchToProps)
)(Registration); // THINK: can't use just component because import not as ReduxForm but written as ReduxForm, if you import component you nedd create new ReduxForm