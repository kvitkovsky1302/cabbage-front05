import s from './TransactionsPerMonth.module.css';
import { useSelector } from 'react-redux';
import chosenMonthSelectors from '../../redux/chosenMonth/chosenMonth-selectors';

const TransactionsPerMonth = () => {
    const expensePerMonth = useSelector(chosenMonthSelectors.getExponsePerDesiredMonth);
    const incomePerMonth = useSelector(chosenMonthSelectors.getIncomePerDesiredMonth);

    return (
        <ul className={s.list}>
             <li className={s.item}>
                <p className={s.itemName}>Расходы:<span className={s.itemExponses}> -{expensePerMonth.totalSum}</span></p>
             </li>
             <li className={s.item}>
                <p className={s.itemName}>Доходы:<span className={s.itemIncome}> +{incomePerMonth.totalIncome}</span></p>
             </li>
         </ul>
  );
};


export default TransactionsPerMonth;

