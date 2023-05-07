import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Content1 = ({ data, width, height }) => {
  return (
    <Main>
      <div style={{ width: "100%" }}>
        <SensorTitleText>빛</SensorTitleText>
        <AreaChart
          width={width}
          height={height * 0.19}
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
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>

        <SensorTitleText>온도</SensorTitleText>
        <AreaChart
          width={width}
          height={height * 0.19}
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
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>

        <SensorTitleText>대기습도</SensorTitleText>
        <AreaChart
          width={width}
          height={height * 0.19}
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
            dataKey="humid"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>

        <SensorTitleText>토양수분</SensorTitleText>
        <AreaChart
          width={width}
          height={height * 0.19}
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
            dataKey="mois"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </div>
    </Main>
  );
};
export default Content1;

const Main = styled.div`
  position: relative;
  display: flex;
`;
const SensorTitleText = styled.p`
  width: 100%;
  padding: 0.5rem 0 0.5rem 1rem;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 400;
`;
