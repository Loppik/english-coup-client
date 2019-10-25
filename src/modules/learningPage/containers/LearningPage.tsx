import { connect } from 'react-redux';
import LearningPage from '../components/learningPage/LearningPage';
import { getLearnUserwords, sendLearnedWords } from '../api';

const mapStateToProps = state => ({
  learningWords: state.data.learningWords.data,
  isLoading: state.data.learningWords.isLoading,
  isError: state.data.learningWords.isError,
});

const mapDispatchToProps = {
  dispatchGetLearnUserwords: getLearnUserwords,
  dispatchFinishLearning: sendLearnedWords, 
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningPage);
