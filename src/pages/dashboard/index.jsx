import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useRecoilState } from "recoil";
import { allDeviceSensorState } from "@store/atoms";
import { oneDeviceSensorState } from "@store/atoms";

import LodingComponent from "@/components/elements/loading";

import MainSection1Content from "@components/Dashboard2/MainSection/MainSection1";
import MainSection2Content from "@components/Dashboard2/MainSection/MainSection2";
import MainSection3Content from "@components/Dashboard2/MainSection/MainSection3";
import MainSection4Content from "@components/Dashboard2/MainSection/MainSection4";

import SubSection1Contents from "@components/Dashboard2/SubSection1/";
import SubSection2Contents from "@components/Dashboard2/SubSection2/";
import SubSection3Contents from "@components/Dashboard2/SubSection3/";
import SubSection4Contents from "@components/Dashboard2/SubSection4/";

const Dashboard2 = (props) => {
  const [activatedSection, setActivatedSection] = useState(1);
  const [popUpSection, setPopUpSection] = useState(1);
  const [spreadSection, setSpreadSection] = useState(1);
  const [isAnySectionActivated, setIsAnySectionActivated] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allDeviceSensorData, setAllDeviceSensorData] =
    useRecoilState(allDeviceSensorState);
  const [oneDeviceSensorData, setOneDeviceSensorData] =
    useRecoilState(oneDeviceSensorState);
  //FETCH한 데이터를 RECOIL에 저장--------------------------------------//

  useEffect(() => {
    setAllDeviceSensorData(props.allDeviceSensorData);
    setOneDeviceSensorData(props.oneDeviceSensorData);
  }, [props.allDeviceSensorData, props.oneDeviceSensorData]);
  //--------------------------------------------------------------------//

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
  background-color: #ffffff;
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

  color: ${({ fontColor }) => (fontColor ? fontColor : "#000000")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#FFFFFF")};
  background-image: ${({ bgGradient, bgColor }) =>
    bgGradient
      ? `linear-gradient(to top right, ${bgGradient}, ${bgColor})`
      : bgColor};
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
    background-color: #248968;
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

export async function getServerSideProps() {
  const device_id = "unit002"; //임시 하드코딩 !!
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;

  console.log(device_id);

  try {
    console.log(`=========GET ALL DEVICE SENSOR LOG DATA=========`);
    const allDeviceSensorData = await axios.get("/sensors");
    console.log(`=========GET ${device_id} DEVICE SENSOR LOG DATA=========`);
    const oneDeviceSensorData = await axios.get(`/sensors/${device_id}`);
    return {
      props: {
        allDeviceSensorData: allDeviceSensorData.data,
        oneDeviceSensorData: oneDeviceSensorData.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        allDeviceSensorData: null,
        oneDeviceSensorData: null,
      },
    };
  }
}
