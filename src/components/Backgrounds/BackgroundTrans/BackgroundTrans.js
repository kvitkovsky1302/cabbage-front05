import s from './BackgroundTrans.module.css';

export default function BackgroundTrans({ children }) {
  return (
    <div className={s.backgroundPage}>
      <div className={s.background}>
        <div className={s.coles}></div>
        {children}
      </div>
    </div>
  );
}
