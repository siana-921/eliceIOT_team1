import React from "react";
import styled from "@emotion/styled";
import BarGraph from "../controller_comp/barGraph";
import SimpleTable from "../elements/simpleTable";

import humidity from "../../../public/dummydata/humidityLog.json";

const ControlCard = () => {
  return (
    <ControlPanel>
      <FirstPanel>
        <Title style={{ marginLeft: "-25px" }}>데이터</Title>
        <BarGraph></BarGraph>
      </FirstPanel>
      <SecondPanel>
        <Title>목표 습도</Title>
        <Goal></Goal>
        <span style={{ fontSize: "86px" }}>%</span>
        <CurrentCondition>
          현재 습도가 목표 습도에 비해 2% 부족합니다.
        </CurrentCondition>
        <Title style={{ marginTop: "40px" }}>습도 제어 기록</Title>
        <SimpleTable data={humidity} />
      </SecondPanel>
    </ControlPanel>
  );
};

export default ControlCard;

const ControlPanel = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  margin: 0 auto;
`;
const FirstPanel = styled.div`
  width: 50%;
  height: 80%;
  padding: 15px;
`;
const SecondPanel = styled.div`
  width: 50%;
  height: 80%;
  padding: 15px;
  font-size: 15px;
`;
const ThirdPanel = styled.div`
  width: 33%;
  height: 80%;
  padding: 15px;
`;

//firstPanel
const Title = styled.h3`
  font-size: 32px;
  text-align: left;
  padding-left: 15px;
  padding-bottom: 20px;
`;

//secondPanel
const Goal = styled.input`
  width: 150px;
  margin-top: -20px;
  line-height: 1em;
  font-size: 120px;
  text-align: center;
  font-weight: 200;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
    color: #ffdd00;
  }
`;
const CurrentCondition = styled.p`
  font-size: 15px;
`;

//#112839
/*
<div
        style={{
          width: "60%",
          height: "200px",
          padding: "20px",
          backgroundColor: "#FFFFFF",
          margin: "0 auto",
          borderRadius: "30px",
        }}
      >
        현재 습도[물주기버튼]
      </div>
*/
