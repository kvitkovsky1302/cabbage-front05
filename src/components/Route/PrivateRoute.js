import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { paths } from '../../config'

import authSelectors from '../../redux/auth/auth-selectors';

function PrivateRoute({ children, redirectTo = paths.login}) {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute

