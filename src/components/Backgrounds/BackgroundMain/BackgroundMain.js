import { useLocation } from 'react-router-dom';
import paths from '../../../config';
import BackgroundLogin from '../BackgroundLogin/BackgroundLogin';
import BackgroundTrans from '../BackgroundTrans';
import s from './BackgroundMain.module.css';

export default function BackgroundMain({ children }) {
  const location = useLocation();

  const locationLogin =
    location.pathname === paths.register || location.pathname === paths.login;
  const locationTrans =
    location.pathname === paths.transactions ||
    location.pathname === paths.reports;
  return (
    <>
      {locationLogin && <BackgroundLogin>{children}</BackgroundLogin>};
      {locationTrans && <BackgroundTrans>{children}</BackgroundTrans>};
    </>
  );
}
