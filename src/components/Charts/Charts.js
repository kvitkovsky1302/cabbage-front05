import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transaction';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import s from './Charts.module.css';

function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function Charts({ descriptionList, expense }) {
  const { width } = useWindowDimensions();
  const labelName = expense ? 'Доход' : 'Расход';

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

  const data = {
    labels: stuckDescriptionList.map(el => el.description),
    showAllTooltips: true,
    plugins: {
      datalabels: {
        display: true,
        color: 'green',
      },
    },
    datasets: [
      {
        label: labelName,
        data: stuckDescriptionList.map(el => el.sum),
        backgroundColor: [
          'rgb(255, 117, 29)',
          'rgb(255, 218, 192)',
          'rgb(255, 218, 192)',
        ],

        borderWidth: 1,
        borderRadius: 10,
        barThickness: 38,
        barMargin: 20,
      },
    ],
  };

  const optionsVertical = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const optionsHorizontal = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const height = width < 480 ? 400 : 200;
  const options = width < 480 ? optionsHorizontal : optionsVertical;

  return (
    <div className={s.chartContainer}>
      <Bar data={data} height={height} options={options} />
    </div>
  );
}
