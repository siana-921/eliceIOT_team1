import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HumidityChart({ humidityData }) {
  const data = {
    labels: ["습도"],
    datasets: [
      {
        label: ["습도"],
        data: humidityData,
        backgroundColor: ["rgba(0, 168, 107, 0.2)"],
        borderColor: ["rgba(0, 168, 107, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
