import { useRecoilState, useRecoilValue } from "recoil";
import { colorCode } from "@store/constValue";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styled from "@emotion/styled";

const data = [
  {
    name: "Day 1",
    day: 4320,
    night: 2400,
    optimal: 3000,
  },
  {
    name: "Day 2",
    day: 3000,
    night: 1398,
    optimal: 3000,
  },
  {
    name: "Day 3",
    day: 2000,
    night: 980,
    optimal: 3000,
  },
  {
    name: "Day 4",
    day: 4780,
    night: 2308,
    optimal: 3000,
  },
  {
    name: "Day 5",
    day: 3890,
    night: 900,
    optimal: 3000,
  },
  {
    name: "Day 6",
    day: 2390,
    night: 1800,
    optimal: 3000,
  },
  {
    name: "Day 7",
    day: 3490,
    night: 2300,
    optimal: 3000,
  },
];

const DayAndNightTempChart = () => {
  return (
    <Main>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="day" stackId="a" fill={colorCode.yellow} />
          <Bar dataKey="night" stackId="b" fill={colorCode.palelavender} />
          <Bar dataKey="optimal" fill={colorCode.gray} />
        </BarChart>
      </ResponsiveContainer>
    </Main>
  );
};

export default DayAndNightTempChart;

const Main = styled.div`
  width: 100%;
  height: 67%;
`;
