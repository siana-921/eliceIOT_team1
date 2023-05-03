import { Chart as ChartJS, registerables } from "chart.js/auto";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

// 조도센서차트
export default function LineChart(props) {
  const { lightData } = props;
  const maxLightValue = Math.max(...lightData);
  const minLightValue = Math.min(...lightData);

  const labels = ["0시", "4시", "8시", "12시", "16시", "20시"];

  let lineChartData = [];

  const data = {
    labels: ["시간"],
    datasets: [
      {
        label: "조도",
        data: lightData,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0.1,
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

  labels.forEach((labels, index) => {
    lineChartData.push({
      x: labels,
      y: lightData[index],
    });
  });

  return <Line data={data} options={options} />;
}
