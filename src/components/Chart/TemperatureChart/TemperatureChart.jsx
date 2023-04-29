import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

let temperatureData = [];
let temperatureFullName = [];

const data = {
  labels: temperatureFullName,
  datasets: [
    {
      label: "Temperature",
      data: temperatureData,
      backgroundColor: ["rgb(0,168,107)", "rgba(228, 228, 228, 0.2)"],
      hoverOffset: 4,
      rotation: -90,
      circumference: 180,
    },
  ],
};

export default function TemperatureChart() {
  return <Doughnut data={data} />;
}
