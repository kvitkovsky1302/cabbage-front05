import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import summaryActions from './summary-actions';

const summary = createReducer([], {
  [summaryActions.fetchMonthExpensesSuccess]: (_, { payload }) => {
    return payload.data;
  },
  [summaryActions.fetchMonthIncomesSuccess]: (_, { payload }) => payload.data,
});

export default combineReducers({ summary });
