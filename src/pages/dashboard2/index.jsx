import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import LodingComponent from "@/components/elements/loading";
import GaugeGraph from "@/components/Dashboard2/elements/GaugeGraph";

import SubSecContentsComponent1 from "@components/Dashboard2/SubSection1/";
import SubSecContentsComponent2 from "@components/Dashboard2/SubSection2/";
import SubSecContentsComponent3 from "@components/Dashboard2/SubSection3/";
import SubSecContentsComponent4 from "@components/Dashboard2/SubSection4/";

const Dashboard2 = ({ data }) => {
  const [activatedSection, setActivatedSection] = useState(0);
  const [popUpSection, setPopUpSection] = useState(0);
  const [spreadSection, setSpreadSection] = useState(0);
  const [isAnySectionActivated, setIsAnySectionActivated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    console.log(activatedSection);
    if (isAnySectionActivated) {
      setPopUpSection(activatedSection);
      setTimeout(() => {
        setSpreadSection(activatedSection);
      }, 100);
    }
  }, [isAnySectionActivated]);

  return (
    <Main>
      <Section
        sectionIndex={1}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(1);
        }}
      >
        <Contents>
          <MainContent>
            <h1>activesection:{activatedSection}</h1>
            <h2>popupsection:{popUpSection}</h2>
            <h3>spreadsection:{spreadSection}</h3>
          </MainContent>
          <SubContent></SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={2}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(2);
        }}
      >
        <Contents>
          <MainContent style={{ backgroundColor: "green" }}>
            <h1>activesection:{activatedSection}</h1>
            <h2>popupsection:{popUpSection}</h2>
            <h3>spreadsection:{spreadSection}</h3>
          </MainContent>
          <SubContent></SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={3}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(3);
        }}
      >
        <Contents>
          <MainContent>
            <h1>activesection:{activatedSection}</h1>
            <h2>popupsection:{popUpSection}</h2>
            <h3>spreadsection:{spreadSection}</h3>
          </MainContent>
          <SubContent></SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={4}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        onClick={() => {
          setIsAnySectionActivated(isAnySectionActivated ? false : true);
          setActivatedSection(4);
        }}
      >
        <Contents>
          <MainContent style={{ backgroundColor: "blue" }}>
            <h1>activesection:{activatedSection}</h1>
            <h2>popupsection:{popUpSection}</h2>
            <h3>spreadsection:{spreadSection}</h3>
          </MainContent>
          <SubContent></SubContent>
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
`;

const Contents = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-wrap: nowrap;
`;

const MainContent = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: red;
`;

const SubContent = styled.div`
  width: 75vw;
  height: 100vh;
  background-color: yellow;
`;
//--------------------------------------

//----------------섹션 내부 레이아웃
const TitleArea = styled.div`
  padding-top: 7rem;
  padding-bottom: 1.5rem;
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
  font-size: 2.5rem;
`;
const PlantNameText = styled.p`
  font-size: 4.5rem;
  font-weight: 600;
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
  background-color: #ffffff;
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
