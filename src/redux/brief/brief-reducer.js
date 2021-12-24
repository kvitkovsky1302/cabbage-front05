import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import briefActions from './brief-actions';

const sixMonthsIncome = createReducer('', {
  [briefActions.getIncomeTotalSuccess]: (_, { payload }) => {
    console.log('payload', payload);
    return payload.totalIcome;
  },
});

const sixMonthsExpense = createReducer('', {
  [briefActions.getExpenseTotalSuccess]: (_, { payload }) => {
    console.log('payloadex', payload);
    return payload.totalSum;
  },
});

export default combineReducers({
  sixMonthsIncome,
  sixMonthsExpense,
});
