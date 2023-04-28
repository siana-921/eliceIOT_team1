import React from "react";
import styled from "@emotion/styled";
import GraphSection from "./GraphSection";
import SimpleTable from "../../elements/simpleTable";

//임시 import --- 나중에 props에 따라 각자 다른 api로 연결해서 사용
//GraphSection와 SimpleTable에도 여기에서 사용되는 컴포넌트는 습도에 관련된 데이터를 가져오라고 props로 알려줘야할듯
import humidity from "../../../../public/dummydata/humidityLog.json";
import light from "../../../../public/dummydata/lightLog.json";

const Panel = (props) => {
  return (
    <ControlPanel>
      <FirstPanel>
        <Title style={{ marginLeft: "-25px" }}>데이터</Title>
        <GraphSection text={props.category}></GraphSection>
      </FirstPanel>
      <SecondPanel>
        {props.category === "조도" ? (
          <Category>
            <Title>LED 제어</Title>
            <Buttons>
              <Button style={{ backgroundColor: "#00a86b", color: "#fff" }}>
                ON
              </Button>
              <Button>OFF</Button>
            </Buttons>
            <Title style={{ marginTop: "40px" }}>{props.text} 제어 기록</Title>
            <SimpleTable data={light} />
          </Category>
        ) : (
          <Category>
            <Title>목표 {props.category}</Title>
            <Goal></Goal>
            <span style={{ fontSize: "86px" }}>%</span>
            <CurrentCondition>
              현재 {props.category}가 목표 {props.category}에 비해 2%
              부족합니다.
            </CurrentCondition>
            <Title style={{ marginTop: "40px" }}>{props.text} 제어 기록</Title>
            <SimpleTable data={humidity} />
          </Category>
        )}
      </SecondPanel>
    </ControlPanel>
  );
};

const ControlPanel = styled.div`
  width: 80vw;
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

const Category = styled.div``;
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
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Button = styled.button`
  width: 40%;
  height: 20vh;
  min-height: 150px;
  border: none;
  border-radius: 20px;
  font-size: 5em;
  font-weight: 700;
`;
export default Panel;

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
