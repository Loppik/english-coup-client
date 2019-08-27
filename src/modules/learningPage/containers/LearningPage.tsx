import { connect } from 'react-redux';
import LearningPage from '../components/learningPage/LearningPage';
import { getUserwords, sendLearnedWords } from '../api';

const mapStateToProps = state => ({
  learningWords: state.data.learningWords.data,
  isLoading: state.data.learningWords.isLoading,
  isError: state.data.learningWords.isError,
});

const mapDispatchToProps = {
  dispatchGetUserwords: getUserwords,
  dispatchFinishLearning: sendLearnedWords, 
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningPage);