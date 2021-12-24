import React, { useCallback } from 'react';
import NumberFormat from 'react-number-format';
import Loader from 'react-js-loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { briefOperations, briefSelectors } from '../../redux/brief';
import { transactionsSelectors} from '../../redux/transaction';


import s from './Brief.module.css';

const items = [
  { month: 'декабрь', total: '6332' , id:'1'},
  { month: 'ноябрь', total: '100.00' , id:'2'},
  { month: 'октябрь', total: '200.00' , id:'3'},
  { month: 'сентябрь', total: '300.00' , id:'4'},
  { month: 'август', total: '400.00' , id:'5'},
  { month: 'июль', total: '500.00' , id:'6'},

];

export default function Brief({ incomes, selectedDate }) {
  // const dispatch = useDispatch();

  const expense = useSelector(briefSelectors.getExpenseBySixMonth);
  const income = useSelector(briefSelectors.getIncomeBySixMonth);
  const isLoading = useSelector(transactionsSelectors.getIsLoading);

  items[0].total = incomes ? `${income}.00` : `${expense}.00`;

  // const getIncome = useCallback(() => {
  //   dispatch(briefOperations.getIncomeByMonth(selectedDate));
  // }, [dispatch, selectedDate]);

  // const getExpense = useCallback(() => {
  //   dispatch(briefOperations.getExpenseByMonth(selectedDate));
  // }, [dispatch, selectedDate]);


  // useEffect(() => {
  //   if (incomes) {
  //     console.log('income')
  //     getIncome();
  //   }
  //   if (!incomes) {
  //     console.log('no income')
  //     getExpense();
  //   }
  // }, [getIncome, getExpense, incomes]);

  return (
    <div className="summary__wrapper">
      {/* <p className="summary__title">СВОДКА</p>
      <ul className="summary__list">
        {isLoading ? (
          <li>
            <Loader
              type="spinner-circle"
              bgColor={'#ff751d'}
              color={'#ff751d'}
              size={60}
            />
          </li>
        ) : (
          items?.length > 0 &&
          items.map(item => (
            <li className="summary__item" key={`${item.id}`}>
              <span className="field-month">{item.month.toUpperCase()}</span>
              <span className="field-summ">
                <p>{item.total}</p> */}
                {/* <NumberFormat
                  thousandsGroupStyle="thousand"
                  decimalScale={2}
                  type="text"
                  value={item.total}
                  displayType="text"
                  allowNegative={true}
                  thousandSeparator={' '}
                  fixedDecimalScale={true}
                  allowEmptyFormatting={false}
                /> */}
              {/* </span>
            </li>
          ))
        )}
      </ul> */}
    </div>
  );
}
