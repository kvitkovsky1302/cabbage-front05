import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import s from './Summary.module.css';
import { summaryOperations, summarySelectors } from '../../redux/summary';

export default function Summary({ date, income }) {
  const dispatch = useDispatch();
  const { summary } = useSelector(summarySelectors.getMonthTransaction);

  const getIncomes = useCallback(() => {
    dispatch(summaryOperations.fetchMonthIncomes());
  }, [dispatch]);

  const getExpenses = useCallback(() => {
    dispatch(summaryOperations.fetchMonthExpenses());
  }, [dispatch]);

  useEffect(() => {
    if (income) {
      getIncomes();
    }
    if (!income) {
      getExpenses();
    }
  }, [getIncomes, getExpenses, income]);

  const numberEditor = number => {
    return (number = number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));
  };

  return (
    <div>
      <ul className={s.table}>
        <li className={`${s.headerText} ${s.tableHeadRow}`}>Сводка</li>
        {summary?.map(item => (
          <li className={s.tableRow} key={uuidv4()}>
            <span>{item.month}</span>
            <span>{numberEditor(item.sum)}.00</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
