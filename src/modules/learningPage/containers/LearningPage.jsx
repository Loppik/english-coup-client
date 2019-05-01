import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LearningPage from '../components/learningPage/LearningPage';
import * as Resource from '../../../dataLoader/resources';
import { callApi } from '../../../dataLoader/actions';

const mapStateToProps = state => ({
  learningWords: state.data.learningWords.data,
  isLoading: state.data.learningWords.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetUserwords: () => dispatch(callApi({
    resource: Resource.LearningWords,
    type: 'get',
    url: '/userwords'
  })),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LearningPage));