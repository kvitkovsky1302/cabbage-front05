import { ReactComponent as Salary } from '../../images/reportsCategories/salary.svg';
import { ReactComponent as AdditionalIncome } from '../../images/reportsCategories/additional-income.svg';

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
