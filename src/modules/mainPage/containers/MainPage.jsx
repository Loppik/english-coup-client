import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainPage from '../components/mainPage/MainPage';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));