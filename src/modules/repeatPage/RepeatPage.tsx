import React from 'react';
import { connect } from 'react-redux';

import { IReactRouter } from '@mdl/interfaces';
import { callApi } from '@dtl/actions';
import RESOURCES from '@dtl/resources';

interface IOwnProps {
  dispatchGetCountAllLearnedWords: any;
  countIsLoading: any;
  countAllLearnedWords: any;
}

interface IProps extends IOwnProps, IReactRouter {}

class RepeatPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.dispatchGetCountAllLearnedWords();
  }

  redirectToRepeating = () => this.props.history.push('/repeating');

  render() {
    const { countIsLoading, countAllLearnedWords } = this.props;

    return (
      <div style={{marginTop: '30px'}}>
        <div>
          <h3>Всего выученных слов: {!countIsLoading && countAllLearnedWords}</h3>
        </div>
        <div style={{marginTop: '20px'}}>
          <div>
            <button onClick={this.redirectToRepeating} disabled={!countIsLoading && countAllLearnedWords < 5}>Повторение слов</button>
          </div>
          <div style={{marginTop: '5px'}}>
            {!countIsLoading && countAllLearnedWords < 5 && <h4>Недостаточно слов для повторения</h4>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countAllLearnedWords: state.data.countAllLearnedWords.data,
  countIsLoading: state.data.countAllLearnedWords.isLoading,
  isError: state.data.countAllLearnedWords.isError,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetCountAllLearnedWords: () => dispatch(callApi({
    resource: RESOURCES.COUNT_ALL_LEARNED_WORDS,
    type: 'get',
    url: '/userwords/learned'
  })), 
})

export default connect(mapStateToProps, mapDispatchToProps)(RepeatPage);
