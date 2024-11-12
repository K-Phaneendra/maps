import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function getRandomRGBA() {
  const r = Math.floor(Math.random() * 256);  // Random red value (0-255)
  const g = Math.floor(Math.random() * 256);  // Random green value (0-255)
  const b = Math.floor(Math.random() * 256);  // Random blue value (0-255)
  const a = Math.random().toFixed(2);         // Random alpha value (0.00-1.00)

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const DoughnutChart = ({ chartData, label }) => {
  const labels = [];
  const datasets = [];
  const dataset = {
    label: label,
    data: [],
    backgroundColor: [],
    borderColor: [],
    borderWidth: 1,
  };
  Object.keys(chartData).forEach((key) => {
    labels.push(key);
    dataset.data.push(chartData[key]);
    dataset.backgroundColor.push(getRandomRGBA());
    dataset.borderColor.push(getRandomRGBA());
  });
  datasets.push(dataset);
  const data = {
    // labels: ['Delivered', 'Un-delivered', 'In Progress'],
    labels: labels,
    // datasets: [
    //     {
    //         label: 'Order Status',
    //         data: [60, 25, 15], // example data
    //         backgroundColor: [
    //             'rgba(75, 192, 192, 0.6)', // color for 'Delivered'
    //             'rgba(255, 99, 132, 0.6)',  // color for 'Un-delivered'
    //             'rgba(255, 206, 86, 0.6)',  // color for 'In Progress'
    //         ],
    //         borderColor: [
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(255, 206, 86, 1)',
    //         ],
    //         borderWidth: 1,
    //     },
    // ],
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
