import { Link } from 'react-router-dom';

import { paths } from '../../config';
import { ReactComponent as GoBack } from '../../images/reportsCategories/goBack.svg';
import s from './GoBackBtn.module.css';

const GoBackBtn = () => {
  return (
    <>
      <Link to={paths.home} className={s.link}>
        <GoBack className={s.icon} />
        <span className={s.text}>Вернуться на главную</span>
      </Link>
    </>
  );
};

export default GoBackBtn;
