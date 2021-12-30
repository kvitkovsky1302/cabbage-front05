import axios from 'axios';
import moment from 'moment';
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

const transactionsOperations = {
  fetchTransaction,
  setBalance,
  addExpense,
  addIncome,
  getExpenseByDate,
  getIncomeByDate,
  deleteTransaction,
};

export default transactionsOperations;
