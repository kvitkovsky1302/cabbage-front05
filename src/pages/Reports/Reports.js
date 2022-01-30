import BalanceComponent from '../../components/BalanceComponent';
import ReportsCategories from '../../components/ReportsCategories';
// import ReportsCategorie from '../../components/ReportsCategorie';
import ExponsesAndIncome from '../../components/TransactionsPerMonth';
import s from './Reports.module.css';

export default function Reports() {
  return (
    <div className={s.reportsContainer}>
      <div className={s.balanceContainer}>
        <BalanceComponent />
      </div>
      <ExponsesAndIncome />
      <ReportsCategories />
      {/* <ReportsCategorie /> */}
    </div>
  );
}
