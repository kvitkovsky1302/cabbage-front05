import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { paths } from '../../config';

import s from './BackgroundPrivate.module.css';

import authSelectors from '../../redux/auth/auth-selectors';

function PrivateRoute({ children, redirectTo = paths.login }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // return isLoggedIn ? children : <Navigate to={redirectTo} />;
  return (
    <>
      <div className={s.background}>
        {isLoggedIn ? children : <Navigate to={redirectTo} />}
      </div>
      <div className={s.coles}></div>
    </>
  );
}

export default PrivateRoute;
