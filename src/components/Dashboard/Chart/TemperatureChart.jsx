import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TemperatureChart({ temperatureData }) {
  const data = {
    labels: ["온도"],
    datasets: [
      {
        label: ["Temperature"],
        data: [temperatureData.slice(-1)[0]],
        backgroundColor: ["rgb(0,168,107)"],
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

  return <Doughnut data={data} options={options} />;
}
