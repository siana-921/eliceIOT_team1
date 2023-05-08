import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import LodingComponent from "@/components/elements/loading";

import MainSection1Content from "@components/Dashboard2/MainSection/MainSection1";
import MainSection2Content from "@components/Dashboard2/MainSection/MainSection2";
import MainSection3Content from "@components/Dashboard2/MainSection/MainSection3";
import MainSection4Content from "@components/Dashboard2/MainSection/MainSection4";

import SubSection1Contents from "@components/Dashboard2/SubSection1/";
import SubSection2Contents from "@components/Dashboard2/SubSection2/";
import SubSection3Contents from "@components/Dashboard2/SubSection3/";
import SubSection4Contents from "@components/Dashboard2/SubSection4/";

const Dashboard2 = ({ data }) => {
  const [activatedSection, setActivatedSection] = useState(0);
  const [popUpSection, setPopUpSection] = useState(0);
  const [spreadSection, setSpreadSection] = useState(0);
  const [isAnySectionActivated, setIsAnySectionActivated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  //로딩페이지 설정-----------------------------------------------------//
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  //--------------------------------------------------------------------//

  //section onClick시 트랜지션 동작에 필요한 상태 세팅------------------//
  useEffect(() => {
    console.log(activatedSection);
    if (isAnySectionActivated) {
      setPopUpSection(activatedSection);
      setSpreadSection(activatedSection);
    } else {
      setSpreadSection(0);
      setTimeout(() => {
        setPopUpSection(0);
      }, 250);
      setActivatedSection(0);
    }
  }, [isAnySectionActivated]);
  //--------------------------------------------------------------------//

  return (
    <Main>
      <Section
        sectionIndex={1}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        isAnySectionActivated={isAnySectionActivated}
        bgColor="#00a86b"
        bgGradient="#248968"
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(1);
        }}
      >
        <Contents>
          <MainContent fontColor="#ffffff">
            <MainSection1Content />
          </MainContent>
          <SubContent>
            <SubSection1Contents />
          </SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={2}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        isAnySectionActivated={isAnySectionActivated}
        bgColor="#ffdd00"
        bgGradient="#FFBF00"
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(2);
        }}
      >
        <Contents>
          <MainContent>
            <MainSection2Content />
          </MainContent>
          <SubContent>
            <SubSection2Contents />
          </SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={3}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        bgColor="#B7DF00"
        bgGradient="#B7D700"
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(3);
        }}
      >
        <Contents>
          <MainContent>
            <MainSection3Content />
          </MainContent>
          <SubContent>
            <SubSection3Contents />
          </SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={4}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        bgColor="#00B7D8"
        bgGradient="#00B3D8"
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(4);
        }}
      >
        <Contents>
          <MainContent>
            <MainSection4Content />
          </MainContent>
          <SubContent>
            <SubSection4Contents />
          </SubContent>
        </Contents>
      </Section>
    </Main>
  );
};

export default Dashboard2;

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Section = styled.div`
  position: absolute;
  top: 0;
  left: ${({ sectionIndex, activatedSection }) =>
    sectionIndex == activatedSection ? 0 : `${25 * sectionIndex - 25}vw`};
  width: ${({ sectionIndex, spreadSection }) =>
    sectionIndex == spreadSection ? "100vw" : "25vw"};
  height: 100vh;
  z-index: ${({ sectionIndex, popUpSection }) =>
    sectionIndex == popUpSection ? 3 : 1};
  overflow: hidden;
  transition: width 0.25s ease-in-out, left 0.5s ease-in-out;
  color: ${({ fontColor }) => (fontColor ? fontColor : "#000000")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#FFFFFF")};
  background-image: ${({ bgGradient, bgColor }) =>
    bgGradient
      ? `linear-gradient(to top right, ${bgGradient}, ${bgColor})`
      : bgColor};
`;

const Contents = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
`;

const MainContent = styled.div`
  width: 25vw;
  height: 100vh;
  color: ${({ fontColor }) => (fontColor ? fontColor : "#000000")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
`;

const SubContent = styled.div`
  width: 75vw;
  height: 100vh;
  color: ${({ fontColor }) => (fontColor ? fontColor : "#000000")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ffffff")};
`;
//--------------------------------------

//----------------섹션 내부 레이아웃 (Wrapper)
const TitleWrapper = styled.div`
  padding-top: 7rem;
  padding-bottom: 1.5rem;
`;
const ContentsWrapper = styled.div``;
const RandomMessageWrapper = styled.div`
  padding: 1rem 1.3rem 1rem 1rem;
`;
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
const SlideTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
`;
const RandomMsg = styled.p`
  font-size: 1.1rem;
  text-align: right;
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
  background-color: #ffffff;
  z-index: -1;
`;
const SliderWrapper = styled.div`
  width: 100%;
  padding: 20px;
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
