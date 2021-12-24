import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { paths } from '../../config'
import authSelectors from '../../redux/auth/auth-selectors';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = paths.home }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;

