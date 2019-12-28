import React from 'react';
import { Route } from 'react-router-dom';

import { getTokens } from '@src/storages/tokenStorage';
import UnauthorizedPage from '../../../unauthorizedPage/UnauthorizedPage';
const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    { ...rest }
    render={(props: any) => (
      getTokens()
        ? <Component {...props} />
        : <UnauthorizedPage {...props} />
    )}
  />;

export default PrivateRoute;
