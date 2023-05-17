import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { colorCode } from "@store/constValue";
import { useRecoilState, useRecoilValue, useRecoilCallback } from "recoil";
import {
  deviceInfoAtom,
  sensorDataOriginAtom,
  actuatorLogOriginAtom,
  autoControlConfigOriginAtom,
} from "@store/atoms";
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
  const [actuatorDataOrigin, setActuatorDataOrigin] = useRecoilState(actuatorLogOriginAtom);
  const [autoControlConfigOrigin, setAutoControlConfigOrigin] = useRecoilState(
    autoControlConfigOriginAtom
  );
  const sensorData = useRecoilValue(sensorDataSelector);
  const device = useRecoilValue(deviceInfoAtom);
  //데일리애버리지는 나중에 테스트 끝나면 subsection1에서만 가져와도 될듯
  const dailyAverage = useRecoilValue(dailyAverageSensorDataSelector);

  console.log(sensorDataOrigin);
  console.log(actuatorDataOrigin);
  console.log(autoControlConfigOrigin);

  useInterval(async () => {
    const device_id = "unit001";
    try {
      const res = await axiosInstance.get(`/sensors/${device_id}?start_time=0`);
      setSensorDataOrigin(res.data);
      console.log("INTERVAL GET SENSOR");
    } catch (err) {
      console.error(err);
    }
  }, 60000);
  /*
  const handleSetSensorData = useRecoilCallback(({ set }) => {
    return (newValue) => {
      if (Array.isArray(newValue) && newValue.length === 0) {
        return;
      } else {
        set(sensorDataOrigin, newValue);
      }
    };
  });
  const handleSetActuatorData = useRecoilCallback(({ set }) => {
    return (newValue) => {
      if (Array.isArray(newValue) && newValue.length === 0) {
        return;
      } else {
        set(actuatorDataOrigin, newValue);
      }
    };
  });
  const handleAutoControlConfig = useRecoilCallback(({ set }) => {
    return (newValue) => {
      if (Array.isArray(newValue) && newValue.length === 0) {
        return;
      } else {
        set(autoControlConfigOrigin, newValue);
      }
    };
  });

  //useEffect(의존성:빈배열 -> 첫 마운트시만 실행)
  useEffect(() => {
    /*
    if (props.sensorDataOrigin) {
      setSensorDataOrigin(props.sensorDataOrigin); //SSR
    } else {
      console.log("props 값에 이상이 있어 setSensorDataOrigin 실패");
    }
    if (props.actuatorDataOrigin) {
      setActuatorDataOrigin(props.actuatorDataOrigin); //SSR
    } else {
      console.log("props 값에 이상이 있어 setActuatorDataOrigin 실패");
    }
    if (props.autoControlConfig) {
      setAutoControlConfigOrigin(props.autoControlConfig); //SSR
    } else {
      console.log("props 값에 이상이 있어 setAutoControlConfigOrigin 실패");
    }
    handleSetSensorData(props.sensorDataOrigin);
    handleSetActuatorData(props.actuatorDataOrigin);
    handleAutoControlConfig(props.autoControlConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //--------------------------------------------------------------------//
*/
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
  //--------------------------------------------------------------------//

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

export async function getServerSideProps(context) {
  //최초 렌더링용 데이터 (갱신과는 상관없음)

  /*현재 데이터가 충분하지 않아 START_TIME을 따로 계산할 필요 없음
  const DAYS_TO_LOAD = 29; // 4주 + 1일(당일)
  const today = new Date();
  const startDate = new Date(today.getTime() - DAYS_TO_LOAD * 24 * 60 * 60 * 1000);
  console.log(`DEVICE_ID : ${device_id}`);
  console.log(`START_DATE : ${startDate}`);
  */

  const { query } = context;
  const userId = query.userId || "user001";
  const deviceId = query.deviceId || "unit001";

  console.log(userId, deviceId);

  try {
    console.log(`=========GET ${deviceId} DEVICE SENSOR LOG DATA=========`);
    const getSensorRes = await axiosInstance.get(`/sensors/${deviceId}?start_time=0`);
    const sensorDataOrigin = getSensorRes.data;
    //console.log(sensorDataOrigin);

    console.log(`=========GET ${deviceId} DEVICE ACTUATOR LOG DATA=========`);
    const getActuatorDataRes = await axiosInstance.get(`/actuators/${deviceId}?start_time=0`);
    const actuatorDataOrigin = getActuatorDataRes.data;
    console.log(actuatorDataOrigin);

    console.log(`=========GET ${deviceId} DEVICE AUTO CONTROL CONFIG=========`);
    const getAutoControlRes = await axiosInstance.get(`/auto/${deviceId}/status`);
    const autoControlConfig = getAutoControlRes.data;
    console.log(getAutoControlRes);

    return {
      props: {
        sensorDataOrigin: sensorDataOrigin,
        actuatorDataOrigin: actuatorDataOrigin,
        autoControlConfig: autoControlConfig,
      },
    };
  } catch (err) {
    console.log(err);
    console.log("ererer");
    return {
      props: {},
    };
  }
}
