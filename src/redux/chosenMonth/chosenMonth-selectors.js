const getDesiredDate = state => state.desiredMonth.desiredMonth;
const getExponsePerDesiredMonth = state =>
  state.desiredMonth.ExponsePerDesiredMonth;
const getExponsePerDesiredMonth2 = state =>
  state.desiredMonth.ExponsePerDesiredMonth.data;
const getIncomePerDesiredMonth = state =>
  state.desiredMonth.IncomePerDesiredMonth;
const getIncomePerDesiredMonth2 = state =>
  state.desiredMonth.IncomePerDesiredMonth.data;

const selectors = {
  getDesiredDate,
  getExponsePerDesiredMonth,
  getIncomePerDesiredMonth,
  getExponsePerDesiredMonth2,
  getIncomePerDesiredMonth2,
};
export default selectors;
