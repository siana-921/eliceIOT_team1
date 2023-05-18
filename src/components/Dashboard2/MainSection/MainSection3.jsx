import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { latestSensorSelector } from "@/store/selector";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MainSection3Content = () => {
  const latestData = useRecoilValue(latestSensorSelector);

  const latestValue = latestData.temp;

  return (
    <Main>
      <BackTriangleWrapper>
        <BackTriangleShape></BackTriangleShape>
      </BackTriangleWrapper>
      <SensorNameText>Temperature ──────────────────</SensorNameText>
      <DataValueText>
        {latestValue}
        <PercentText>°C</PercentText>
      </DataValueText>

      <RandomMessageWrapper>
        <RandomMsg>바질의 최적온도는 26도 입니다</RandomMsg>
        <RandomMsg>바질은 여름보다 겨울 나기가 더 힘들어요</RandomMsg>
        <RandomMsg>바질의 적정온도는 15도 이상, 32도 이하입니다</RandomMsg>
      </RandomMessageWrapper>

      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={200}
            height={60}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area type="monotone" dataKey="uv" stroke="rgba(0,0,0,0.3)" fill="rgba(0,0,0,0.1)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Main>
  );
};

export default MainSection3Content;

const Main = styled.div`
width: 100%
height: 100%
overflow: hidden`;

//----------------섹션 내부 레이아웃 (Wrapper)
const RandomMessageWrapper = styled.div`
  padding: 1rem 1.3rem 1rem 1rem;
`;
const ChartWrapper = styled.div`
  width: 25vw;
  height: 25vh;
  position: absolute;
  bottom: 0;
  margin-bottom: -10px;
`;
//----------------------------------

//-------------------디자인 요소
const BackTriangleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 25vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;
const BackTriangleShape = styled.div`
  position: absolute;
  top: -18vw;
  left: -18vw;
  width: 35vw;
  height: 25vw;
  transform: rotate(45deg);
  background-color: #ffffff;
  z-index: -1;
`;
const SliderWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;
//---------------------------------

//----------------텍스트 스타일

const DataValueText = styled.p`
  font-size: 10rem;
  margin-top: -1.2rem;
`;
const SensorNameText = styled.p`
  font-size: 3rem;
  font-weight: 200;
  min-width: 13vw;
  white-space: nowrap;
`;
const PercentText = styled.span`
  font-size: 5rem;
  font-weight: 300;
`;
const SlideTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
`;
const RandomMsg = styled.p`
  font-size: 1.1rem;
  text-align: right;
`;
//--------------------------------

const data = [
  {
    name: "sunday",
    uv: 18,
  },
  {
    name: "monday",
    uv: 21,
  },
  {
    name: "thusday",
    uv: 18,
  },
  {
    name: "wednesday",
    uv: 26,
  },
  {
    name: "friday",
    uv: 25,
  },
  {
    name: "saterday",
    uv: 24,
  },
  {
    name: "temp",
    uv: 19,
  },
  {
    name: "temp",
    uv: 22,
  },
];
