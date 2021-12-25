import { Link } from 'react-router-dom';

import { paths } from '../../config/index';
import { ReactComponent as BarChart } from '../../images/reports/barChart.svg';

import s from './ToReportsBtn.module.css';

export default function ToReportsBtn() {
  return (
    <>
      <Link to={paths.reports} className={s.link}>
        <p className={s.btnText}>Перейти к отчетам</p>
        <BarChart className={s.btnIcon} />
      </Link>
    </>
  );
}
