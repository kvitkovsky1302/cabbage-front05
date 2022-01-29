import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

axios.defaults.baseURL = 'https://cabbage-back-end.herokuapp.com/api';
// 'http://localhost:3001/api';
// 'https://second-serv.herokuapp.com/api';

//на все запроссы авторизации
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('/register', async credentials => {
  try {
    const { data } = await axios.post('auth/users/signup', credentials);
    return data;
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось зарегистрироваться`,
    });
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('auth/users/signin', credentials);
    token.set(data.user.token);
    return data;
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось авторизироваться`,
    });
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('auth/users/signout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const setBalance = createAsyncThunk('auth/setBalance', async balance => {
  try {
    const response = await axios.patch('/auth/users/balance', { balance });
    return response;
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось записать баланс пользователя`,
    });
  }
});

const getBalance = createAsyncThunk('balance/getBalance', async () => {
  try {
    // dispatch(balanceActions.setLoading(true));
    const { data } = await axios.get('/auth/users/current');
    return data;
    // dispatch(balanceActions.getBalance(balance));
    // dispatch(balanceActions.setLoading(false));

    //  const balance = await balanceServices.getCurrentBalance();
    // return balance;
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось получить баланс пользователя`,
    });
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  setBalance,
  getBalance,
};

export default authOperations;
