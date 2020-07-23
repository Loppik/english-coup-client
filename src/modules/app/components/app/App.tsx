import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { getTokens } from '@src/storages/tokenStorage';

import Login from '../../../login/containers/Login';
import Registration from '../../../registration/containers/Registration';
import AddWordsPage from '../../../addWordsPage/containers/AddWordsPage';
import ContentPage from '../../../contentPage/containers/ContentPage';
import PrivateRoute from '../privateRoute/PrivateRoute';
import LearningPage from '../../../learningPage/containers/LearningPage';
import Repeat from '../../../repeat/Repeat';

import { IReactRouter } from '@mdl/interfaces';

interface IOwnProps {
  dispatchGetUserData: any;
  dispatchSetTokens: any;
}

interface IProps extends IOwnProps, IReactRouter {}

const App = ({ dispatchGetUserData, dispatchSetTokens, history }) => {

  useEffect(() => {
    const tokens = getTokens();
    if (tokens) {
      dispatchSetTokens(tokens);
      dispatchGetUserData(history);
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
    }
  }, []);

  const onFailGetUserData = () => {

  }

  return (
    <Switch>
      <Route path='/signin' component={Login} />
      <Route path='/signup' component={Registration} />
      <PrivateRoute path='/learning' component={LearningPage} />
      <PrivateRoute path='/repeating' component={Repeat} />
      <PrivateRoute path='/' component={ContentPage} />
      <Redirect from='*' to='/' />
    </Switch>
  )
}

export default App;
