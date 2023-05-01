import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

// 조도차트

let lightData = [];
let lightFullName = [];

const DATA_COUNT = 7;

// const labels = ["1", "2", "3", "4", "5", "6", "7"];
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

export default function LineChart() {
  return <Line data={data} />;
}
