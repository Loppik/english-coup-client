import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LearningPage from '../components/learningPage/LearningPage';
import Resources from '@dtl/resources';
import { callApi } from '@dtl/actions';

const mapStateToProps = state => ({
  learningWords: state.data.learningWords.data,
  isLoading: state.data.learningWords.isLoading,
  isError: state.data.learningWords.isError,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetUserwords: () => dispatch(callApi({
    resource: Resources.LearningWords,
    type: 'get',
    url: '/userwords'
  })),

  dispatchFinishLearning: (learningWords) => dispatch(callApi({
    resource: Resources.LearningWords,
    type: 'put',
    url: '/userwords',
    content: learningWords,
  })) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LearningPage));