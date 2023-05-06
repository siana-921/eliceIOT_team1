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
      </SectionDivider>
      <SectionDivider>
        <BlankDiv></BlankDiv>
      </SectionDivider>
      <SectionDivider>
        <BlankDiv></BlankDiv>
      </SectionDivider>
      <SectionDivider>
        <BlankDiv></BlankDiv>
      </SectionDivider>
    </Main>
  );
};

export default Dashboard2;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const SectionDivider = styled.div`
  width: 25%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const BlankDiv = styled.div`
  width: 100%;
  height: 100%;
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
