import { Chart as ChartJS, registerables } from "chart.js/auto";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

// 조도센서차트
export default function LineChart(props) {
  const { lightData } = props;
  const lightFullName = [];
  const maxLightValue = Math.max(...lightData);
  const minLightValue = Math.min(...lightData);

  const DATA_COUNT = 6;
  const labels = ["0시", "4시", "8시", "12시", "16시", "20시"];

  let lineChartData = [];
  for (let i = 0; i < DATA_COUNT; i++) {
    lineChartData.push({
      x: labels[i],
      y: lightData[i],
    });
  }

  const data = {
    labels: lightFullName,
    datasets: [
      {
        label: "조도",
        data: lightData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
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

  return <Line data={data} options={options} />;
}
