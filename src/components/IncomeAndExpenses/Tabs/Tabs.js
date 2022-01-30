import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
import s from './Tabs.module.css';
import TransactionForm from '../TransactionForm';
import TransactionsList from '../TransactionsList/TransactionsList';
import Button from '../Button';
import authOperations from '../../../redux/auth/auth-operations';
// import authSelectors from '../../../redux/auth/auth-selectors';
import Summary from '../../Summury/Summary';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../../redux/transaction';

import { summaryOperations, summarySelectors } from '../../../redux/summary';
// import axios from 'axios';

const optionsExpense = [
  { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technics', label: 'Техника' },
  { value: 'bill', label: 'Коммуналка, связь' },
  { value: 'sport', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
];

const optionsIncome = [
  { value: 'salary', label: 'ЗП' },
  { value: 'additional', label: 'Доп. доход' },
];

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export default function Tabs() {
  const [expense, setExpense] = useState(true);
  const [income, setIncome] = useState(false);

  const dispatch = useDispatch();

  const selectedDate = useSelector(transactionsSelectors.currentDate);
  const transactions = useSelector(transactionsSelectors.getTransactions);

  const getIncomes = useCallback(
    momentDate => {
      dispatch(transactionsOperations.getIncomeByDate(momentDate));
    },
    [dispatch],
  );

  const getExpenses = useCallback(
    momentDate => {
      dispatch(transactionsOperations.getExpenseByDate(momentDate));
    },
    [dispatch],
  );

  useEffect(() => {
    const momentDate = moment(selectedDate).valueOf();
    if (income) {
      getIncomes(momentDate);
    }
    if (!income) {
      getExpenses(momentDate);
    }
  }, [getIncomes, getExpenses, income, selectedDate]);

  const clickExpense = () => {
    if (expense) return;
    setIncome(false);
    setExpense(true);
    const momentDate = moment(selectedDate).valueOf();
    dispatch(transactionsOperations.getExpenseByDate(momentDate));
  };

  const clickIncome = () => {
    if (income) return;
    setIncome(true);
    setExpense(false);
    const momentDate = moment(selectedDate).valueOf();
    dispatch(transactionsOperations.getIncomeByDate(momentDate));
  };

  const onSuccess = () => {
    toast.success('Transaction successfully added.');
    dispatch(authOperations.getBalance());

    if (income) {
      dispatch(transactionsOperations.getIncomeByDate(selectedDate));
      dispatch(summaryOperations.fetchMonthIncomes());
    }
    if (expense) {
      dispatch(transactionsOperations.getExpenseByDate(selectedDate));
      dispatch(summaryOperations.fetchMonthExpenses());
    }
  };

  const handleSubmit = data => {
    if (income) {
      dispatch(transactionsOperations.addIncome(data, onSuccess));
    }
    if (expense) {
      dispatch(transactionsOperations.addExpense(data, onSuccess));
    }
  };

  const onDeleteTransaction = id => {
    dispatch(
      transactionsOperations.deleteTransaction(
        id,
        onDeleteTransactionSuccess,
        onDeleteTransactionError,
        income,
      ),
    );
  };

  const onDeleteTransactionSuccess = () => {
    toast.success('Transaction has been deleted.');
    dispatch(authOperations.getBalance());

    if (income) {
      dispatch(transactionsOperations.getIncomeByDate(selectedDate));
      dispatch(summaryOperations.fetchMonthIncomes());
    }
    if (expense) {
      dispatch(transactionsOperations.getExpenseByDate(selectedDate));
      dispatch(summaryOperations.fetchMonthExpenses());
    }
  };

  const onDeleteTransactionError = error => {
    toast.error('Something went wrong, please try again later.');
  };

  return (
    <div className={s.tabsContainer}>
      <div>
        <Button
          onClick={clickExpense}
          className={
            expense ? `${s.tabButton} ${s.activeButton}` : `${s.tabButton}`
          }
        >
          Расход
        </Button>
        <Button
          type="button"
          onClick={clickIncome}
          className={
            income ? `${s.tabButton} ${s.activeButton}` : `${s.tabButton}`
          }
        >
          Доход
        </Button>
      </div>
      {expense ? (
        <div className={s.counterTabContainer}>
          <TransactionForm
            options={optionsExpense}
            onSubmit={handleSubmit}
            placeholder="Категория товара"
          />
          <div className={s.reportBlock}>
            <TransactionsList
              transactions={transactions}
              onDelete={onDeleteTransaction}
            />
            <Summary date={selectedDate} />
          </div>
        </div>
      ) : (
        <div className={s.counterTabContainer}>
          <TransactionForm
            options={optionsIncome}
            income={income}
            onSubmit={handleSubmit}
            placeholder="Категория дохода"
          />
          <div className={s.reportBlock}>
            <TransactionsList
              transactions={transactions}
              income={income}
              onDelete={onDeleteTransaction}
            />
            <Summary date={selectedDate} income={income} />
          </div>
        </div>
      )}
      {/* <TransactionForm options={optionsExpense} /> */}
    </div>
  );
}
