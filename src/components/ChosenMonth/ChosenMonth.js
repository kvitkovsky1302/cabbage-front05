import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { ReactComponent as Left } from '../../images/reportsCategories/left-arrow.svg';
import { ReactComponent as Right } from '../../images/reportsCategories/right-arrow.svg';
import {
  incrementMonth,
  decrementMonth,
} from '../../redux/chosenMonth/chosenMonth-action';
import operations from '../../redux/chosenMonth/chosenMonth-operations';

import s from './ChosenMonth.module.css';

const ChosenMonth = () => {
  const dispatch = useDispatch();
  const [visibleDate, setVisibleDate] = useState('');
  const [stateDate, setstateDate] = useState('');

  moment.updateLocale('ru', {
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  });

  useEffect(() => {
    const dateNow = new Date();
    setVisibleDate(moment(dateNow.toISOString()).format('MMMM YYYY'));
    setstateDate(dateNow);
    dispatch(operations.fatchTransactionsPerMonth(dateNow));
  }, [dispatch]);

  const incrementDate = event => {
    event.preventDefault();
    const dateNow = new Date();
    if (Date.parse(dateNow) < Date.parse(stateDate)) {
      console.log(`месяц еще не настал`);
      return;
    }
    const isoDate = stateDate.toISOString();
    const nextMonth = moment(isoDate).add(1, 'month').format('MMMM YYYY');
    const nextMonthForObject = moment(isoDate)
      .add(1, 'month')
      .format('YYYY-MM-DD');
    const normalizedMonth = new Date(nextMonthForObject);
    const nextMonthToState = Date.parse(normalizedMonth);

    setVisibleDate(nextMonth);
    setstateDate(normalizedMonth);

    dispatch(operations.fatchTransactionsPerMonth(normalizedMonth));
    dispatch(incrementMonth({ nextMonthToState }));
  };

  const decrementDate = event => {
    event.preventDefault();

    const isoDate = stateDate.toISOString();
    const nextMonth = moment(isoDate).add(-1, 'month').format('MMMM YYYY');
    const nextMonthForObject = moment(isoDate)
      .add(-1, 'month')
      .format('YYYY-MM-DD');
    const normalizedMonth = new Date(nextMonthForObject);
    const nextMonthToState = Date.parse(normalizedMonth);

    setVisibleDate(nextMonth);
    setstateDate(normalizedMonth);

    dispatch(operations.fatchTransactionsPerMonth(normalizedMonth));
    dispatch(decrementMonth({ nextMonthToState }));
  };

  return (
    <div className={s.container}>
      <p className={s.text}>Текущий период:</p>
      <div className={s.monthWrapper}>
        <button className={s.btn} type="button" onClick={decrementDate}>
          <Left className={s.icon} />
        </button>
        <p className={s.month}>{visibleDate}</p>
        <button className={s.btn} type="button" onClick={incrementDate}>
          <Right className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default ChosenMonth;
