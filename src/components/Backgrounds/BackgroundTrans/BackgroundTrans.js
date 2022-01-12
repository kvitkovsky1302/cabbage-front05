import s from './BackgroundTrans.module.css';

export default function BackgroundTrans({ children, location }) {
  return (
    <div className={s.backgroundPage}>
      <div className={s.background}>
        <div className={location ? `${s.coles}` : `${s.colesTr}`}></div>
        {children}
      </div>
    </div>
  );
}
