import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import LodingComponent from "@/components/elements/loading";
import GaugeGraph from "@/components/Dashboard2/elements/GaugeGraph";

import SubSecContentsComponent1 from "@components/Dashboard2/SubSection1/";
import SubSecContentsComponent2 from "@components/Dashboard2/SubSection2/";
import SubSecContentsComponent3 from "@components/Dashboard2/SubSection3/";
import SubSecContentsComponent4 from "@components/Dashboard2/SubSection4/";

const Dashboard2 = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [activeSectionNum, setActiveSectionNum] = useState(-1);
  const [showSubsection, setShowSubsection] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSpread = (sectionNum) => {
    if (!showSubsection) {
      setOffset(sectionNum);
      setActiveSectionNum(sectionNum);
      setShowSubsection(true);
    } else {
      setActiveSectionNum(-1);
      setShowSubsection(false);
      setOffset(0);
      console.log("초기화");
    }
  };

  console.log(offset, activeSectionNum);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Main>
      {isLoaded ? (
        <>
          <SectionWrapper offsetNum={offset}>
            <MainSection
              thisSectionNum={0}
              activeSectionNum={activeSectionNum}
              offsetNum={offset}
              onClick={() => handleSpread(0)}
            >
              <TitleArea>
                <UserNameText>정수아님의</UserNameText>
                <PlantNameText>먹다남은바질</PlantNameText>
              </TitleArea>
              <ContentsArea>
                <SubTitleText>처음 키운날</SubTitleText>
                <p>2023년 4월 23일</p>
                <SubTitleText>현재상태</SubTitleText>
                <SubTitleText>알파고가 키운다(버튼)</SubTitleText>
                <SubTitleText>제어세부설정(버튼)</SubTitleText>
              </ContentsArea>
              <GaugeGraph data={data}></GaugeGraph>
            </MainSection>

            <MainSection
              thisSectionNum={1}
              activeSectionNum={activeSectionNum}
              offsetNum={offset}
              onClick={() => handleSpread(1)}
            >
              <SensorNameText>Temperature</SensorNameText>
              <DataValueText>
                30<PercentText>%</PercentText>
              </DataValueText>
              <BackTriangleWrapper>
                <BackTriangleShape></BackTriangleShape>
              </BackTriangleWrapper>
            </MainSection>

            <MainSection
              thisSectionNum={2}
              activeSectionNum={activeSectionNum}
              offsetNum={offset}
              onClick={() => handleSpread(2)}
            >
              <SensorNameText>Humidity</SensorNameText>
              <DataValueText>
                60<PercentText>%</PercentText>
              </DataValueText>
              <BackTriangleWrapper>
                <BackTriangleShape></BackTriangleShape>
              </BackTriangleWrapper>
            </MainSection>

            <MainSection
              thisSectionNum={3}
              activeSectionNum={activeSectionNum}
              offsetNum={offset}
              onClick={() => handleSpread(3)}
            >
              <SensorNameText>Light</SensorNameText>
              <DataValueText>
                40<PercentText>%</PercentText>
              </DataValueText>
              <BackTriangleWrapper>
                <BackTriangleShape></BackTriangleShape>
              </BackTriangleWrapper>
            </MainSection>
            <MainSection style={{ zIndex: 0 }}>Section 1</MainSection>
            <MainSection style={{ zIndex: 0 }}>Section 2</MainSection>
            <MainSection style={{ zIndex: 0 }}>Section 3</MainSection>
          </SectionWrapper>
          <SubsectionContainer
            trigger={showSubsection}
            thisSectionNum={activeSectionNum == -1 ? 0 : activeSectionNum}
          >
            {activeSectionNum === 0 && <SubSecContentsComponent1 />}
            {activeSectionNum === 1 && <SubSecContentsComponent2 />}
            {activeSectionNum === 2 && <SubSecContentsComponent3 />}
            {activeSectionNum === 3 && <SubSecContentsComponent4 />}
          </SubsectionContainer>
        </>
      ) : (
        <LodingComponent></LodingComponent>
      )}
    </Main>
  );
};

//------------------전체 레이아웃 스타일
export default Dashboard2;
const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const SubMain = styled.div``;
const SectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.offsetNum * -25}%;
  flex-wrap: nowrap;
  display: flex;
  transition: left 0.25s ease-in-out;
`;
const MainSection = styled.div`
  position: relative;
  width: 25vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: ${({ thisSectionNum, activeSectionNum }) =>
    thisSectionNum === activeSectionNum ? 3 : 1};
`;
const SubsectionContainer = styled.div`
  position: relative;
  top: 0;
  left: ${({ trigger, thisSectionNum }) =>
    trigger ? "0vw" : `-${100 + thisSectionNum * 25}vw`};
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: block;
  transition: left 0.7s ease-in-out 0.2s;
  background-color: #ffffff;
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
  font-size: 2rem;
`;
const PlantNameText = styled.p`
  font-size: 4rem;
`;
const SubTitleText = styled.p`
  font-size: 1.3rem;
`;
const DataValueText = styled.p`
  font-size: 10rem;
  margin-top: -1.2rem;
`;
const SensorNameText = styled.p`
  font-size: 3rem;
  font-weight: 200;
`;
const PercentText = styled.span`
  font-size: 5rem;
  font-weight: 300;
`;
//--------------------------------

//-------------------디자인 요소
const BackTriangleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 25vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;
const BackTriangleShape = styled.div`
  position: absolute;
  top: -18vw;
  left: -18vw;
  width: 35vw;
  height: 25vw;
  transform: rotate(45deg);
  background-color: #d9d9d9;
  z-index: -1;
`;
//---------------------------------

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
