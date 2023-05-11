import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorCode } from "@store/constValue";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const ComparisonAllChart = ({ data, width, height }) => {
  return (
    <Main>
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
          <Area type="monotone" dataKey="light" stroke={colorCode.orange} fill={colorCode.orange} />
        </AreaChart>
      </ResponsiveContainer>

      <SensorTitleText>
        <p>조도</p>
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
          <Area type="monotone" dataKey="temp" stroke={colorCode.yellow} fill={colorCode.yellow} />
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
          <Area type="monotone" dataKey="humid" stroke={colorCode.lime} fill={colorCode.lime} />
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
          <Area type="monotone" dataKey="mois" stroke={colorCode.marine} fill={colorCode.marine} />
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
