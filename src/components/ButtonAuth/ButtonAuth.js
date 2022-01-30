import b from './Button.module.css';

function ButtonAuth({ type, onClick, buttonName, disabled }) {
  return (
    <div>
      <button type={type} onClick={onClick} disabled={disabled} className={b.btn}>
        {buttonName}
      </button>
    </div>
  );
}

export { ButtonAuth };
