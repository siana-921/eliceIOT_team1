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
      <SensorTitleText>
        <p>빛</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
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
      </ResponsiveContainer>

      <SensorTitleText>
        <p>온도</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
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
      </ResponsiveContainer>

      <SensorTitleText>
        <p>대기습도</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
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
      </ResponsiveContainer>

      <SensorTitleText>
        <p>토양수분</p>
      </SensorTitleText>
      <ResponsiveContainer width="100%" height="22%">
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
      </ResponsiveContainer>
    </Main>
  );
};
export default Content1;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 1rem 0 1rem 0;
`;
const SensorTitleText = styled.div`
  width: 100%;
  height: 3%;
  font-size: 1.4rem;
  text-align: right;
  padding-right: 2rem;
  font-weight: 400;
  > p {
    padding-top: 0.2rem;
  }
`;
