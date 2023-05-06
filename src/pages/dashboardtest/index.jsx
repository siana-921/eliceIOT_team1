import { useState } from "react";
import styled from "@emotion/styled";

import GaugeTest from "@components/dashboardtest/gaugetest";

const Dashboard2 = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [activeSectionNum, setActiveSectionNum] = useState(-1);
  const [isSubsectionVisible, setIsSubsectionVisible] = useState([0, 0, 0, 0]);

  const handleSpread = (sectionNum) => {
    setOffset(sectionNum);
    setActiveSectionNum(sectionNum);
  };

  console.log(offset, activeSectionNum);

  return (
    <Main>
      <SectionWrapper offsetNum={offset}>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <TitleArea>
            <UserNameText>정수아님의</UserNameText>
            <PlantNameText>먹다남은바질</PlantNameText>
            <button onClick={() => handleSpread(0)}>클릭...</button>
          </TitleArea>
          <ContentsArea>
            <SubTitleText>처음 키운날</SubTitleText>
            <p>2023년 4월 23일</p>
            <SubTitleText>현재상태</SubTitleText>
            <SubTitleText>알파고가 키운다(버튼)</SubTitleText>
            <SubTitleText>제어세부설정(버튼)</SubTitleText>
          </ContentsArea>
          <GaugeTest data={data}></GaugeTest>
          {/*
          <ChartLabel>
            <div>
              <span>조도</span>
              <BarColor color="#A7ED51"></BarColor>
            </div>
            <div>
              <span>대기습도</span>
              <BarColor color="#00B7D8"></BarColor>
            </div>
            <div>
              <span>토양수분</span>
              <BarColor color="#D88C4F"></BarColor>
            </div>
            <div>
              <span>대기온도</span>
              <BarColor color="#ffc658"></BarColor>
            </div>
          </ChartLabel>
          */}
        </MainSection>
        <Subsection sectionNum={0} activeSectionNum={activeSectionNum}>
          <h1>Section 1-2</h1>
        </Subsection>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <h1>Section 2</h1>
          <button onClick={() => handleSpread(1)}>클</button>
        </MainSection>
        <Subsection sectionNum={1} activeSectionNum={activeSectionNum}>
          <h1>Section 2-2</h1>
        </Subsection>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <h1>Section 3</h1>
          <button onClick={() => handleSpread(2)}>릭</button>
        </MainSection>
        <Subsection sectionNum={2} activeSectionNum={activeSectionNum}>
          <h1>Section 3-2</h1>
        </Subsection>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <h1>Section 4</h1>
          <button onClick={() => handleSpread(3)}>해봐요</button>
        </MainSection>
        <Subsection sectionNum={3} activeSectionNum={activeSectionNum}>
          <h1>Section 4-2</h1>
        </Subsection>

        <MainSection>Section 1</MainSection>
        <MainSection>Section 2</MainSection>
        <MainSection>Section 3</MainSection>
      </SectionWrapper>
    </Main>
  );
};

export default Dashboard2;
const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const SubMain = styled.div``;
const SectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.offsetNum * -25}%;
  flex-wrap: nowrap;
  display: flex;

  transition: left 0.3s ease-in-out;
`;
const MainSection = styled.div`
  position: relative;
  width: 25vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 3;
`;
const Subsection = styled.div`
  position: relative;
  top: 0;
  left: ${({ sectionNum, activeSectionNum }) =>
    sectionNum == activeSectionNum ? "0vw" : "0"};
  width: 75vw;
  height: 100vh;
  background-color: yellow;
  z-index: 0;
  display: ${({ sectionNum, activeSectionNum }) =>
    sectionNum == activeSectionNum ? "block" : "none"};
`;
//--------------------------------------

//----------------섹션 내부 레이아웃
const TitleArea = styled.div`
  padding-top: 100px;
`;
const ContentsArea = styled.div``;
//----------------------------------
//----------------차트 관련 스타일
const ChartLabel = styled.div`
  position: absolute;
  bottom: 5vh;
  right: 2vw;
  padding: 10px;
  z-index: 10;
  > div {
    display: flex;
    padding: 0.1rem;
    > span {
      padding-right: 0.3rem;
      font-size: 1.7rem;
      font-weight: 600;
    }
  }
`;
const BarColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "grey")};
`;
//--------------------------------

//----------------텍스트 스타일
const UserNameText = styled.p`
  font-size: 1.3rem;
`;
const PlantNameText = styled.p`
  font-size: 3rem;
`;
const SubTitleText = styled.p`
  font-size: 1.3rem;
`;
//--------------------------------

export async function getServerSideProps() {
  const data = [
    {
      name: "temp",
      uv: 23,
      fill: "#ffc658",
    },
    {
      name: "mois",
      uv: 60,
      fill: "#D88C4F",
    },
    {
      name: "humid",
      uv: 33,
      fill: "#00B7D8",
    },
    {
      name: "ilum",
      uv: 80,
      fill: "#A7ED51",
    },
  ];

  return {
    props: {
      data,
    },
  };
}
