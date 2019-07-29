import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Registration from '../components/registration/Registration';
import * as Resource from '@/dataLoader/resources';
import { callApi } from '@/dataLoader/actions';

const mapStateToProps = state => ({
  isError: state.data.userTokens.isError,
});

const mapDispatchToProps = dispatch => ({
  dispatchSignUp: (signUpData, onSuccess) => dispatch(callApi({
    resource: Resource.UserTokens,
    type: 'post',
    url: '/signup',
    content: signUpData,
    onSuccess,
  }))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));