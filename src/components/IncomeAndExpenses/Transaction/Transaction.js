import moment from 'moment';
import { ReactComponent as DeleteButton } from '../../../img/reportsCategories/deleteBtn.svg';
import Button from '../Button';

import s from './Transaction.module.css';

export default function Transaction({ item, income, onDelete }) {
  const currCost = income ? item.sum : -item.sum;
  const currClass = income ? `${s.tableAmountIncome}` : `${s.tableAmount}`;

  return (
    <tr className={s.tableTr}>
      <td className={s.tableDate}>{moment(item.date).format('DD.MM.yyyy')}</td>
      <td className={s.tableProduct}>{item.description}</td>
      <td className={s.tableCategory}>{item.category}</td>
      <td className={currClass}>{`${currCost} грн.`}</td>
      <td className={s.tableDelete}>
        <Button
          type="button"
          className={s.deleteBtn}
          onClick={() => onDelete(item._id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
}
