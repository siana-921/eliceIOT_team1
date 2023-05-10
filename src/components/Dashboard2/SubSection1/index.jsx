import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import ComparisonAllChart from "@/components/Dashboard2/SubSection1/ComparisonAllChart";
import DotsChart from "@/components/Dashboard2/SubSection1/DotsChart";
import WaterTankValChart from "@components/dashboard2/Subsection1/WaterTankValChart";
import EnviroMoistChart from "@/components/Dashboard2/SubSection1/EnviroMoistChart";
import OptimalRateChart from "@/components/Dashboard2/SubSection1/OptimalRateChart";

const SubSection1Contents = ({}) => {
  return (
    <Main name="SubSection1Main">
      <Grid>
        <Item1>
          <ComparisonAllChart data={data}></ComparisonAllChart>
        </Item1>
        <Item2>
          <DotsChart></DotsChart>
          <OptimalRateChart></OptimalRateChart>
        </Item2>
        <Item3>
          <MaxAndMinTitle>최고조도 | 최저조도</MaxAndMinTitle>
          <MaxAndMinValue>88/10</MaxAndMinValue>
        </Item3>
        <Item5>
          <MaxAndMinTitle>최고온도 | 최저온도</MaxAndMinTitle>
          <MaxAndMinValue>33/28</MaxAndMinValue>
        </Item5>
        <Item6>
          <MaxAndMinTitle>최고대기습도 | 최저대기습도</MaxAndMinTitle>
          <MaxAndMinValue>43/32</MaxAndMinValue>
        </Item6>
        <Item7>
          <MaxAndMinTitle>최고토양수분 | 최저토양수분</MaxAndMinTitle>
          <MaxAndMinValue>82/47</MaxAndMinValue>
        </Item7>
        <Item8>
          <WaterTankValChart></WaterTankValChart>
        </Item8>
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
  font-size: 5vw;
  text-align: center;
  display: flex;
  justify-content: center;
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
  grid-column: 8 / 10;
  grid-row: 1 / 2;
`;

const Item5 = styled.div`
  grid-column: 8 / 10;
  grid-row: 2 / 3;
`;
const Item6 = styled.div`
  grid-column: 8 / 10;
  grid-row: 3 / 4;
`;
const Item7 = styled.div`
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

//-------------히트맵--------------//

//-------------------------------------------//
//임시 데이터
const data = [
  {
    name: "Day1",
    light: 100,
    temp: 27,
    humid: 55,
    mois: 58,
  },
  {
    name: "Day2",
    light: 50,
    temp: 31.1,
    humid: 41,
    mois: 77,
  },
  {
    name: "Day3",
    light: 70,
    temp: 25.2,
    humid: 33,
    mois: 65,
  },
  {
    name: "Day4",
    light: 30,
    temp: 21,
    humid: 37,
    mois: 60,
  },
  {
    name: "Day5",
    light: 67,
    temp: 30,
    humid: 35,
    mois: 48,
  },
  {
    name: "Day6",
    light: 48,
    temp: 30,
    humid: 58,
    mois: 55,
  },
  {
    name: "Day7",
    light: 33,
    temp: 27,
    humid: 60,
    mois: 47,
  },
];
