import React from 'react';
import { Route } from 'react-router-dom';

import { getTokens } from '../../../../storages/tokenStorage';
import UnauthorizedPage from '../../../unauthorizedPage/UnauthorizedPage';

const PrivateRoute = ({ component: Component, ...rest }) => 
  <Route
    { ...rest }
    render={(props) => (
      getTokens()
        ? <Component {...props} />
        : <UnauthorizedPage/>
    )}
  />

export default PrivateRoute;