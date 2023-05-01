import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const temperatureData = [];
const data = {
  labels: "온도",
  datasets: [
    {
      label: "Temperature",
      data: temperatureData,
      backgroundColor: ["rgb(0,168,107)", "rgba(228, 228, 228, 0.2)"],
    },
  ],
};

const options = {
  cutout: "50%",
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
    tooltip: {
      enabled: true,
    },
  },
};

export default function TemperatureChart() {
  return <Doughnut data={data} options={options} />;
}