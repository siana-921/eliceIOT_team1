import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorCodeAtom } from "@store/atoms";

const data = [
  {
    name: "Page A",
    temp: 32,
    light: 85,
    humid: 54,
    moisture: 31,
  },
  {
    name: "Page B",
    temp: 68,
    light: 67,
    humid: 50,
    moisture: 43,
  },
  {
    name: "Page C",
    temp: 39,
    light: 98,
    humid: 89,
    moisture: 55,
  },
  {
    name: "Page D",
    temp: 80,
    light: 10,
    humid: 28,
    moisture: 27,
  },
  {
    name: "Page E",
    temp: 15,
    light: 11,
    humid: 11,
    moisture: 35,
  },
  {
    name: "Page F",
    temp: 14,
    light: 68,
    humid: 17,
    moisture: 55,
  },
  {
    name: "Page g",
    temp: 14,
    light: 68,
    humid: 17,
    moisture: 55,
  },
];

const EnviroMoistChart = () => {
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
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 0,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="moisture" barSize={20} fill="#C1DC70" />
        <Line type="monotone" dataKey="temp" stroke={orange} />
        <Line type="monotone" dataKey="light" stroke={yellow} />
        <Line type="monotone" dataKey="humid" stroke={marine} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default EnviroMoistChart;
