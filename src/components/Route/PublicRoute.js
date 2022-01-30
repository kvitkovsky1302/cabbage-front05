import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import paths from '../../config';
import authSelectors from '../../redux/auth/auth-selectors';

// import LogoHero from '../LogoHero/LogoHero';
import s from './BackgroundPublic.module.css';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = paths.home,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <>
      <div className={s.background}>
        <div className={s.coles}></div>
        {/* <LogoHero />
        <h1 className={s.hero__title}>Smart Finance</h1> */}
        {shouldRedirect ? <Navigate to={redirectTo} /> : children}
      </div>
      <div className={s.cole}></div>
    </>
  );
}

export default PublicRoute;
