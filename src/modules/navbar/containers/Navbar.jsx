import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  userData: state.user.data,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));