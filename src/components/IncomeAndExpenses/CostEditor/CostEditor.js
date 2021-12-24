import { ReactComponent as Calculator } from '../../../img/reportsCategories/calculator.svg';
import s from './CostEditor.module.css';

export default function CostEditor({ cost, onChange }) {
  return (
    <label className={s.costEditor_label}>
      <input
        type="number"
        className={s.costEditor_input}
        value={cost}
        onChange={onChange}
        placeholder="0,00"
      />
      <Calculator className={s.calculator} />
    </label>
  );
}
