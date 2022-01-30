import { createAction } from '@reduxjs/toolkit';

export const fetchMonthExpensesRequest = createAction(
  'summary/fetchMonthExpensesRequest',
);
export const fetchMonthExpensesSuccess = createAction(
  'summary/fetchMonthExpensesSuccess',
);
export const fetchMonthExpensesError = createAction(
  'summary/fetchMonthExpensesError',
);

export const fetchMonthIncomesRequest = createAction(
  'summary/fetchMonthIncomesRequest',
);
export const fetchMonthIncomesSuccess = createAction(
  'summary/fetchMonthIncomesSuccess',
);
export const fetchMonthIncomesError = createAction(
  'summary/fetchMonthIncomesError',
);

const summaryActions = {
  fetchMonthExpensesRequest,
  fetchMonthExpensesSuccess,
  fetchMonthExpensesError,
  fetchMonthIncomesRequest,
  fetchMonthIncomesSuccess,
  fetchMonthIncomesError,
};

export default summaryActions;
