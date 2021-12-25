import { useState, useEffect, useCallback } from 'react';
import Income from '../Income';
import Expence from '../Expence';
import { ReactComponent as LeftArrow } from '../../images/reportsCategories/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../images/reportsCategories/right-arrow.svg';
import s from './ReportsCategories.module.css';

export default function ReportsCategories() {
  const [toggle, setToggle] = useState(false);

  //Переключает "тумблер" при нажатии на стрелки вправо/влево
  const memoizedOnClickToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  //Добавляет переключение категорий с помощью клавиатуры
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        memoizedOnClickToggle();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [memoizedOnClickToggle]);

  let data = toggle ? 'ДОХОДЫ' : 'РАСХОДЫ';

  return (
    <section className={s.reports}>
      <div className={s.navigationWrapper}>
        <button onClick={memoizedOnClickToggle} className={s.button}>
          <LeftArrow className={s.svg} />
        </button>
        <div className={s.dataWrapper}>
          <div className={s.data}>{data}</div>
        </div>
        <button onClick={memoizedOnClickToggle} className={s.button}>
          <RightArrow className={s.svg} />
        </button>
      </div>
      {toggle ? <Income /> : <Expence />}
    </section>
  );
}
