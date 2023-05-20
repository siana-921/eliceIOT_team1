import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorCode } from "@store/constValue";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DotsChart = () => {
  const [data01, setData01] = useState([]);
  const [data02, setData02] = useState([]);

  useEffect(() => {
    setData01([
      { hour: "12a", index: 1, value: 170 },
      { hour: "1a", index: 1, value: 180 },
      { hour: "2a", index: 1, value: 150 },
      { hour: "3a", index: 1, value: 120 },
      { hour: "4a", index: 1, value: 200 },
      { hour: "5a", index: 1, value: 300 },
      { hour: "6a", index: 1, value: 400 },
      { hour: "7a", index: 1, value: 200 },
      { hour: "8a", index: 1, value: 100 },
      { hour: "9a", index: 1, value: 150 },
      { hour: "10a", index: 1, value: 160 },
      { hour: "11a", index: 1, value: 170 },
      { hour: "12a", index: 1, value: 180 },
      { hour: "1p", index: 1, value: 144 },
      { hour: "2p", index: 1, value: 166 },
      { hour: "3p", index: 1, value: 145 },
      { hour: "4p", index: 1, value: 150 },
      { hour: "5p", index: 1, value: 400 },
      { hour: "6p", index: 1, value: 180 },
      { hour: "7p", index: 1, value: 165 },
      { hour: "8p", index: 1, value: 130 },
      { hour: "9p", index: 1, value: 140 },
      { hour: "10p", index: 1, value: 170 },
      { hour: "11p", index: 1, value: 180 },
    ]);
  }, []);

  const parseDomain = () => [
    0,
    Math.max(
      Math.max.apply(
        null,
        data01.map((entry) => entry.value)
      )
    ),
  ];

  const renderTooltip = (props) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            margin: 0,
            padding: 10,
          }}
        >
          <p>{data.hour}</p>
          <p>
            <span>value: </span>
            {data.value}
          </p>
        </div>
      );
    }
    return null;
  };

  const domain = parseDomain();
  const range = [30, 215];

  return (
    <Main>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="14%">
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <YAxis
              type="number"
              width={0}
              dataKey="index"
              name="day1"
              style={{ display: "none" }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip
              cursor={{ display: "none" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data01} fill={colorCode.gray} />
          </ScatterChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="14%">
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <YAxis
              type="number"
              width={0}
              dataKey="index"
              name="day2"
              style={{ display: "none" }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip
              cursor={{ display: "none" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data01} fill={colorCode.gray} />
          </ScatterChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="14%">
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <YAxis
              type="number"
              width={0}
              dataKey="index"
              name="day3"
              style={{ display: "none" }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip
              cursor={{ display: "none" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data01} fill={colorCode.gray} />
          </ScatterChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="14%">
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <YAxis
              type="number"
              width={0}
              dataKey="index"
              name="day4"
              style={{ display: "none" }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip
              cursor={{ display: "none" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data01} fill={colorCode.gray} />
          </ScatterChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="14%">
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <YAxis
              type="number"
              width={0}
              dataKey="index"
              name="day5"
              style={{ display: "none" }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip
              cursor={{ display: "none" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data01} fill={colorCode.gray} />
          </ScatterChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="14%">
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <YAxis
              type="number"
              width={0}
              dataKey="index"
              name="day6"
              style={{ display: "none" }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip
              cursor={{ display: "none" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data01} fill={colorCode.gray} />
          </ScatterChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="14%">
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <YAxis
              type="number"
              width={0}
              dataKey="index"
              name="day7"
              style={{ display: "none" }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip
              cursor={{ display: "none" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data01} fill={colorCode.gray} />
          </ScatterChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Main>
  );
};

export default DotsChart;

const Main = styled.div`
  width: 100%;
  height: 33%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
