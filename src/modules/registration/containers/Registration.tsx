import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));