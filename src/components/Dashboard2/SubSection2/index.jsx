import styled from "@emotion/styled";
import Slider from "rc-slider";
import Switch from "react-switch";
import { useState } from "react";

import Table from "@components/elements/simpleTable";
import ActuatorLogTable from "../elements/ActuatorLogTable";

const SubSection2Contents = () => {
  const [autoControlOn, setAutoControlOn] = useState(true);

  const handleChange = (checked) => {
    setAutoControlOn(checked);
  };
  const handleClick = (e) => {
    e.stopPropagation();
  };
  console.log(autoControlOn);
  return (
    <Main>
      <GridContainer>
        <Item1>
          <TitleText>자동제어</TitleText>
          <MessageText>
            <div>현재 자동제어가 동작하고 있습니다.</div>
          </MessageText>
          <p>자동제어 시작일자 : 2222/22/22 33:33:33</p>
          <ToggleButton onClick={handleClick}>
            <label>
              <Switch
                onChange={handleChange}
                checked={autoControlOn}
                onColor="#00b7d8"
                offColor="#B8B8B8"
                checkedIcon={false}
                uncheckedIcon={false}
              ></Switch>
            </label>
          </ToggleButton>
        </Item1>
        <Item2>
          <TitleText>자동제어 설정</TitleText>
          {autoControlOn ? (
            <AutoControlSettings>
              <RadioWrapper>
                <StyledRadio name="valueBasedControl" className="On">
                  <div>자동제어 동작 중에는 설정할 수 없습니다</div>
                </StyledRadio>
                <StyledRadio name="timeBasedControl" className="On">
                  <div>자동제어 동작 중에는 설정할 수 없습니다</div>
                </StyledRadio>
              </RadioWrapper>
            </AutoControlSettings>
          ) : (
            <AutoControlSettings>
              <RadioWrapper>
                <input type="radio" id="setValueMode"></input>
                <StyledRadio
                  name="valueBasedControl"
                  className="Off"
                  for="setValueMode"
                  onClick={handleClick}
                ></StyledRadio>
                <StyledRadio name="timeBasedControl" className="Off">
                  <input type="radio" id="setTimeMode"></input>
                </StyledRadio>
              </RadioWrapper>
            </AutoControlSettings>
          )}
        </Item2>
        <Item3>
          <SmallTitleText>즉시 제어</SmallTitleText>
          <ControlBtnWrapper>
            <ControlBtn>ON</ControlBtn>
            <ControlBtn>OFF</ControlBtn>
          </ControlBtnWrapper>
        </Item3>
        <Item4>
          <SmallTitleText>제어 기록</SmallTitleText>
          <ActuatorLogTable></ActuatorLogTable>
        </Item4>
      </GridContainer>
    </Main>
  );
};

export default SubSection2Contents;

const Main = styled.div`
  width: 75vw;
  height: 100vh;
  position: relative;
  padding: 20px 20px 20px 0;
`;

//---------------그리드-----------------//
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 100%;
  > * {
    border: solid 0px #000;
    padding: 1.2vw;
  }
`;
const Item1 = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  position: relative;
`;
const Item2 = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 7;
`;
const Item3 = styled.div`
  grid-column: 4 / 6;
  grid-row: 1 / 3;
`;
const Item4 = styled.div`
  grid-column: 4 / 6;
  grid-row: 3 / 7;
`;
//--------------------------------------//

//---------------텍스트-----------------//
const TitleText = styled.h2`
  font-size: 3vw;
`;
const SmallTitleText = styled.h2`
  font-size: 2vw;
`;
const MessageText = styled.p`
  font-size: 2vw;
  padding-bottom: 3px;
`;
//--------------------------------------//

//---------------Wrapper-----------------//
const AutoControlSettings = styled.div`
  position: relative;
  width: 100%;
  height: 88%;
`;
const RadioWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;
const ControlBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 78%;
  margin-top: 2%;
`;
//----------------------------------------//

//---------------동작요소-----------------//
const ToggleButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2vw;
  border: none;
  font-size: 1rem;
  background-color: transparent;
`;
const ControlBtn = styled.button`
  width: 50%;
  border-radius: 0;
  border: none;
`;
const StyledRadio = styled.div`
  width: 100%;
  height: 48%;
  border-radius: 20px;
  background-color: #e4e4e4;
  border: 2px solid #dcdcdc;
  &.Off {
    background-color: #ffcc00;
    border: none;
  }
  &.On {
    > div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
//--------------------------------------//
