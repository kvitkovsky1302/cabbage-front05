import s from './HomeMain.module.css';

export default function MainHome({ children }) {
  return (
    <div className={s.main__container}>
      <div className={s.hero}></div>
      <div className={s.main}></div>
      {children}
    </div>
  );
}
