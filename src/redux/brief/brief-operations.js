import axios from 'axios';
import moment from 'moment';
import briefsActions from './brief-actions';

const getExpenseByMonth = date => async dispatch => {
  console.log('date', date);
  dispatch(briefsActions.getExpenseTotalRequest());
  const month = moment(Number(date)).format('MM');
  // console.log('year', year);

  try {
    const { data } = await axios.get(`/expense?`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    dispatch(briefsActions.getExpenseTotalSuccess(data));
  } catch (error) {
    dispatch(briefsActions.getExpenseTotalError(error.message));
  }
};

const getIncomeByMonth = date => async dispatch => {
  dispatch(briefsActions.getIncomeTotalRequest());
  const month = moment(Number(date)).format('MM');

  try {
    const { data } = await axios.get(`/income?`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    console.log('data', data);
    dispatch(briefsActions.getIncomeTotalSuccess(data));
  } catch (error) {
    dispatch(briefsActions.getIncomeTotalError(error.message));
  }
};

const briefOperations = {
  getExpenseByMonth,
  getIncomeByMonth,
};

export default briefOperations;
