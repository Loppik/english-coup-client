import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from '../../../login/containers/Login';
import Registration from '../../../registration/containers/Registration';
import AddWordsPage from '../../../addWordsPage/components/addWordsPage/AddWordsPage';
import LearningPage from '../../../learningPage/containers/LearningPage';
import MainPage from '../../../mainPage/containers/MainPage';


class App extends Component {
  componentDidMount() {
    const { dispatchGetUserData } = this.props;
    dispatchGetUserData();
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/add" component={AddWordsPage} />
        <Route exact path="/learning" component={LearningPage} />
        <Route exact path="/" component={MainPage} />
      </React.Fragment>
    );
  }
}

export default App;
