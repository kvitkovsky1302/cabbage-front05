import s from './Charts.module.css';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function Charts({ descriptionList }) {
  //Принимает массив всех транзакций и выдает массив
  //транзакций, сгрупированных по полю description
  function match(arr) {
    const stuckDescriptionList = [];
    arr.forEach(({ sum, description }) => {
      const isIncludes = stuckDescriptionList.find(
        el => el.description === description,
      );
      if (isIncludes) {
        stuckDescriptionList.forEach(el => {
          if (el.description === description) {
            el.sum += sum;
          }
        });
      } else stuckDescriptionList.push({ sum, description });
    });

    stuckDescriptionList.sort((a, b) => b.sum - a.sum);

    return stuckDescriptionList;
  }

  //Пропускаем массив всех транзакций через ф-цию match
  const stuckDescriptionList = match(descriptionList);

  //Настройки ChartJS
  let mql = window.matchMedia('all and (max-width: 767px)');
  const options = {
    indexAxis: mql.matches ? 'y' : 'x',
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: '',
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          //   offset: true,
        },
      },
      ticks: {
        // display: mql.matches ? false : true,
        display: false,
      },
      y: {
        grid: {
          // offset: true,
          drawTicks: false,
        },
        ticks: {
          display: mql.matches ? true : false,
          stepSize: 100000000,
        },
      },
    },
  };

  //Данные для отрисовки ChartJS
  const data = {
    labels: stuckDescriptionList.map(el => el.description),
    datasets: [
      {
        label: '',
        data: stuckDescriptionList.map(el => el.sum),
        showLine: false,
        backgroundColor: [
          'rgb(255, 117, 29)',
          'rgb(255, 218, 192)',
          'rgb(255, 218, 192)',
        ],
        barThickness: 38,
        // barPercentage: 0.1,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className={s.bar}>
      <Bar data={data} options={options} />
    </div>
  );
}
