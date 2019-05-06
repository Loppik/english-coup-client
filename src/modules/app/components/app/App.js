import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { getTokens } from '../../../../storages/tokenStorage';

import Login from '../../../login/containers/Login';
import Registration from '../../../registration/containers/Registration';
import AddWordsPage from '../../../addWordsPage/components/addWordsPage/AddWordsPage';
import LearningPage from '../../../learningPage/containers/LearningPage';
import MainPage from '../../../mainPage/containers/MainPage';


class App extends Component {
  componentDidMount() {
    const { dispatchGetUserData, dispatchSetTokens, history } = this.props;
    const tokens = getTokens();
    console.log(tokens);
    if (tokens) {
      dispatchSetTokens(tokens);
      dispatchGetUserData(this.props.history);
      /*
      console.log('token +')
      dispatch(callApi({
        resource: Resource.UserData,
        type: 'get',
        url: '/users'
      }))
      jwt.verify(token, 'oeRaYY7Wo24sDqKSX3IM9ASGmdGPmkTd9jo1QTy4b7P9Ze5_9hKolVX8xNrQDcNRfVEdTZNOuOyqEGhXEbdJI-ZQ19k_o9MI0y3eZN2lp9jow55FfXMiINEdt1XR85VipRLSOkT6kSpzs2x-jbLDiz9iFVzkd81YKxMgPA7VfZeQUm4n-mOmnWMaVX30zGFU4L3oPBctYKkl4dYfqYWqRNfrgPJVi5DGFjywgxx0ASEiJHtV72paI3fDR2XwlSkyhhmY-ICjCRmsJN4fX1pdoL8a18-aQrvyu4j0Os6dVPYIoPvvY0SAZtWYKHfM15g7A3HD4cVREf9cUsprCPK93l', function(err, decoded) {
        console.log(decoded)
        dispatch(loginUserSuccess(token, {email: 'a'}));
      });
      */
    } else {
      history.push('/signin');
    }
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/add" component={AddWordsPage} />
        <Route exact path="/learning" component={LearningPage} />
        <Route exact path="/" component={MainPage} />
      </React.Fragment>
    );
  }
}

export default App;
