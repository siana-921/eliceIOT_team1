import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import SectionCard from "@components/dashboardtest/Section";

const Dashboard2 = ({ data }) => {
  console.log(data);
  return (
    <Main>
      <SectionDivider>
        <SectionCard
          data={data}
          style={{ backgroundColor: "yellow" }}
        ></SectionCard>
        <BlankDiv></BlankDiv>
        <BlankDiv></BlankDiv>
        <BlankDiv></BlankDiv>
      </SectionDivider>
    </Main>
  );
};

export default Dashboard2;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SectionDivider = styled.div`
  display: flex;
  > * {
    width: 25%;
    height: 100vh;
  }
`;
const BlankDiv = styled.div`
  background-color: grey;
`;
export async function getServerSideProps() {
  const data = [
    {
      name: "uw",
      uv: 100,
      fill: "transparent",
    },
    {
      name: "unknow",
      uv: 23,
      fill: "#ffc658",
    },
  ];

  return {
    props: {
      data,
    },
  };
}
