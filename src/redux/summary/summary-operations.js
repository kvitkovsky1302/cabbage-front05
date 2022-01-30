import axios from 'axios';
// import moment from 'moment';
import summaryActions from './summary-actions';

export const fetchMonthExpenses = date => async dispatch => {
  dispatch(summaryActions.fetchMonthExpensesRequest());
  // const month = moment(Number(date)).format('MM');

  try {
    const { data } = await axios.get(`/expense?`, {
      params: {
        category: '',
        month: '',
        yearSummary: true,
      },
    });
    dispatch(summaryActions.fetchMonthExpensesSuccess(data));
  } catch (error) {
    dispatch(summaryActions.fetchMonthExpensesError(error));
  }
};
export const fetchMonthIncomes = date => async dispatch => {
  dispatch(summaryActions.fetchMonthIncomesRequest());
  // const month = moment(Number(date)).format('MM');

  try {
    const { data } = await axios.get(`/income?`, {
      params: {
        category: '',
        month: '',
        yearSummary: true,
      },
    });
    dispatch(summaryActions.fetchMonthIncomesSuccess(data));
  } catch (error) {
    dispatch(summaryActions.fetchMonthIncomesError(error));
  }
};

const summaryOperations = {
  fetchMonthExpenses,
  fetchMonthIncomes,
};

export default summaryOperations;
