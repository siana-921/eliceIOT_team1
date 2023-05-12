import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { sensorDataAtom } from "@/store/atoms";
import { colorCode } from "@store/constValue";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ComparisonAllChart = (data2) => {
  const sensorData = useRecoilValue(sensorDataAtom);

  const data = sensorData.map((item, index) => ({
    name: `Day ${index + 1}`,
    light: item.light / 100,
    temp: item.temp,
    humidity: item.humidity,
    moisture: item.moisture,
  }));

  return (
    <Main>
      <SensorTitleText>
        <p>온도</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
        <AreaChart
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="light"
            stroke={colorCode.orange}
            fill={colorCode.orange}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>

      <SensorTitleText>
        <p>조도</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
        <AreaChart
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temp"
            stroke={colorCode.yellow}
            fill={colorCode.yellow}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>

      <SensorTitleText>
        <p>토양수분</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
        <AreaChart
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="humidity"
            stroke={colorCode.lime}
            fill={colorCode.lime}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>

      <SensorTitleText>
        <p>대기습도</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
        <AreaChart
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="moisture"
            stroke={colorCode.marine}
            fill={colorCode.marine}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Main>
  );
};
export default ComparisonAllChart;

const Main = styled.div`
  width: 100%;
  height: 102%;
  position: relative;
  padding: 1rem 0 1rem 0;
`;
const SensorTitleText = styled.div`
  width: 100%;
  height: 3%;
  font-size: 1.2rem;
  text-align: right;
  padding-right: 2rem;
  font-weight: 400;
  > p {
    padding-top: 0.2rem;
  }
`;
