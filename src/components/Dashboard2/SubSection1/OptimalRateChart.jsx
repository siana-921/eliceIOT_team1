import { useRecoilState, useRecoilValue } from "recoil";
import { colorCodeAtom } from "@store/atoms";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "@emotion/styled";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const OptimalRateChart = () => {
  const colorCode = useRecoilValue(colorCodeAtom);
  const {
    gray,
    yellow,
    lime,
    green,
    turquoise,
    navy,
    lavender,
    deepgreen,
    marine,
    orange,
  } = colorCode;
  return (
    <Main>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend
            wrapperStyle={{
              position: "absolute",
              width: "100%",
              height: "0%",
              right: 0,
              top: 0,
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
          <Bar dataKey="pv" fill={lime} />
          <Bar dataKey="uv" fill={green} />
        </BarChart>
      </ResponsiveContainer>
    </Main>
  );
};

export default OptimalRateChart;

const Main = styled.div`
  width: 100%;
  height: 67%;
  padding: 1vh;
  margin-top: 1vh;
`;
