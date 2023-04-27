import React from "react";
import styled from "@emotion/styled";

import Bar from "../elements/bar";

import nowHumidity from "../../../public/dummydata/nowHumidity";

const BarGraph = () => {
  return (
    <div>
      <Graph>
        <Title>현재 습도 ({nowHumidity.now})</Title>
        <Bar percent={nowHumidity.now} thickness={17} color={"#7ACFDE"}></Bar>
        <SubTitle style={{ marginTop: "30px" }}>
          최고 습도 ({nowHumidity.maximum})
        </SubTitle>
        <Bar
          percent={nowHumidity.maximum}
          thickness={12}
          color={"#000000"}
        ></Bar>
        <SubTitle>최저 습도 ({nowHumidity.minimum})</SubTitle>
        <Bar
          percent={nowHumidity.minimum}
          thickness={12}
          color={"#000000"}
        ></Bar>
        <SubTitle>평균 습도 ({nowHumidity.average})</SubTitle>
        <Bar
          percent={nowHumidity.average}
          thickness={12}
          color={"#000000"}
        ></Bar>
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
