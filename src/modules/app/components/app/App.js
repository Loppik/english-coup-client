import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AddWordsPage from '../../../addWordsPage/components/addWordsPage/AddWordsPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/add" component={AddWordsPage} />
      </React.Fragment>
    );
  }
}

export default App;
