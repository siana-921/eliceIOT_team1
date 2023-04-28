import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["습도"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(0, 168, 107, 0.2)", "rgba(228,228,228, 0.2)"],
      borderColor: ["rgba(0, 168, 107, 1)", "rgba(228,228,228, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function HumidityChart() {
  return <Doughnut data={data} />;
}

// width: ${(props) => props.width};
// height: ${(props) => (props.height ? props.height : '120px')};
// margin: ${(props) => props.margin};
// border-radius: ${(props) => props.radius};
