import React from 'react';
import { Route } from 'react-router-dom';

import { getTokens } from '@src/storages/tokenStorage';
import UnauthorizedPage from '../../../unauthorizedPage/UnauthorizedPage';
const PrivateRoute = ({ component: Component, ...rest }: any) =>
  <Route
    { ...rest }
    render={(props) => (
      getTokens()
        ? <Component {...props} />
        : <UnauthorizedPage {...props} />
    )}
  />;

export default PrivateRoute;
