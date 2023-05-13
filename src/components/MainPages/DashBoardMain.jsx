import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorCode } from "@store/constValue";
import { allDeviceSensorAtom } from "@store/atoms";
import { oneDeviceSensorAtom } from "@store/atoms";

import LodingComponent from "@/components/elements/loading";

import MainSection1Content from "@components/Dashboard2/MainSection/MainSection1";
import MainSection2Content from "@components/Dashboard2/MainSection/MainSection2";
import MainSection3Content from "@components/Dashboard2/MainSection/MainSection3";
import MainSection4Content from "@components/Dashboard2/MainSection/MainSection4";

import SubSection1Contents from "@components/Dashboard2/SubSection1/";
import SubSection2Contents from "@components/Dashboard2/SubSection2/";
import SubSection3Contents from "@components/Dashboard2/SubSection3/";
import SubSection4Contents from "@components/Dashboard2/SubSection4/";

const DashboardMain = (props) => {
  const [activatedSection, setActivatedSection] = useState(1);
  const [popUpSection, setPopUpSection] = useState(1);
  const [spreadSection, setSpreadSection] = useState(1);
  const [isAnySectionActivated, setIsAnySectionActivated] = useState(true);
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
  }, [activatedSection, isAnySectionActivated]);
  //--------------------------------------------------------------------//

  //onClick->펼치기-트리거----------------------------------------------//
  const handleMainContentClick = (num) => {
    setIsAnySectionActivated(isAnySectionActivated ? false : true);
    setActivatedSection(num);
  };
  //
  return (
    <Main>
      <Section
        sectionIndex={1}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        isAnySectionActivated={isAnySectionActivated}
        bgColor={colorCode.lime}
        bgGradient={colorCode.green}
      >
        <Contents>
          <MainContent
            fontColor="#FFFFFF"
            onClick={() => {
              handleMainContentClick(1);
            }}
          >
            <MainSection1Content />
          </MainContent>
          <SubContent>{activatedSection == 1 && <SubSection1Contents />}</SubContent>
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
      >
        <Contents>
          <MainContent
            onClick={() => {
              handleMainContentClick(2);
            }}
          >
            <MainSection2Content />
          </MainContent>
          <SubContent>{activatedSection == 2 && <SubSection2Contents />}</SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={3}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        bgColor={colorCode.paleorange}
        bgGradient={colorCode.orange}
      >
        <Contents>
          <MainContent
            onClick={() => {
              handleMainContentClick(3);
            }}
          >
            <MainSection3Content />
          </MainContent>
          <SubContent>{activatedSection == 3 && <SubSection3Contents />}</SubContent>
        </Contents>
      </Section>
      <Section
        sectionIndex={4}
        spreadSection={spreadSection}
        popUpSection={popUpSection}
        activatedSection={activatedSection}
        bgColor="#00B7D8"
        bgGradient="#00B7D8"
      >
        <Contents>
          <MainContent
            onClick={() => {
              handleMainContentClick(4);
            }}
          >
            <MainSection4Content />
          </MainContent>
          <SubContent>{activatedSection == 4 && <SubSection4Contents />}</SubContent>
        </Contents>
      </Section>
    </Main>
  );
};

export default DashboardMain;

//==========================스타일=========================//

const SCREEN_SPLIT = 4;
const WIDTH_RATIO = 100 / SCREEN_SPLIT;

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;
const Section = styled.div`
  position: absolute;
  top: 0;
  left: ${({ sectionIndex, activatedSection }) =>
    sectionIndex == activatedSection ? 0 : `${WIDTH_RATIO * sectionIndex - WIDTH_RATIO}vw`};
  width: ${({ sectionIndex, spreadSection }) => (sectionIndex == spreadSection ? "100vw" : "25vw")};
  height: 100vh;
  z-index: ${({ sectionIndex, popUpSection }) => (sectionIndex == popUpSection ? 3 : 1)};
  overflow: hidden;

  color: ${({ fontColor }) => (fontColor ? fontColor : "#000000")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#FFFFFF")};
  background-image: ${({ bgGradient, bgColor }) =>
    bgGradient ? `linear-gradient(to top right, ${bgGradient}, ${bgColor})` : bgColor};
  transition: width 0.25s ease-in-out, left 0.25s ease-in-out;
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
  &:hover {
    background-color: #8884d8;
    color: #fff;
  }
`;
const SubContent = styled.div`
  width: 75vw;
  height: 100vh;
  color: ${({ fontColor }) => (fontColor ? fontColor : "#000000")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ffffff")};
`;
//--------------------------------------

/*
const Dash = () => {
  return <div>sfffdf</div>;
};

export default Dash;
*/
