import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Salary } from '../../images/reportsCategories/salary.svg';
import { ReactComponent as AdditionalIncome } from '../../images/reportsCategories/additional-income.svg';
import Charts from '../Charts';
import s from './Income.module.css';

export default function Income() {
  const [activeValue, setActiveValue] = useState('');
  const [descriptionList, setDescriptionList] = useState([]);

  // Получаем данные расходов из редакса
  const incomeData = useSelector(
    state => state.desiredMonth.IncomePerDesiredMonth.data,
  );
  console.log('incomeData', incomeData);

  //Задает в стейт значение поля "имя"
  function onClickSetActiveValue(value) {
    setActiveValue(value);
    const chartCategoriesLIst = incomeData.filter(
      ({ category }) => category === value,
    );
    setDescriptionList(chartCategoriesLIst);
  }

  //Принимает массив данных с бекенда и отдает массив категорий
  //с значенем sum > 0 и добавляет иконки категорий
  function match(arr) {
    const incomeCategories = [
      {
        sum: null,
        category: 'ЗП',
        img: <Salary className={activeValue === 'ЗП' ? s.activeSvg : s.svg} />,
      },
      {
        sum: null,
        category: 'Доп. доход',
        img: (
          <AdditionalIncome
            className={activeValue === 'Доп. доход' ? s.activeSvg : s.svg}
          />
        ),
      },
    ];
    arr &&
      arr.forEach(({ sum, category }) => {
        if (sum > 0) {
          incomeCategories.forEach(el => {
            if (el.category === category) {
              el.sum += sum;
            }
          });
        }
      });
    const categorieslist = incomeCategories.filter(({ sum }) => sum > 0);
    return categorieslist;
  }
  //Пропускаем коллекцию полученную с бекенда через функцию match
  const categoriesList = match(incomeData);

  return (
    <>
      <div className={s.wrapList}>
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
        </ul>
      </div>
      {descriptionList.length > 0 && (
        <div className={s.wrapCharts}>
          <Charts descriptionList={descriptionList} />
        </div>
      )}
    </>
  );
}
