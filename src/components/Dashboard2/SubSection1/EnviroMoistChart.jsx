import { ComposedChart, Line, Bar, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useRecoilValue } from "recoil";
import { sensorDataAtom } from "@/store/atoms";
import { colorCode } from "@store/constValue";

const EnviroMoistChart = () => {
  const sensorData = useRecoilValue(sensorDataAtom);
  const data = sensorData.map((item, index) => ({
    name: `Day ${index + 1}`,
    light: item.light / 100,
    temp: item.temp,
    humidity: item.humidity,
    moisture: item.moisture,
  }));

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
        <Tooltip />
        <XAxis dataKey="name" display="none" />
        <Bar dataKey="moisture" barSize={20} fill="#C1DC70" />
        <Line type="monotone" dataKey="temp" stroke={colorCode.orange} isAnimationActive={false} />
        <Line type="monotone" dataKey="light" stroke={colorCode.yellow} isAnimationActive={false} />
        <Line type="monotone" dataKey="humidity" stroke={colorCode.marine} isAnimationActive={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default EnviroMoistChart;
