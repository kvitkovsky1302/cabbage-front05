import axios from 'axios';
import moment from 'moment';
// import moment from 'moment';
import transactionsActions from './transaction-actions';

moment.updateLocale('ru', {
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
});

export const fetchTransaction = () => async dispatch => {
  dispatch(transactionsActions.fetchExpenseRequest());

  try {
    const transactions = await axios.get('/transactions');
    dispatch(transactionsActions.fetchExpenseSuccess(transactions));
  } catch (error) {
    dispatch(transactionsActions.fetchExpenseError(error));
  }
};

const setBalance = balance => async dispatch => {
  dispatch(transactionsActions.setTotalBalanceRequest());

  try {
    const response = await axios.patch('/auth/users/balance', { balance });
    dispatch(
      transactionsActions.setTotalBalanceSuccess(response.data.user.balance),
    );
  } catch (error) {
    dispatch(transactionsActions.setTotalBalanceError(error));
  }
};

export const addExpense = (transaction, onSuccess) => async dispatch => {
  dispatch(transactionsActions.addExpenseRequest());

  try {
    await axios.post('/expense', transaction);
    dispatch(transactionsActions.addExpenseSuccess());
    onSuccess();
  } catch (error) {
    dispatch(transactionsActions.addExpenseError(error.message));
  }
};

const addIncome = (data, onSuccess) => async dispatch => {
  dispatch(transactionsActions.addIncomeRequest());

  try {
    await axios.post('/income', data);
    dispatch(transactionsActions.addIncomeSuccess());
    onSuccess();
  } catch (error) {
    dispatch(transactionsActions.addIncomeError(error.message));
  }
};

export const deleteTransaction =
  (transactionId, onSuccess, onError, income) => async dispatch => {
    let transaction = income ? 'income' : 'expense';
    dispatch(transactionsActions.deleteTransactionRequest());

    try {
      await axios.delete(`/${transaction}/${transactionId}`);
      dispatch(transactionsActions.deleteTransactionSuccess(transactionId));
      onSuccess();
    } catch (error) {
      onError(error);
      dispatch(transactionsActions.deleteTransactionError(error));
    }
  };

const getExpenseByDate = date => async dispatch => {
  dispatch(transactionsActions.getExpenseByDateRequest());
  const month = moment(Number(date)).format('MM');

  try {
    const { data } = await axios.get(`/expense?`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    dispatch(transactionsActions.getExpenseByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getExpenseByDateError());
  }
};

const getIncomeByDate = date => async dispatch => {
  dispatch(transactionsActions.getIncomeByDateRequest());
  const month = moment(Number(date)).format('MM');

  try {
    const { data } = await axios.get(`/income?`, {
      params: {
        category: '',
        month,
        year: '',
      },
    });
    dispatch(transactionsActions.getIncomeByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getIncomeByDateError(error));
  }
};

// const getExpenseByMonth = date => async dispatch => {
//   console.log('date', date);
//   dispatch(transactionsActions.getExpenseTotalRequest());
//   const year = moment(Number(date)).format('YYYY');
//   console.log('year', year);

//   try {
//     const { data } = await axios.get(`/expense?`, {
//       params: {
//         category: '',
//         month: '',
//         year,
//       },
//     });
//     console.log('data', data);
//     dispatch(transactionsActions.getExpenseTotalSuccess(data));
//   } catch (error) {
//     dispatch(transactionsActions.getExpenseTotalError(error.message));
//   }
// };

// const getIncomeByMonth = date => async dispatch => {
//   dispatch(transactionsActions.getIncomeTotalRequest());
//   const month = moment(Number(date)).format('MM');

//   try {
//     const { data } = await axios.get(`/income?`, {
//       params: {
//         category: '',
//         month,
//         year: '',
//       },
//     });
//     dispatch(transactionsActions.getIncomeTotalSuccess(data));
//   } catch (error) {
//     dispatch(transactionsActions.getIncomeTotalError(error.message));
//   }
// };

const transactionsOperations = {
  fetchTransaction,
  setBalance,
  addExpense,
  addIncome,
  getExpenseByDate,
  getIncomeByDate,
  deleteTransaction,
  // getExpenseByMonth,
  // getIncomeByMonth,
};

export default transactionsOperations;
