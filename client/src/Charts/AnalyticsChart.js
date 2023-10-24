import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = ({ chartArray }) => {
  useEffect(() => {}, [chartArray]);

  const chartData = {
    labels: chartArray?.data.map((entry, index) =>
      new Date(entry.time).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Door Cycles Count",
        data: chartArray.data.map((entry) => entry.door_cycles_count),
        backgroundColor: "rgba(0, 255, 0, 0.6)",
        borderColor: "rgba(0, 255, 0, 0.6)",
        borderWidth: 1,
      },
      {
        label: "Door Openings Count",
        data: chartArray.data.map((entry) => entry.door_openings_count),
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        borderColor: "rgba(255, 0, 0, 0.6)",
        borderWidth: 1,
      },
      {
        label: "Door Closings Count",
        data: chartArray.data.map((entry) => entry.door_closings_count),
        backgroundColor: "rgba(250, 161, 65, 0.7)",
        borderColor: "rgba(250, 161, 65, 0.7)",
        borderWidth: 1,
      },
      {
        label: "Door Closed Count",
        data: chartArray.data.map((entry) => entry.door_closed_count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Door Opened Count",
        data: chartArray.data.map((entry) => entry.door_opened_count),
        backgroundColor: "rgba(0, 0, 255, 0.6)",
        borderColor: "rgba(0, 0, 255, 0.6)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Door cycle count over time",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={chartData} height={"70x"} options={options} />;
};

export default AnalyticsChart;
