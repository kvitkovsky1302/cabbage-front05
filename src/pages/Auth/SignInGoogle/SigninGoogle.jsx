import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import logInSucces from '../../../redux/auth/auth-slice';
import googleLogo from './svg/logoGoogle.svg';

import b from '../../../components/ButtonAuth/Button.module.css';

const clientId =
  '969256354016-orno03n42ee5h75ii12h0s0lmfu5tfcn.apps.googleusercontent.com';

function SignInGoogle() {
  const dispatch = useDispatch();

  const onSuccess = res => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      ` Авторизация прошла успешно🎉 Добро пожаловать, ${res.profileObj.name} 😍. \n Рады Вас видеть!`,
    );
    const { email, name } = res.profileObj;
    dispatch(logInSucces({ email, name, token: 'qwqw', isGoogleSigned: true }));
  };

  const onFailure = res => {
    console.log('Login failed: res:', res);
    alert(`Ошибка авторизации. 😢\n Пожалуйста, попробуйте еще раз чуть позже`);
  };

  const customStyle = {
    display: 'flex',
    padding: '11px',
    alignItems: 'center',
    background: '#F5F6FB',
    color: '#52555F',
    width: '122px',
    height: '40px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '26px',
    border: '0',
  };
  return (
    <div className={b.btnGoogle}>
      <GoogleLogin
        render={renderProps => (
          <button onClick={renderProps.onClick} style={customStyle}>
            <img src={googleLogo} alt="Google Logo"  className={b.logo}/>Google 
          </button>
        )}
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export { SignInGoogle };
