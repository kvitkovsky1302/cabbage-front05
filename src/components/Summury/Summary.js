import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Summary.module.css';
import { summaryOperations, summarySelectors } from '../../redux/summary';

export default function Summary({ date }) {
  const dispatch = useDispatch();
  const summary = useSelector(summarySelectors.getMonthTransaction);
  console.log('summary', summary);

  useEffect(() => {
    dispatch(summaryOperations.fetchMonthExpenses(date));
  }, [dispatch]);

  return (
    <div>
      <table className={s.table}>
        <thead>
          <tr className={s.tableRow}>
            <th className={s.headerText}>Сводка</th>
          </tr>
        </thead>
        <tbody>
          {/* {summary?.map(item => (
            <tr className={s.tableRow}>
              <td>{item.month}</td>
              <td>{item.sum}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
