import s from './CategoryInput.module.css';

export default function CategoryInput({ value, onChange, income }) {
  return (
    <input
      type="text"
      className={s.categoryInput}
      value={value}
      onChange={onChange}
      placeholder={income ? 'Описание дохода' : 'Описание товара'}
    ></input>
  );
}
