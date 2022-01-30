import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import paths from './config';
//components
import Container from './components/Container';
import Logo from './components/Header/Logo';
import UserMenu from './components/Header/userMenu';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
//Transactions
import TransactionView from './pages/Transactions/TransactionView';
//Background
import BackgroundMain from './components/Backgrounds/BackgroundMain';
import authSelectors from './redux/auth/auth-selectors';
import './App.css';
import styles from './components/Header/Header.module.css';

//Auth
const Login = lazy(
  () => import('./pages/Auth/Login/Login') /* webpackChunkName: "Reports" */,
);
const Registration = lazy(() =>
  import(
    './pages/Auth/Registration/Registration' /* webpackChunkName: "Reports" */
  ),
);
const Reports = lazy(() =>
  import('./pages/Reports' /* webpackChunkName: "Reports" */),
);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <BackgroundMain>
        <header className={styles.headerContainer}>
          <Logo />
          {isLoggedIn ? <UserMenu /> : null}
        </header>
        <Container>
          <Suspense fallback={<div>Downloading...</div>}>
            <Routes>
              <Route
                path={paths.register}
                element={
                  <PublicRoute restricted>
                    <Registration />
                  </PublicRoute>
                }
              />
              <Route
                path={paths.login}
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />

              <Route
                path={paths.transactions}
                element={
                  <PrivateRoute>
                    <TransactionView />
                  </PrivateRoute>
                }
              />
              <Route
                end
                path={paths.reports}
                element={
                  <PrivateRoute>
                    <Reports />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </Container>
      </BackgroundMain>
    </>
  );
}

export default App;
