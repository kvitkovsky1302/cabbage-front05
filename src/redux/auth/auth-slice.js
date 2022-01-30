import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  balance: null,
  isLoggedIn: false,
  isGoogleSigned: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      if (action.payload === undefined) {
        return;
      }
      state.user = action.payload.user;
    },
    [authOperations.logInGoogle.fulfilled](state, action) {
      // if (action.payload === undefined) {
      //   return;
      // }
      state.user.name = action.meta.arg.name;
      state.user.email = action.meta.arg.email;
      state.token = action.meta.arg.tokenId;
      state.isLoggedIn = true;
      state.isGoogleSigned = true;
      // state.isGoogleSigned = action.payload.isGoogleSigned;
    },
    [authOperations.logIn.fulfilled](state, action) {
      // if (action.payload === undefined) {
      //   return;
      // }
      state.user.name = action.meta.arg.name;
      state.user.email = action.meta.arg.email;
      state.token = action.payload.user.token;
      state.isLoggedIn = true;
      state.isGoogleSigned = false;
      // state.isGoogleSigned = action.payload.isGoogleSigned;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.balance = null;
      state.isLoggedIn = false;
      state.isGoogleSigned = false;
      //state.isGoogleSigned = action.payload.token
    },
    // [authOperations.CurrentUser.fulfilled](state, action) {
    //   state.CurrentUser = action.payload.user
    // }
    [authOperations.setBalance.fulfilled](state, action) {
      if (action.payload === undefined) {
        return;
      }
      state.balance = action.payload.data.user.balance;
    },

    [authOperations.getBalance.fulfilled](state, action) {
      if (action.payload === undefined || action === null) {
        return;
      }

      state.balance = action.payload.user.balance;
      state.user = action.payload.user;
    },
  },
});

export default authSlice.reducer;
