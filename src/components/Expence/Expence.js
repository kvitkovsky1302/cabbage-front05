import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Transport } from '../../img/reportsCategories/transport.svg';
import { ReactComponent as Products } from '../../img/reportsCategories/products.svg';
import { ReactComponent as Health } from '../../img/reportsCategories/health.svg';
import { ReactComponent as Alcohol } from '../../img/reportsCategories/alcohol.svg';
import { ReactComponent as Entertainment } from '../../img/reportsCategories/entertainment.svg';
import { ReactComponent as Housing } from '../../img/reportsCategories/housing.svg';
import { ReactComponent as Technics } from '../../img/reportsCategories/technics.svg';
import { ReactComponent as Communal } from '../../img/reportsCategories/communal.svg';
import { ReactComponent as Sport } from '../../img/reportsCategories/sport.svg';
import { ReactComponent as Education } from '../../img/reportsCategories/education.svg';
import { ReactComponent as Other } from '../../img/reportsCategories/other.svg';
import Charts from '../Charts';
import s from './Expence.module.css';

export default function Expence() {
  const [activeValue, setActiveValue] = useState('');
  const [descriptionList, setDescriptionList] = useState([]);
  // console.log(descriptionList);

  // Получаем данные расходов из редакса
  const expenceData = useSelector(
    state => state.desiredMonth.ExponsePerDesiredMonth.data,
  );

  //Имитация данных, полученных из редакса
  // const backendCategories = [
  //   { sum: 100, category: 'Транспорт', description: 'Taxi' },
  //   { sum: 100, category: 'Транспорт', description: 'Bus' },
  //   { sum: 100, category: 'Транспорт', description: 'Air' },
  //   { sum: 100, category: 'Продукты', description: 'Bananas' },
  //   { sum: 100, category: 'Здоровье', description: 'Hospital' },
  //   { sum: 100, category: 'Алкоголь', description: 'Beer' },
  // ];

  //Задает в стейт значение поля "имя"
  function onClickSetActiveValue(value) {
    setActiveValue(value);
    const chartCategoriesLIst = expenceData.filter(
      ({ category }) => category === value,
    );
    setDescriptionList(chartCategoriesLIst);
  }

  //Принимает массив данных из редакса и отдает массив категорий
  //с значенем sum > 0 и добавляет иконки категорий
  function match(arr) {
    const expenceCategories = [
      {
        sum: null,
        category: 'Транспорт',
        img: (
          <Transport
            className={activeValue === 'Транспорт' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Продукты',
        img: (
          <Products
            className={activeValue === 'Продукты' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Здоровье',
        img: (
          <Health
            className={activeValue === 'Здоровье' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Алкоголь',
        img: (
          <Alcohol
            className={activeValue === 'Алкоголь' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Развлечение',
        img: (
          <Entertainment
            className={activeValue === 'Развлечение' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Все для дома',
        img: (
          <Housing
            className={activeValue === 'Все для дома' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Техника',
        img: (
          <Technics
            className={activeValue === 'Техника' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Коммуналка, связь',
        img: (
          <Communal
            className={
              activeValue === 'Коммуналка, связь' ? s.activeSvg : s.svg
            }
          />
        ),
      },
      {
        sum: null,
        category: 'Спорт, хобби',
        img: (
          <Sport
            className={activeValue === 'Спорт, хобби' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Образование',
        img: (
          <Education
            className={activeValue === 'Образование' ? s.activeSvg : s.svg}
          />
        ),
      },
      {
        sum: null,
        category: 'Прочее',
        img: (
          <Other className={activeValue === 'Прочее' ? s.activeSvg : s.svg} />
        ),
      },
    ];

    arr &&
      arr.forEach(({ sum, category }) => {
        if (sum > 0) {
          expenceCategories.forEach(el => {
            if (el.category === category) {
              el.sum += sum;
            }
          });
        }
      });
    const categorieslist = expenceCategories.filter(({ sum }) => sum > 0);
    return categorieslist;
  }

  //Пропускаем коллекцию полученную из редакса через функцию match
  const categoriesList = match(expenceData);

  return (
    <>
      <ul className={s.list}>
        {categoriesList &&
          categoriesList.map(({ sum, category, img }) => (
            <li key={category} className={s.item}>
              <button
                onClick={() => onClickSetActiveValue(category)}
                className={s.button}
              >
                <span className={s.price}>{sum.toFixed(2)}</span>
                {img}
                <span className={s.category}>{category}</span>
              </button>
            </li>
          ))}
        {/* Добавляет линии после 3, 6, 9 категорий в мобильной версии */}
        {categoriesList.length > 2 && <div className={s.line1}></div>}
        {categoriesList.length > 5 && <div className={s.line2}></div>}
        {categoriesList.length > 8 && <div className={s.line3}></div>}
      </ul>
      {descriptionList.length > 0 && (
        <Charts descriptionList={descriptionList} />
      )}
    </>
  );
}
