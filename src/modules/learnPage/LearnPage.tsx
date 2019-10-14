import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';

import { IReactRouter } from '@mdl/interfaces';
import { callApi } from '@dtl/actions';
import RESOURCES from '@dtl/resources';

interface IOwnProps {
  dispatchGetCountAllLearningWords: any;
  dispatchGetCountAllLearnedWords: any;
  countLearningIsLoading: any;
  countAllLearningWords: any;
  countLearnedIsLoading: any;
  countAllLearnedWords: any;
}

interface IProps extends IOwnProps, IReactRouter {}

class LearnPage extends React.Component<IProps> {
  componentDidMount() {
    this.props.dispatchGetCountAllLearningWords();
    this.props.dispatchGetCountAllLearnedWords();
  }

  redirectToLearningPage = () => this.props.history.push('/learning');

  render() {
    const { countLearningIsLoading, countAllLearningWords, countLearnedIsLoading, countAllLearnedWords } = this.props;

    return (
      <Row style={{marginTop: '30px'}}>
        <Row>
          <Col sm={6}>
            <h3>Цель на день: 10</h3>
          </Col>
          <Col sm={6}>
            <h3>Всего выученных слов: {!countLearnedIsLoading && countAllLearnedWords}</h3>
          </Col>
          <Col sm={6}>
            <h3>Осталось невыученных: {!countLearningIsLoading && countAllLearningWords}</h3>
          </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
          <Col sm={3}>
            <Button type="dashed" onClick={this.redirectToLearningPage} disabled={!countLearningIsLoading && countAllLearningWords < 5}>Изучение слов</Button>
          </Col>
          <Col sm={6} style={{marginTop: '5px'}}>
            {!countLearningIsLoading && countAllLearningWords < 5 && <h4>Недостаточно слов для изучения</h4>}
          </Col>
        </Row>
      </Row>
      
    )
  }
}

const mapStateToProps = (state) => ({
  countAllLearningWords: state.data.countAllLearningWords.data,
  countLearningIsLoading: state.data.countAllLearningWords.isLoading,
  countAllLearnedWords: state.data.countAllLearnedWords.data,
  countLearnedIsLoading: state.data.countAllLearnedWords.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetCountAllLearningWords: () => dispatch(callApi({
    resource: RESOURCES.COUNT_ALL_LEARNING_WORDS,
    type: 'get',
    url: '/userwords/left',
  })),
  dispatchGetCountAllLearnedWords: () => dispatch(callApi({
    resource: RESOURCES.COUNT_ALL_LEARNED_WORDS,
    type: 'get',
    url: '/userwords/learned'
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnPage);
