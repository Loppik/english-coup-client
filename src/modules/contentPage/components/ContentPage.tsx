import React from 'react';
import { Route } from 'react-router-dom'; 
import { Row, Col } from 'antd';

import Header from '../../header/Header';
import LeftMenu from '../../leftMenu/LeftMenu';

import MainPage from '../../mainPage/MainPage';
import AddWordsPage from '../../addWordsPage/containers/AddWordsPage';
import LearnPage from '../../learnPage/LearnPage';
import RepeatPage from '../../repeatPage/RepeatPage';

interface IOwnProps {
  history: any;
}

class ContentPage extends React.Component<IOwnProps> {
  componentDidMount() {
    /*
    const token = window.localStorage.getItem('token');
    if (!token) {
      const { history } = this.props;
      history.push('/login');
    }
    */
  }

  onAddClick = () => {
    /*
    const { history } = this.props;
    history.push('/add');
    */
  }

  onLearningClick = () => {
    /*
    const { history } = this.props;
    history.push('/learning');
    */
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Row>
          <Col sm={3}>
            <LeftMenu />
          </Col>
          <Col sm={21}>
            <Route exact path="/" component={MainPage} />
            <Route path="/add" component={AddWordsPage} />
            <Route path="/learn" component={LearnPage} />
            <Route path="/repeat" component={RepeatPage} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ContentPage;
