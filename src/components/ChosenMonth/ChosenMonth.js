import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { ReactComponent as Left } from '../../images/reportsCategories/left-arrow.svg';
import { ReactComponent as Right } from '../../images/reportsCategories/right-arrow.svg';
import { transactionsSelectors } from '../../redux/transaction';
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

  const currentDate = useSelector(transactionsSelectors.currentDate);
  useEffect(() => {
    setVisibleDate(moment(currentDate).format('MMMM YYYY'));
    setstateDate(currentDate);
    dispatch(operations.fatchTransactionsPerMonth(currentDate));
  }, [dispatch]);

  const incrementDate = e => {
    e.preventDefault();
    if (moment() < moment(stateDate)) {
      alert(`месяц еще не настал`);
      // console.log(`месяц еще не настал`);
      return;
    }

    const nextMonth = moment(stateDate).add(1, 'month').format('MMMM YYYY');
    const nextMonthForObject = moment(stateDate)
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

    const nextMonth = moment(stateDate).add(-1, 'month').format('MMMM YYYY');
    const nextMonthForObject = moment(stateDate)
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
