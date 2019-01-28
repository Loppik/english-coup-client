import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainPage from '../../../mainPage/components/mainPage/MainPage';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={MainPage} />
      </React.Fragment>
    );
  }
}

export default App;
