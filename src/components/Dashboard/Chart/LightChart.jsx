import { Bar } from "react-chartjs-2";

export default function LightChart(props) {
  const { yesterdayLight, currentLight } = props;

  const data = {
    labels: ["24시간 전 조도", "현재 조도"],
    datasets: [
      {
        label: "조도",
        data: [yesterdayLight, currentLight],
        backgroundColor: ["rgba(255, 134,159,0.4)", "rgb(75, 192, 192)"],
      },
    ],
  };

  const options = {
    indexAxis: "x",
    plugins: {
      title: {
        display: true,
        text: "조도",
        font: { weight: "bold", size: 16 },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
