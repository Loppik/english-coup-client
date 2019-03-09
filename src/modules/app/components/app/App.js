import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from '../../../login/components/login/Login';
import Registration from '../../../registration/components/registration/Registration';
import AddWordsPage from '../../../addWordsPage/components/addWordsPage/AddWordsPage';
import LearningPage from '../../../learningPage/containers/LearningPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/add" component={AddWordsPage} />
        <Route exact path="/learning" component={LearningPage} />
      </React.Fragment>
    );
  }
}

export default App;
