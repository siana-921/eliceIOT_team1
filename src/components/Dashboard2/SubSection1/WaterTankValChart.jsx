import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "blank", value: 100 - 70 },
  { name: "data", value: 70 },
];
const COLORS = ["#E4E4E4", "#8884D8"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  payload,
}) => {
  if (payload.name === "data") {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

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

const WaterTankValChart = () => (
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
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <TitleText>물통수위할까 자동제어비율할까</TitleText>
  </Main>
);

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
