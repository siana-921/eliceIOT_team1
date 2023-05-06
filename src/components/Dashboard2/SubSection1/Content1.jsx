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

const Content1 = ({ data }) => {
  const [chartHeight, setChartHeight] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.24);
      setChartHeight(window.innerHeight * 0.19);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Main>
      <Section width={"33%"}>
        <div style={{ width: "100%" }}>
          <SensorTitleText>빛</SensorTitleText>
          <ResponsiveContainer width={chartWidth} height={chartHeight}>
            <AreaChart
              width={500}
              height={20}
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

          <SensorTitleText>온도</SensorTitleText>
          <ResponsiveContainer width={chartWidth} height={chartHeight}>
            <AreaChart
              width={500}
              height={200}
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

          <SensorTitleText>대기습도</SensorTitleText>
          <ResponsiveContainer width={chartWidth} height={chartHeight}>
            <AreaChart
              width={500}
              height={200}
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

          <SensorTitleText>토양수분</SensorTitleText>
          <ResponsiveContainer width={chartWidth} height={chartHeight}>
            <AreaChart
              width={500}
              height={200}
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
        </div>
      </Section>
    </Main>
  );
};
export default Content1;

const Main = styled.div`
  position: relative;
  display: flex;
`;
const Section = styled.div`
  width: ${({ width }) => (width ? width : "25vw")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ffffff")};
`;

const SensorTitleText = styled.p`
  width: 100%;
  padding: 0.5rem 0 0.5rem 1rem;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 400;
`;
