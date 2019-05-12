import React from 'react';
import { connect } from 'react-redux';
import * as Resource from '@/dataLoader/resources';
import { callApi } from '@/dataLoader/actions';
import { withRouter } from 'react-router-dom';

import { Row, Col, Button } from 'antd';

class LearnPage extends React.Component {
  componentDidMount() {
    this.props.dispatchGetCountAllLearningWords();
  }

  redirectToLearningPage = () => this.props.history.push('/learning');

  render() {
    const { countIsLoading, countAllLearningWords } = this.props;

    return (
      <Row style={{marginTop: '30px'}}>
        <Row>
          <Col sm={6}>
            <h3>Выучено сегодня:</h3>
          </Col>
          <Col sm={6}>
            <h3>Цель на день:</h3>
          </Col>
          <Col sm={6}>
            <h3>Выучено всего:</h3>
          </Col>
          <Col sm={6}>
            <h3>Осталось невыученных: {!countIsLoading && countAllLearningWords}</h3>
          </Col>
        </Row>
        <Row style={{marginTop: '10px'}}>
          <Col sm={4}>
            <Button type="dashed" onClick={this.redirectToLearningPage} disabled={!countIsLoading && countAllLearningWords < 5}>Изучение слов</Button>
          </Col>
          <Col sm={6} style={{marginTop: '5px'}}>
            {!countIsLoading && countAllLearningWords < 5 && <h4>Недостаточно слов для изучения</h4>}
          </Col>
        </Row>
      </Row>
      
    )
  }
}

const mapStateToProps = (state) => ({
  countAllLearningWords: state.data.countAllLearningWords.data,
  countIsLoading: state.data.countAllLearningWords.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetCountAllLearningWords: () => dispatch(callApi({
    resource: Resource.CountAllLearningWords,
    type: 'get',
    url: '/userwords/left',
  })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LearnPage));