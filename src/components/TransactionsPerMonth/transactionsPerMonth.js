import s from './transactionsPerMonth.module.css';

const transactionsPerMonth = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <div className={s.itemWrapper}>
          <span className={s.itemName}>Расходы:</span>
          <div className={s.itemExponses}>
            <span>- 18 000.00</span>
            <span> грн.</span>
          </div>
        </div>
        {/* <p className={s.itemName}>
          Расходы:<span className={s.itemExponses}> -18000</span>
        </p> */}
      </li>
      <li className={s.item}>
        <div className={s.itemWrapper}>
          <span className={s.itemName}>Доходы:</span>
          <div className={s.itemIncome}>
            <span>+ 18 000.00</span>
            <span> грн.</span>
          </div>
        </div>
        {/* <p className={s.itemName}>
          Доходы:<span className={s.itemIncome}> +18000</span>
        </p> */}
      </li>
    </ul>
  );
};

export default transactionsPerMonth;
