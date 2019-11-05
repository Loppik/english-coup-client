import { connect } from 'react-redux';
import RESOURCES from '@dtl/resources';
import { callApi } from '@dtl/actions';

// import { NetMethods } from '@/'
import AddWordsPage from '../components/addWordsPage/AddWordsPage';

const mapDispatchToProps = (dispatch: any) => ({
  dispatchAddUserword: (userword: any, onSuccess: any) => dispatch(callApi({
    resource: RESOURCES.ADD_USERWORD,
    type: 'post',
    url: '/userwords',
    content: userword,
    onSuccess,
  })),
});

export default connect(null, mapDispatchToProps)(AddWordsPage);
