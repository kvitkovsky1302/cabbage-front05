import {
  fatchExpensePerMonthRequest,
  fatchExpensePerMonthSuccess,
  fatchExpensePerMonthError,
  fatchIncomePerMonthRequest,
  fatchIncomePerMonthSuccess,
  fatchIncomePerMonthError,
} from './chosenMonth-action';
import moment from 'moment';
import axios from 'axios';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const fatchTransactionsPerMonth = date => async dispatch => {
  dispatch(fatchExpensePerMonthRequest());
  dispatch(fatchIncomePerMonthRequest());
  const month = moment(date).format('MM');
  try {
    const expenseData = await axios.get(`/expense`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    const incomeData = await axios.get(`/income`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    console.log(expenseData);
    dispatch(fatchExpensePerMonthSuccess(expenseData.data));
    dispatch(fatchIncomePerMonthSuccess(incomeData.data));
  } catch (error) {
    dispatch(fatchExpensePerMonthError(error));
    dispatch(fatchIncomePerMonthError(error));
  }
};

const operati = {
  fatchTransactionsPerMonth,
};

export default operati;
