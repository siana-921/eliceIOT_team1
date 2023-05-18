import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { useRecoilValue } from "recoil";
import {
  formatSensorSelector,
  //dailyAverageMaxMinSelector,
  //dailyAverageSensorDataSelector,
} from "@store/selector";

import ComparisonAllChart from "@components/Dashboard2/SubSection1/ComparisonAllChart";
import DotsChart from "@components/Dashboard2/SubSection1/DotsChart.jsx";
import WaterTankValChart from "@components/Dashboard2/SubSection1/WaterTankValChart.jsx";
import EnviroMoistChart from "@components/Dashboard2/SubSection1/EnviroMoistChart.jsx";
import DayAndNightTempChart from "@components/Dashboard2/SubSection1/DayAndNightTempChart.jsx";

const SubSection1Contents = () => {
  const sensorData = useRecoilValue(formatSensorSelector);

  //필터링 전 origin sensorData기준으로 계산하는거라 셀렉터랑 다름!
  const calMinMax = sensorData.reduce(
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
      temp: { max: 0, min: Infinity },
      humidity: { max: 0, min: Infinity },
      light: { max: 0, min: Infinity },
      moisture: { max: 0, min: Infinity },
    }
  );

  if (calMinMax.light > 1000) {
  }
  const result = {
    ...calMinMax,
    light: {
      max:
        calMinMax.light.max >= 1000
          ? `${(calMinMax.light.max / 1000).toFixed(0)}K`
          : calMinMax.light.max,
      min:
        calMinMax.light.min >= 1000
          ? `${(calMinMax.light.min / 1000).toFixed(0)}K`
          : calMinMax.light.min,
    },
    moisture: {
      max:
        calMinMax.moisture.max >= 1000
          ? `${(calMinMax.moisture.max / 1000).toFixed(1)}K`
          : calMinMax.moisture.max,
      min:
        calMinMax.moisture.min >= 1000
          ? `${(calMinMax.moisture.min / 1000).toFixed(1)}K`
          : calMinMax.moisture.min,
    },
  };

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
          <MaxAndMinContainer>
            <MaxAndMinTitleArea>조도</MaxAndMinTitleArea>
            <MaxAndMinSubTitleArea>
              <div>MAX</div>
              <div>MIN</div>
            </MaxAndMinSubTitleArea>
            <MaxAndMinTextArea>
              <div className="maxmindiv">{result.light.max}</div>
              <div className="maxmindiv">{result.light.min}</div>
            </MaxAndMinTextArea>
          </MaxAndMinContainer>
        </Item3>
        <Item5>
          <MaxAndMinContainer>
            <MaxAndMinTitleArea>온도</MaxAndMinTitleArea>
            <MaxAndMinSubTitleArea>
              <div>MAX</div>
              <div>MIN</div>
            </MaxAndMinSubTitleArea>
            <MaxAndMinTextArea>
              <div className="maxmindiv">{result.temp.max}</div>
              <div className="maxmindiv">{result.temp.min}</div>
            </MaxAndMinTextArea>
          </MaxAndMinContainer>
        </Item5>
        <Item6>
          <MaxAndMinContainer>
            <MaxAndMinTitleArea>대기습도</MaxAndMinTitleArea>
            <MaxAndMinSubTitleArea>
              <div>MAX</div>
              <div>MIN</div>
            </MaxAndMinSubTitleArea>
            <MaxAndMinTextArea>
              <div className="maxmindiv">{result.humidity.max}</div>
              <div className="maxmindiv">{result.humidity.min}</div>
            </MaxAndMinTextArea>
          </MaxAndMinContainer>
        </Item6>
        <Item7>
          <MaxAndMinContainer>
            <MaxAndMinTitleArea>토양수분</MaxAndMinTitleArea>
            <MaxAndMinSubTitleArea>
              <div>MAX</div>
              <div>MIN</div>
            </MaxAndMinSubTitleArea>
            <MaxAndMinTextArea>
              <div className="maxmindiv">{result.moisture.max}</div>
              <div className="maxmindiv">{result.moisture.min}</div>
            </MaxAndMinTextArea>
          </MaxAndMinContainer>
        </Item7>
        <Item8>{<WaterTankValChart></WaterTankValChart>}</Item8>
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

  @media (max-width: 768px) {
    .maxmindiv {
      font-size: 24px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .maxmindiv {
      font-size: 32px;
    }
  }

  @media (min-width: 1025px) {
    .maxmindiv {
      font-size: 52px;
    }
  }
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

//-------------Wrapper--------------//
const MaxAndMinContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 10px 0px 10px;
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const MaxAndMinTitleArea = styled.div`
  width: 100%;
  height: 20%;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  background-color: black;
  color: white;
`;
const MaxAndMinSubTitleArea = styled.div`
  width: 100%;
  height: 20%;
  font-size: 14px;
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const MaxAndMinTextArea = styled.div`
  display: flex;
  width: 100%;
  height: 55%;
  > div {
    font-size: 50px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
