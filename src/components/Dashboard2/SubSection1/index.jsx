import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Content1 from "@components/dashboard2/Subsection1/Content1";
import Content2 from "@components/dashboard2/Subsection1/Content2";

const SubSection1 = () => {
  return (
    <Main>
      <ContentWrapper>
        <Content1 data={data}></Content1>
      </ContentWrapper>
      <ContentWrapper>
        <Content1 data={data}></Content1>
      </ContentWrapper>
      <ContentWrapper>
        <Content1 data={data}></Content1>
      </ContentWrapper>
    </Main>
  );
};

export default SubSection1;

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-left: 25vw;
`;
const ContentWrapper = styled.div``;

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
