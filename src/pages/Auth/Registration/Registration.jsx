import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { paths } from '../../../config';
import { SignInGoogle } from '../SignInGoogle/SigninGoogle';
import authOperations from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';

import s from './RegisterAuth.module.css';
import b from '../../../components/ButtonAuth/Button.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

 const goToLogin = () => {
   // navigate(paths.login);
   window.open(paths.login);
  };

  const validate = useCallback(values => {
    const errors = {};
    //валидация для name
    if (!values.name) {
      errors.name = 'это обязательное поле';
    } else if (values.name.length < 3) {
      errors.name =
        'Неверный формат имени. Имя должно быть больше 3х символов.';
    }
    //валидация для email
    if (!values.email) {
      errors.email = 'это обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Неверный формат электронной почты';
    }

    //валидация для password
    if (!values.password) {
      errors.password = 'это обязательное поле';
    } else if (values.password.length < 6 || values.password.length > 12) {
      errors.password =
        'Такой пароль не подходит. Пароль должен быть больше 6 и меньше 12 символов';
    }

    //валидация для confirm password
    if (!values.confirmPassword) {
      errors.confirmPassword = 'это обязательное поле';
    } else if (
      values.confirmPassword.length < 6 ||
      values.confirmPassword.length > 12
    ) {
      errors.confirmPassword =
        'Такой пароль не подходит. Пароль должен быть больше 6 и меньше 12 символов';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword =
        'Пароль не подходит. Подтверждение пароля должно совпадать с паролем';
    }
    return errors;
  }, []);

  const handleSubmit = e => {
    console.log('submit:', handleSubmit);
    const name = e.name;
    const email = e.email;
    const password = e.password;

    dispatch(authOperations.register({ name, email, password }));
   // window.open('/');
  };

 

  return (
    <div>
      {!isLoggedIn && (
        <div className={s.auth}>
          <p className={`${s.textGoogle} ${s.textAuth}`}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <SignInGoogle className={b.btnGoogle} />
          <p className={s.textAuth}>Или заполните поля ниже:</p>
          <Formik
            initialValues={INITIAL_VALUES}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className={s.form}>
                {/* =====================Name ===========================*/}
                <label htmlFor="name" className={s.label}>
                  <p className={s.text}>*Имя: </p>
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Имя"
                  className={s.input}
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className={s.ErrorMessage}
                />
                {/* ==============================Email=========================*/}
                <label htmlFor="email" className={s.label}>
                  <p className={s.text}>*Электронная почта: </p>
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className={s.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.ErrorMessage}
                />
                {/* ========================Password====================== */}
                <label htmlFor="password" className={s.label}>
                  <p className={s.text}>*Пароль:</p>
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className={s.input}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.ErrorMessage}
                />
                {/* ==================Confirm passwords======================*/}
                <label htmlFor="password">
                  <p className={s.text}>*Пароль:</p>
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Повторите Пароль"
                  className={s.input}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={s.ErrorMessage}
                />
                {/* ==================buttons======================*/}
                <div className={s.linkElement}>
                  <Link to="/" className={s.link}>
                    У Вас уже есть учетная запись? Авторизоваться!
                  </Link>
                </div>
                <div className={s.btnRegister}>
                  
                  <button
                      type="submit"
                      className={b.btnAuth}
                      onClick = {goToLogin}
                    >
                      Зарегестрироваться
                    </button>
                  
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Registration;
