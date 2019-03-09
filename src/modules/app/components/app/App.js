import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AddWordsPage from '../../../addWordsPage/components/addWordsPage/AddWordsPage';
import LearningPage from '../../../learningPage/containers/LearningPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/add" component={AddWordsPage} />
        <Route exact path="/learning" component={LearningPage} />
      </React.Fragment>
    );
  }
}

export default App;
