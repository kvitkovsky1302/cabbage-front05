import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionsActions from './transaction-actions';
import moment from 'moment';

// const transactions = createReducer([], {
//   [transactionsActions.fetchTransactionSuccess]: (_, { payload }) => payload,

//   [transactionsActions.addTransactionSuccess]: (state, { payload }) => [
//     ...state,
//     payload,
//   ],

//   [transactionsActions.deleteTransactionSuccess]: (state, { payload }) =>
//     state.filter(transaction => transaction.id !== payload),
// });

const transactions = createReducer(
  {},
  {
    [transactionsActions.getExpenseByDateSuccess]: (_, { payload }) =>
      payload.data,
    [transactionsActions.getIncomeByDateSuccess]: (_, { payload }) =>
      payload.data,
  },
);

const initialDate = moment(new Date()).valueOf();

const selectedDate = createReducer(initialDate, {
  [transactionsActions.setDate]: (_, { payload }) => payload,
});

const totalBalance = createReducer(0, {
  [transactionsActions.setTotalBalanceSuccess]: (_, { payload }) => {
    return payload;
  },
});

const isLoading = createReducer(false, {
  [transactionsActions.addExpenseRequest]: () => true,
  [transactionsActions.addExpenseSuccess]: () => false,
  [transactionsActions.addExpenseError]: () => false,
  [transactionsActions.addIncomeRequest]: () => true,
  [transactionsActions.addIncomeSuccess]: () => false,
  [transactionsActions.addIncomeError]: () => false,
  [transactionsActions.getExpenseByDateRequest]: () => true,
  [transactionsActions.getExpenseByDateSuccess]: () => false,
  [transactionsActions.getExpenseByDateError]: () => false,
  [transactionsActions.getIncomeByDateRequest]: () => true,
  [transactionsActions.getIncomeByDateSuccess]: () => false,
  [transactionsActions.getIncomeByDateError]: () => false,
  [transactionsActions.deleteTransactionRequest]: () => true,
  [transactionsActions.deleteTransactionSuccess]: () => false,
  [transactionsActions.deleteTransactionError]: () => false,
});

// const error = createReducer(null, {
//   [transactionsActions.fetchTransactionError]: (_, { payload }) => payload,
//   [transactionsActions.addTransactionError]: (_, { payload }) => payload,
//   [transactionsActions.deleteTransactionError]: (_, { payload }) => payload,
//   [transactionsActions.fetchTransactionRequest]: () => null,
//   [transactionsActions.addTransactionRequest]: () => null,
//   [transactionsActions.deleteTransactionRequest]: () => null,
// });

// const sixMonthsIncome = createReducer([], {
//   [transactionsActions.getIncomeTotalSuccess]: (_, { payload }) =>
//     payload.totalSum,
// });

// const sixMonthsExpense = createReducer([], {
//   [transactionsActions.getExpenseTotalSuccess]: (_, { payload }) => {
//     console.log('payloadex', payload);
//     return payload.totalSum;
//   },
// });

export default combineReducers({
  transactions,
  isLoading,
  totalBalance,
  selectedDate,
  // sixMonthsIncome,
  // sixMonthsExpense,
});
