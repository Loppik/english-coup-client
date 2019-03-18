import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../components/login/Login';
import { loginUser } from '../actions';

const mapStateToProps = state => ({
  isError: state.user.isError,
});

const mapDispatchToProps = dispatch => ({
  dispatchLoginUser: (dataObject, history) => dispatch(loginUser(dataObject, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

