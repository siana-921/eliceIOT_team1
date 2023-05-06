import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import styled from "@emotion/styled";

const GaugeTest = ({ data, style }) => {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    setChartReady(true);
  }, []);

  console.log(data[1].uv);

  return (
    <div style={{ backgroundColor: "yellow", width: "100%", height: "100%" }}>
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
      <ChartLabel>
        <p>{data[1].uv}%</p>
      </ChartLabel>
    </div>
  );
};

export default GaugeTest;

const ChartLabel = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  color: black;
  transform: translateX(-50%);
  font-size: 6vw;
`;
