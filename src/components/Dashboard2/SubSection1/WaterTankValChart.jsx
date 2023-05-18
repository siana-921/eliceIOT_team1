import styled from "@emotion/styled";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useRecoilValue } from "recoil";
import { latestSensorSelector } from "@store/selector";

const renderCustomizedLabel = ({ cx, cy, percent, payload }) => {
  if (payload.name === "data") {
    return (
      <text
        x={cx}
        y={cy}
        fill="white"
        textAnchor={"middle"}
        dominantBaseline="central"
        fontWeight={400}
        style={{ textShadow: "5px 5px 0px rgba(0,0,0,0.15)" }}
      >
        <tspan fontSize={"6vw"}>{`${(percent * 100).toFixed(0)}`}</tspan>
      </text>
    );
  }

  return null;
};

const WaterTankValChart = () => {
  const sensorData = useRecoilValue(latestSensorSelector);

  const MAX = 2300;

  const waterLevel =
    (sensorData?.water_level * 100) / MAX > 100 ? 100 : (sensorData?.water_level * 100) / MAX;

  const data = [
    { name: "blank", value: 100 - waterLevel },
    { name: "data", value: waterLevel },
  ];
  const COLORS = ["#E4E4E4", "#8884D8"];

  return (
    <Main>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="75%"
            dataKey="value"
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <TitleText>물통수위</TitleText>
    </Main>
  );

  return <></>;
};

export default WaterTankValChart;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;
const TitleText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  font-size: 1.3rem;
`;
