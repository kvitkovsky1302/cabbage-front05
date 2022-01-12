import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import sprite from './icons.svg';
import Charts from '../Charts';
import { ReactComponent as Salary } from '../../images/reportsCategories/salary.svg';
import { ReactComponent as AdditionalIncome } from '../../images/reportsCategories/additional-income.svg';
import { ReactComponent as Transport } from '../../images/reportsCategories/transport.svg';
import { ReactComponent as Products } from '../../images/reportsCategories/products.svg';
import { ReactComponent as Health } from '../../images/reportsCategories/health.svg';
import { ReactComponent as Alcohol } from '../../images/reportsCategories/alcohol.svg';
import { ReactComponent as Entertainment } from '../../images/reportsCategories/entertainment.svg';
import { ReactComponent as Housing } from '../../images/reportsCategories/housing.svg';
import { ReactComponent as Technics } from '../../images/reportsCategories/technics.svg';
import { ReactComponent as Communal } from '../../images/reportsCategories/communal.svg';
import { ReactComponent as Sport } from '../../images/reportsCategories/sport.svg';
import { ReactComponent as Education } from '../../images/reportsCategories/education.svg';
import { ReactComponent as Other } from '../../images/reportsCategories/other.svg';
import expenseCategories from './expenseCategories.json';
import incomeCategories from './incomeCategories.json';
// import Income from '../Income';
// import Expence from '../Expence';
import { ReactComponent as LeftArrow } from '../../images/reportsCategories/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../images/reportsCategories/right-arrow.svg';
import s from './ReportsCategories.module.css';

export default function ReportsCategories() {
  const [activeValue, setActiveValue] = useState('');
  const [descriptionList, setDescriptionList] = useState([]);
  const [toggle, setToggle] = useState(false);

  const incomeData = useSelector(
    state => state.desiredMonth.IncomePerDesiredMonth.data,
  );

  const expenseData = useSelector(
    state => state.desiredMonth.ExponsePerDesiredMonth.data,
  );

  const memoizedOnClickToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  useEffect(() => {
    setDescriptionList(categoriesList);
  }, [toggle]);

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

  const incomeCategories = [
    {
      sum: null,
      category: 'ЗП',
      description: 'ЗП',
      img: <Salary className={activeValue === 'ЗП' ? s.activeSvg : s.svg} />,
    },
    {
      sum: null,
      category: 'Доп. доход',
      description: 'Доп. доход',
      img: (
        <AdditionalIncome
          className={activeValue === 'Доп. доход' ? s.activeSvg : s.svg}
        />
      ),
    },
  ];

  const expenceCategories = [
    {
      sum: null,
      category: 'Транспорт',
      description: 'Транспорт',
      img: (
        <Transport
          className={activeValue === 'Транспорт' ? s.activeSvg : s.svg}
        />
        // <svg className={s.svg} title="Транспорт">
        //   <use xlinkHref={`${sprite}#Транспорт`} title="Транспорт" />
        // </svg>
      ),
    },
    {
      sum: null,
      category: 'Продукты',
      description: 'Продукты',
      img: (
        <Products
          className={activeValue === 'Продукты' ? s.activeSvg : s.svg}
        />
      ),
    },
    {
      sum: null,
      category: 'Здоровье',
      description: 'Здоровье',
      img: (
        <Health className={activeValue === 'Здоровье' ? s.activeSvg : s.svg} />
      ),
    },
    {
      sum: null,
      category: 'Алкоголь',
      description: 'Алкоголь',
      img: (
        <Alcohol className={activeValue === 'Алкоголь' ? s.activeSvg : s.svg} />
      ),
    },
    {
      sum: null,
      category: 'Развлечения',
      description: 'Развлечения',
      img: (
        <Entertainment
          className={activeValue === 'Развлечения' ? s.activeSvg : s.svg}
        />
      ),
    },
    {
      sum: null,
      category: 'Всё для дома',
      description: 'Всё для дома',
      img: (
        <Housing
          className={activeValue === 'Всё для дома' ? s.activeSvg : s.svg}
        />
      ),
    },
    {
      sum: null,
      category: 'Техника',
      description: 'Техника',
      img: (
        <Technics className={activeValue === 'Техника' ? s.activeSvg : s.svg} />
      ),
    },
    {
      sum: null,
      category: 'Коммуналка, связь',
      description: 'Коммуналка, связь',
      img: (
        <Communal
          className={activeValue === 'Коммуналка, связь' ? s.activeSvg : s.svg}
        />
      ),
    },
    {
      sum: null,
      category: 'Спорт, хобби',
      description: 'Спорт, хобби',
      img: (
        <Sport
          className={activeValue === 'Спорт, хобби' ? s.activeSvg : s.svg}
        />
      ),
    },
    {
      sum: null,
      category: 'Образование',
      description: 'Образование',
      img: (
        <Education
          className={activeValue === 'Образование' ? s.activeSvg : s.svg}
        />
      ),
    },
    {
      sum: null,
      category: 'Прочее',
      description: 'Прочее',
      img: <Other className={activeValue === 'Прочее' ? s.activeSvg : s.svg} />,
    },
  ];

  function onClickSetActiveValue(value, arr) {
    setActiveValue(value);
    const chartCategoriesLIst = arr.filter(
      ({ category }) => category === value,
    );
    setDescriptionList(chartCategoriesLIst);
  }

  const categories = toggle ? incomeCategories : expenceCategories;
  const Data = toggle ? incomeData : expenseData;

  function match(arr, categories) {
    arr &&
      arr.forEach(({ sum, category }) => {
        if (sum > 0) {
          categories.forEach(el => {
            if (el.category === category) {
              el.sum += sum;
            }
          });
        }
      });
    const categorieslist = categories.filter(({ sum }) => sum > 0);
    return categorieslist;
  }

  const categoriesList = match(Data, categories);

  const data = toggle ? 'ДОХОДЫ' : 'РАСХОДЫ';

  return (
    <section className={s.reports}>
      <div className={s.wrapper}>
        <div className={s.navigationWrapper}>
          <button onClick={memoizedOnClickToggle} className={s.buttonArrow}>
            <LeftArrow className={s.svgArrow} />
          </button>
          <div className={s.dataWrapper}>
            <div className={s.data}>{data}</div>
          </div>
          <button onClick={memoizedOnClickToggle} className={s.buttonArrow}>
            <RightArrow className={s.svgArrow} />
          </button>
        </div>
        <div className={s.wrapList}>
          <ul className={s.list}>
            {categoriesList &&
              categoriesList.map(({ sum, category, img }) => (
                <li key={category} className={s.item}>
                  <button
                    onClick={() => onClickSetActiveValue(category, Data)}
                    className={s.button}
                  >
                    <span className={s.price}>{sum.toFixed(2)}</span>
                    {img}
                    <p className={s.category}>{category}</p>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {descriptionList.length > 0 && (
        <div className={s.wrapChart}>
          <Charts descriptionList={descriptionList} expense={toggle} />
        </div>
      )}
    </section>
  );
}
