import { connect } from 'react-redux';
import * as Resource from '@/dataLoader/resources';
import { callApi } from '@/dataLoader/actions';
import AddWordsPage from '../components/addWordsPage/AddWordsPage';

const mapDispatchToProps = dispatch => ({
  dispatchAddUserword: (userword, onSuccess) => dispatch(callApi({
    resource: Resource.AddUserword,
    type: 'post',
    url: '/userwords',
    content: userword,
    onSuccess,
  })),
});

export default connect(null, mapDispatchToProps)(AddWordsPage);