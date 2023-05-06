import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const GaugeTest = ({ data, style }) => {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    setChartReady(true);
  }, []);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {chartReady && (
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="30%"
            innerRadius="80%"
            outerRadius="80%"
            barSize={20}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={100}
              maxAngle={100}
              background
              clockWise
              dataKey="uv"
              fill="#ffffff"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GaugeTest;
