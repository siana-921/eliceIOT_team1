import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { useRecoilValue } from "recoil";
import { sensorDataSelector } from "@store/selector";

import ComparisonAllChart from "@/components/Dashboard2/SubSection1/ComparisonAllChart";
import DotsChart from "@/components/Dashboard2/SubSection1/DotsChart.jsx";
//import WaterTankValChart from "@components/dashboard2/Subsection1/WaterTankValChart.jsx";
import EnviroMoistChart from "@/components/Dashboard2/SubSection1/EnviroMoistChart.jsx";
import DayAndNightTempChart from "@/components/Dashboard2/SubSection1/DayAndNightTempChart.jsx";

const SubSection1Contents = () => {
  const sensorData = useRecoilValue(sensorDataSelector);
  const result = sensorData.reduce(
    (acc, cur) => {
      if (cur.temp !== 0) {
        acc.temp.max = Math.max(acc.temp.max, cur.temp);
        acc.temp.min = Math.min(acc.temp.min, cur.temp);
      }
      if (cur.humidity !== 0) {
        acc.humidity.max = Math.max(acc.humidity.max, cur.humidity);
        acc.humidity.min = Math.min(acc.humidity.min, cur.humidity);
      }
      if (cur.light !== 0) {
        acc.light.max = Math.max(acc.light.max, cur.light);
        acc.light.min = Math.min(acc.light.min, cur.light);
      }
      if (cur.moisture !== 0) {
        acc.moisture.max = Math.max(acc.moisture.max, cur.moisture);
        acc.moisture.min = Math.min(acc.moisture.min, cur.moisture);
      }
      return acc;
    },
    {
      temp: { max: 0, min: 0 },
      humidity: { max: 0, min: 0 },
      light: { max: 0, min: 0 },
      moisture: { max: 0, min: 0 },
    }
  );

  return (
    <Main name="SubSection1Main">
      <Grid>
        <Item1>
          <ComparisonAllChart></ComparisonAllChart>
        </Item1>
        <Item2>
          <DotsChart></DotsChart>
          <DayAndNightTempChart></DayAndNightTempChart>
        </Item2>
        <Item3>
          <MaxAndMinTitle>최고조도 | 최저조도</MaxAndMinTitle>
          <MaxAndMinValue>
            {result.light.max}/{result.light.min}
          </MaxAndMinValue>
        </Item3>
        <Item5>
          <MaxAndMinTitle>최고온도 | 최저온도</MaxAndMinTitle>
          <MaxAndMinValue>
            {result.temp.max}/{result.temp.min}
          </MaxAndMinValue>
        </Item5>
        <Item6>
          <MaxAndMinTitle>최고대기습도 | 최저대기습도</MaxAndMinTitle>
          <MaxAndMinValue>
            {result.humidity.max}/{result.humidity.min}
          </MaxAndMinValue>
        </Item6>
        <Item7>
          <MaxAndMinTitle>최고토양수분 | 최저토양수분</MaxAndMinTitle>
          <MaxAndMinValue>
            {result.moisture.max}/{result.moisture.min}
          </MaxAndMinValue>
        </Item7>
        <Item8>{/*<WaterTankValChart></WaterTankValChart>*/}</Item8>
        <Item9>
          <EnviroMoistChart></EnviroMoistChart>
        </Item9>
      </Grid>
    </Main>
  );
};

export default SubSection1Contents;

const Main = styled.div`
  position: relative;
  width: 75vw;
  height: 100vh;
  display: flex;
  padding: 20px 20px 20px 0;
`;

//------------텍스트 스타일------------//
const MaxAndMinTitle = styled.p``;
const MaxAndMinValue = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 56px;
  text-align: center;
  display: flex;
  justify-content: center;
  transform: translateX(-50%) translateY(-40%);
`;

//-------------------------------------//

//-------------그리드 레이아웃--------------//
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 97%;
  > * {
    border: 0px solid #000;
  }
`;
const Item1 = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 7;
`;
const Item2 = styled.div`
  grid-column: 4 / 8;
  grid-row: 1 / 5;
`;
const Item3 = styled.div`
  position: relative;
  grid-column: 8 / 10;
  grid-row: 1 / 2;
`;

const Item5 = styled.div`
  position: relative;
  grid-column: 8 / 10;
  grid-row: 2 / 3;
`;
const Item6 = styled.div`
  position: relative;
  grid-column: 8 / 10;
  grid-row: 3 / 4;
`;
const Item7 = styled.div`
  position: relative;
  grid-column: 8 / 10;
  grid-row: 4 / 5;
`;
const Item8 = styled.div`
  grid-column: 4 / 6;
  grid-row: 5 / 7;
`;
const Item9 = styled.div`
  grid-column: 6 / 10;
  grid-row: 5 / 7;
`;
//-------------------------------------//
