import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Content1 from "@components/dashboard2/Subsection1/Content1";
import Content2 from "@components/dashboard2/Subsection1/Content2";
import Content3 from "@components/dashboard2/Subsection1/Content3";

const SubSection1Contents = () => {
  return (
    <Main name="SubSection1Main">
      <ContentWrapper name="Content1Wrapper">
        <Content1 data={data}></Content1>
      </ContentWrapper>
      <ContentWrapper name="Content1Wrapper">
        <Content1 data={data}></Content1>
      </ContentWrapper>{" "}
      <ContentWrapper name="Content1Wrapper">
        <Content1 data={data}></Content1>
      </ContentWrapper>
    </Main>
  );
};

export default SubSection1Contents;

const Main = styled.div`
  position: relative;
  width: 75vw;
  height: 100vh;
  display: flex;
  padding-left: 0vw;
`;
const ContentWrapper = styled.div`
  width: 33%;
  height: 100vh;
  overflow: hidden;
`;

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
