import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';

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
      <Row style={{marginTop: '30px'}}>
        <Row>
          <h3>Всего выученных слов: {!countIsLoading && countAllLearnedWords}</h3>
        </Row>
        <Row style={{marginTop: '20px'}}>
          <Col sm={3}>
            <Button type="dashed" onClick={this.redirectToRepeating} disabled={!countIsLoading && countAllLearnedWords < 5}>Повторение слов</Button>
          </Col>
          <Col sm={6} style={{marginTop: '5px'}}>
            {!countIsLoading && countAllLearnedWords < 5 && <h4>Недостаточно слов для повторения</h4>}
          </Col>
        </Row>
      </Row>
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
