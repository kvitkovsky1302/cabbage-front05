import { createAction } from "@reduxjs/toolkit";

export const incrementMonth = createAction("chosenMonth/incrementMonth");
export const decrementMonth = createAction("chosenMonth/decrementMonth");
export const fatchExpensePerMonthRequest = createAction("chosenMonth/fatchExpensePerMonthRequest")
export const fatchExpensePerMonthSuccess = createAction("chosenMonth/fatchExpensePerMonthSuccess")
export const fatchExpensePerMonthError = createAction("chosenMonth/fatchExpensePerMonthError")
export const fatchIncomePerMonthRequest = createAction("chosenMonth/fatchIncomePerMonthRequest")
export const fatchIncomePerMonthSuccess = createAction("chosenMonth/fatchIncomePerMonthSuccess")
export const fatchIncomePerMonthError = createAction("chosenMonth/fatchIncomePerMonthError")