import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';

import Header from '../../header/Header';
import LeftMenu from '../../leftMenu/LeftMenu';

import MainPage from '../../mainPage/MainPage';
import AddWordsPage from '../../addWordsPage/containers/AddWordsPage';
import LearnPage from '../../learnPage/LearnPage';
import RepeatPage from '../../repeatPage/RepeatPage';

import { IReactRouter } from '@mdl/interfaces';

interface IProps extends IReactRouter {}

class ContentPage extends React.Component<IProps> {
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (!token) {
      this.historyPush('/');
    }
  }

  historyPush = (path: string) => this.props.history.push(path);

  onAddClick = () => this.historyPush('/add');

  onLearningClick = () => this.historyPush('/learning');

  render() {
    return (
      <React.Fragment>
        <Header />
        <Row>
          <Col sm={3}>
            <LeftMenu historyPush={(path) => this.historyPush(path)} />
          </Col>
          <Col sm={21}>
            <Route path='/add' component={AddWordsPage} />
            <Route path='/learn' component={LearnPage} />
            <Route path='/repeat' component={RepeatPage} />
            <Route path='/' component={MainPage} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ContentPage;
