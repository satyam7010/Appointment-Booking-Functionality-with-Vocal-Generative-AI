import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
