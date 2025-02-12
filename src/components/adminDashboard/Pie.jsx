import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['#9CA4AF', '#727579', '#CA063C'],
      borderColor: ['#9CA4AF', '#727579', '#CA063C'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          let total = tooltipItem.chart.data.datasets[0].data.reduce((sum, value) => sum + value, 0);
          let percentage = ((tooltipItem.raw / total) * 100).toFixed(2);
          return `${tooltipItem.label}: ${percentage}%`;
        },
      },
    },
    legend: {
      position: 'top',
    },
  },
};

const PieComponent = () => {
  return <Pie data={data} options={options} width={300} height={300} />;
};

export default PieComponent;
