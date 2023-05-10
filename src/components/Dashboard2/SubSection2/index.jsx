import styled from "@emotion/styled";
import Slider from "rc-slider";

import Table from "@components/elements/simpleTable";
import ActuatorLogTable from "../elements/ActuatorLogTable";

const SubSection2Contents = () => {
  return (
    <Main>
      <GridContainer>
        <Item1>
          <TitleText>자동제어</TitleText>
          <MessageText>현재 자동제어가 동작하고 있습니다.</MessageText>
          <p>자동제어 시작일자 : 2222/22/22 33:33:33</p>
          <ToggleButton>오른쪽위에토글버튼..</ToggleButton>
        </Item1>
        <Item2>
          <TitleText>자동제어 설정</TitleText>
          <RadioWrapper>
            <StyledRadio name="valueBasedControl"></StyledRadio>
            <StyledRadio name="timeBasedControl"></StyledRadio>
          </RadioWrapper>
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 100%;
  > * {
    border: solid 1px #000;
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
const RadioWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledRadio = styled.div`
  width: 100%;
  height: 38%;
  margin-top: 3%;
  border-radius: 20px;
  background-color: gray;
`;

const ToggleButton = styled.button`
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
const ControlBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 78%;
  margin-top: 2%;
`;
