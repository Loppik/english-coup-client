import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from '../../../login/components/login/Login';
import Registration from '../../../registration/components/registration/Registration';
import AddWordsPage from '../../../addWordsPage/components/addWordsPage/AddWordsPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/add" component={AddWordsPage} />
      </React.Fragment>
    );
  }
}

export default App;
