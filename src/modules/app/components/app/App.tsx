import React, {ComponentClass} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { getTokens } from '../../../../storages/tokenStorage';

import Login from '../../../login/containers/Login';
import Registration from '../../../registration/containers/Registration';
import AddWordsPage from '../../../addWordsPage/containers/AddWordsPage';
import ContentPage from '../../../contentPage/containers/ContentPage';
import PrivateRoute from '../privateRoute/PrivateRoute';
import LearningPage from '../../../learningPage/containers/LearningPage';
import Repeat from '../../../repeat/Repeat';

interface IOwnProps {
  dispatchGetUserData: any;
  dispatchSetTokens: any;
  history: any;
}

class App extends React.Component<IOwnProps> {
  componentDidMount() {
    const { dispatchGetUserData, dispatchSetTokens, history } = this.props;
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
  }

  onFailGetUserData = () => {

  }

  render() {
    return (
      <Switch>
        <Route path='/signin' component={Login as unknown as ComponentClass} /> {/* FIXME: do something with this */}
        <Route path='/signup' component={Registration as unknown as ComponentClass} />
        <PrivateRoute path='/learning' component={LearningPage} />
        <PrivateRoute path='/repeating' component={Repeat} />
        <PrivateRoute path='/' component={ContentPage} />
        <Redirect from='*' to='/' />
      </Switch>
    )
  }
}

export default App;
