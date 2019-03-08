import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LearningPage from '../components/learningPage/LearningPage';
import { getUserwords } from '../actions/learningPage';

const mapStateToProps = state => ({
  learningWords: state.learningWords.items,
  isLoading: state.learningWords.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetUserwords: () => dispatch(getUserwords()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LearningPage));