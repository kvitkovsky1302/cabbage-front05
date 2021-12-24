import { createAction } from '@reduxjs/toolkit';

const setDate = createAction('set-date');

export const fetchExpenseRequest = createAction(
  'transaction/fetchExpenseRequest',
);
export const fetchExpenseSuccess = createAction(
  'transaction/fetchExpenseSuccess',
);
export const fetchExpenseError = createAction('transaction/fetchExpenseError');

const setTotalBalanceRequest = createAction(
  'transaction/setTotalBalanceRequest',
);
const setTotalBalanceSuccess = createAction(
  'transaction/setTotalBalanceSuccess',
);
const setTotalBalanceError = createAction('transaction/setTotalBalanceError');

export const addExpenseRequest = createAction('transaction/addExpenseRequest');
export const addExpenseSuccess = createAction('transaction/addExpenseSuccess');
export const addExpenseError = createAction('transaction/addExpenseError');

const addIncomeRequest = createAction('transactions/addIncomeRequest');
const addIncomeSuccess = createAction('transactions/addIncomeSuccess');
const addIncomeError = createAction('transactions/addIncomeError');

const getExpenseByDateRequest = createAction(
  'transactions/getExpenseByDateRequest',
);
const getExpenseByDateSuccess = createAction(
  'transactions/getExpenseByDateSuccess',
);
const getExpenseByDateError = createAction(
  'transactions/getExpenseByDateError',
);

const getIncomeByDateRequest = createAction(
  'transactions/getIncomeByDateRequest',
);
const getIncomeByDateSuccess = createAction(
  'transactions/getIncomeByDateSuccess',
);
const getIncomeByDateError = createAction('transactions/getIncomeByDateError');

export const deleteTransactionRequest = createAction(
  'transaction/deleteTransactionRequest',
);
export const deleteTransactionSuccess = createAction(
  'transaction/deleteTransactionSuccess',
);
export const deleteTransactionError = createAction(
  'transaction/deleteTransactionError',
);

// const getIncomeTotalRequest = createAction(
//   'transactions/getIncomeTotalRequest',
// );
// const getIncomeTotalSuccess = createAction(
//   'transactions/getIncomeTotalSuccess',
// );
// const getIncomeTotalError = createAction('transactions/getIncomeTotalError');

// const getExpenseTotalRequest = createAction(
//   'transactions/getExpenseTotalRequest',
// );
// const getExpenseTotalSuccess = createAction(
//   'transactions/getExpenseTotalSuccess',
// );
// const getExpenseTotalError = createAction('transactions/getExpenseTotalError');

const transactionsActions = {
  setDate,
  fetchExpenseRequest,
  fetchExpenseSuccess,
  fetchExpenseError,
  setTotalBalanceRequest,
  setTotalBalanceSuccess,
  setTotalBalanceError,
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
  getExpenseByDateRequest,
  getExpenseByDateSuccess,
  getExpenseByDateError,
  getIncomeByDateRequest,
  getIncomeByDateSuccess,
  getIncomeByDateError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  // getExpenseTotalRequest,
  // getExpenseTotalSuccess,
  // getExpenseTotalError,
  // getIncomeTotalRequest,
  // getIncomeTotalSuccess,
  // getIncomeTotalError,
};

export default transactionsActions;
