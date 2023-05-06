import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const GaugeTest = ({ data }) => {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    setChartReady(true);
  }, []);

  const customFill = (index, active) => {
    if (index === 4) {
      return "#ffffff";
    }
    return active ? data[index].fill : "#666";
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      {chartReady && (
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="30%"
            cy="50%"
            innerRadius="80%"
            outerRadius="80%"
            barSize={25}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar minAngle={270} clockWise dataKey="uv" fill="#ffffff" />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const data = [
    {
      name: "unknow",
      uv: 23,
      fill: "#ffc658",
    },
  ];

  return {
    props: {
      data,
    },
  };
}

export default GaugeTest;
