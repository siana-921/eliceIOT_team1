import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function LightChart(props) {
  const { lightData } = props;
  const maxLightValue = Math.max(...lightData);
  const minLightValue = Math.min(...lightData);

  const labels = ["24시간 전 조도", "현재 조도"];

  const data = {
    labels: ["24시간 전 조도", "현재 조도"],
    datasets: [
      {
        label: ["조도"],
        data: [lightData[0], lightData[1]],
        backgroundColor: ["rgba(255, 134,159,0.4)", "rgb(75, 192, 192)"],
      },
    ],
  };

  const options = {
    labels: ["조도"],
    scales: {
      y: {
        min: minLightValue,
        max: maxLightValue,
        // y축 간격
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  // let lightChartData = [];

  // labels.forEach((labels, index) => {
  //   lightChartData.push({
  //     x: labels,
  //     y: lightData[index],
  //   });
  // });

  return <Bar options={options} data={data} />;
}
