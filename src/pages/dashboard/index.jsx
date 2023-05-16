import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { colorCode } from "@store/constValue";
import { useRecoilState, useRecoilValue } from "recoil";
import { deviceInfoAtom, sensorDataOriginAtom } from "@store/atoms";
import { dailyAverageSensorDataSelector, sensorDataSelector } from "@store/selector";
import { axiosTest, axiosInstance } from "@baseURL";

import LodingComponent from "@/components/elements/loading";

import MainSection1Content from "@components/Dashboard2/MainSection/MainSection1";
import MainSection2Content from "@components/Dashboard2/MainSection/MainSection2";
import MainSection3Content from "@components/Dashboard2/MainSection/MainSection3";
import MainSection4Content from "@components/Dashboard2/MainSection/MainSection4";

import SubSection1Contents from "@components/Dashboard2/SubSection1/";
import SubSection2Contents from "@components/Dashboard2/SubSection2/";
import SubSection3Contents from "@components/Dashboard2/SubSection3/";
import SubSection4Contents from "@components/Dashboard2/SubSection4/";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}

const Dashboard = (props) => {
  const [activatedSection, setActivatedSection] = useState(1);
  const [popUpSection, setPopUpSection] = useState(1);
  const [spreadSection, setSpreadSection] = useState(1);
  const [isAnySectionActivated, setIsAnySectionActivated] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sensorDataOrigin, setSensorDataOrigin] = useRecoilState(sensorDataOriginAtom);
  const sensorData = useRecoilValue(sensorDataSelector);
  const device = useRecoilValue(deviceInfoAtom);
  const dailyAverage = useRecoilValue(dailyAverageSensorDataSelector);

  console.log(dailyAverage);
  //로딩페이지 설정-----------------------------------------------------//
  /*이 컴포넌트와 아무런 상관이 없는 그냥 unix-time테스트를 위한 코드
    const dateTest = new Date(1684168506000);
    console.log(dateTest);
    const dateTest2 = new Date();
    console.log(dateTest2);
    const dateTest3 = dateTest2.getTime();
    console.log(dateTest3);
    */

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [props]);

  useInterval(async () => {
    const device_id = "unit001";
    try {
      const res = await axiosInstance.get(`/sensors/${device_id}?start_time=0`);
      setSensorDataOrigin(res.data);
    } catch (err) {
      console.error(err);
    }
  }, 60000);

  useEffect(() => {
    if (props.sensorDataOrigin) {
      setSensorDataOrigin(props.sensorDataOrigin); //SSR
    } else {
      console.log("props 값에 이상이 있어 setSensorDataOrigin 실패");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default Dashboard;

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

export async function getServerSideProps() {
  //최초 렌더링용 데이터 (갱신과는 상관없음)
  const device_id = "unit001"; //임시 하드코딩 !!
  const DAYS_TO_LOAD = 29; // 4주 + 1일(당일)

  const today = new Date();
  const startDate = new Date(today.getTime() - DAYS_TO_LOAD * 24 * 60 * 60 * 1000);
  console.log(`DEVICE_ID : ${device_id}`);
  console.log(`START_DATE : ${startDate}`);

  try {
    console.log(`=========GET ${device_id} DEVICE SENSOR LOG DATA=========`);
    const res = await axiosInstance.get(`/sensors/${device_id}?start_time=0`);
    const sensorDataOrigin = res.data;
    console.log(sensorDataOrigin);

    return {
      props: {
        sensorDataOrigin: sensorDataOrigin,
      },
    };
  } catch (err) {
    console.log(err);
    console.log("ererer");
    return { props: { sensorDataOrigin: null } };
  }
}
