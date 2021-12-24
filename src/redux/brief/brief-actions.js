import { createAction } from '@reduxjs/toolkit';

const getIncomeTotalRequest = createAction('brief/getIncomeTotalRequest');
const getIncomeTotalSuccess = createAction('brief/getIncomeTotalSuccess');
const getIncomeTotalError = createAction('brief/getIncomeTotalError');

const getExpenseTotalRequest = createAction('brief/getExpenseTotalRequest');
const getExpenseTotalSuccess = createAction('brief/getExpenseTotalSuccess');
const getExpenseTotalError = createAction('brief/getExpenseTotalError');

const briefsActions = {
  getExpenseTotalRequest,
  getExpenseTotalSuccess,
  getExpenseTotalError,
  getIncomeTotalRequest,
  getIncomeTotalSuccess,
  getIncomeTotalError,
};

export default briefsActions;
