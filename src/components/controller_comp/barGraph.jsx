import React from "react";
import styled from "@emotion/styled";

import Bar from "../elements/bar";

const BarGraph = () => {
  return (
    <div>
      <Graph>
        <Title>현재 습도</Title>
        <Bar percent={42} thickness={17}></Bar>
        <SubTitle style={{ marginTop: "30px" }}>최고 습도</SubTitle>
        <Bar percent={82} thickness={12}></Bar>
        <SubTitle>최저 습도</SubTitle>
        <Bar percent={17} thickness={12}></Bar>
        <SubTitle>평균 습도</SubTitle>
        <Bar percent={34} thickness={12}></Bar>
      </Graph>
    </div>
  );
};

const Title = styled.h2`
  text-align: left;
  padding-top: 22px;
  padding-bottom: 10px;
`;
const SubTitle = styled.h2`
  margin-top: 10px;
  text-align: left;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 22px;
`;
const Graph = styled.div`
  width: 100%;
  height: 100%;
`;
export default BarGraph;
