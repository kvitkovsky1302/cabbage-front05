// import React, { useState } from 'react';
import Tabs from '../../components/IncomeAndExpenses/Tabs';
import Balance from '../../components/Balance';
import ToReportsBtn from '../../components/ToReportsBtn';
import s from './TransactionView.module.css';

export default function TransactionView() {
  return (
    <>
      <div className={s.transactionsContainer}>
        <div className={s.balanceContainer}>
          <div>
            <Balance />
          </div>
          <div>
            <ToReportsBtn />
          </div>
        </div>
        <Tabs />
      </div>
    </>
  );
}
