import s from './BackgroundLogin.module.css';

export default function BackgroundLogin({ children }) {
  return (
    <div className={s.backgroundPage}>
      <div className={s.background}>
        <div className={s.coles}></div>
        {children}
      </div>
    </div>
  );
}
