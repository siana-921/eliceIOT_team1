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

  console.log(data);
  return (
    <div
      style={{
        height: "220vh",
        width: "60vw",
        position: "absolute",
        top: "20vh",
        left: "-10vh",
        zIndex: "-1",
      }}
    >
      {chartReady && (
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="35%"
            innerRadius="50%"
            outerRadius="85%"
            barSize={30}
            data={data}
            startAngle={90}
            endAngle={180}
          >
            <RadialBar minAngle={270} clockWise dataKey="uv" />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GaugeTest;
