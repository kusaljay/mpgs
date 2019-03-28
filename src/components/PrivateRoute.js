import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, signedIn, ...rest}) => { 
  return (
  <Route {...rest} render = { props => 
    signedIn === true ? ( <Component {...props} {...rest} /> ) : ( <Redirect to="/login" /> )
    } />
  )
}

export default PrivateRoute;
