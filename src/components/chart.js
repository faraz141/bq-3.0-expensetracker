import React from 'react';
import { Chart as ChartJS,ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register the required components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ income = 0, expense = 0 }) => {
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ['#2ecc71', '#e74c3c'],
        hoverBackgroundColor: ['#27ae60', '#c0392b'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;