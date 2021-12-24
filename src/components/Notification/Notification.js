import s from './Notification.module.css';

const Notification = ({ onClose }) => {
  return (
    <div className={s.notificationWrapper} onClick={onClose}>
      <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
      <p className={s.text}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
    </div>
  );
};

export default Notification;
