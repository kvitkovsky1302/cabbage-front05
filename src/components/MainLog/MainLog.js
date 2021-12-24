import s from './MainLog.module.css';

export default function MainLog() {
  return (
    <div className={s.main__container}>
      <div className={s.hero}>
        <h1 className={s.hero__title}>Smart Finance</h1>
        <div className={s.coles}></div>
      </div>
      <div className={s.main}></div>
    </div>
  );
}
