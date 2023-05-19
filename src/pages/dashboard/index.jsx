import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { colorCode } from "@store/constValue";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  userAtom,
  deviceAtom,
  sensorAtom,
  actuatorAtom,
  autoConfigAtom,
  clientAtom,
} from "@store/atoms";
import {
  dailyAverageSensorSelector,
  formatSensorSelector,
  dayAndNightSelector,
  formatAutoConfigSelector,
} from "@store/selector";
import { axiosTest, axiosInstance } from "@baseURL";
import user000_sensor from "@data/user000/sensorLog";
import unit000_actuator from "@data/user000/actuatorLog";

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

/////////////////////////////////////////////////////////////////////////////////

const Dashboard = (props) => {
  //---컴포넌트 내부 STATE
  const [activatedSection, setActivatedSection] = useState(1);
  const [popUpSection, setPopUpSection] = useState(1);
  const [spreadSection, setSpreadSection] = useState(1);
  const [isAnySectionActivated, setIsAnySectionActivated] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  //---구독한 ATOM
  const [user, setUser] = useRecoilState(userAtom);
  const [device, setDevice] = useRecoilState(deviceAtom);
  const [autoConfig, setAutoConfig] = useRecoilState(autoConfigAtom);
  const [sensor, setSensor] = useRecoilState(sensorAtom);
  const [actuator, setActuator] = useRecoilState(actuatorAtom);
  const [client, setClient] = useRecoilState(clientAtom);
  //---구독한 SELECTOR
  const sensorS = useRecoilValue(formatSensorSelector);
  const autoConfigS = useRecoilValue(formatAutoConfigSelector);

  //---첫 마운트때 ATOM에 데이터 세팅 (센서, 액츄에이터, 자동제어상태)
  useEffect(() => {
    const fetchSensor = async () => {
      try {
        const res = await axiosInstance.get(`/sensors/${client.device_id}?start_time=0`);
        setSensor(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
    const fetchActuator = async () => {
      try {
        const res = await axiosInstance.get(`/actuators/${client.device_id}?start_time=0`);
        setActuator(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
    const fetchAutoConfig = async () => {
      try {
        const res = await axiosInstance.get(`/auto/${client.device_id}/status`);
        console.log(res.data[0]);
        setAutoConfig(res.data[0]);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchSensor();
    fetchActuator();
    fetchAutoConfig();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //---LOCALSTORAGE에서 확인할 용도ㅎ.. 센서 데이터와 액츄에이터 데이터는 최근꺼만
  /*
  useEffect(() => {
    console.log(sensor);
    const latestSensor = sensor[sensor?.length - 1];
    const latestActuator = actuator[actuator?.length - 1];
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("device", JSON.stringify(device));
    localStorage.setItem("autoConfig", JSON.stringify(autoConfig)); //배열에서 꺼내는 셀렉터라 걍 아톰꺼씀
    localStorage.setItem("latestSensor", JSON.stringify(latestSensor));
    localStorage.setItem("latestActuator", JSON.stringify(latestActuator));
  }, [user, device, sensor, actuator, autoConfig]);*/

  //---3분마다 센서로그 GET 요청
  useInterval(async () => {
    try {
      const res = await axiosInstance.get(`/sensors/${client.device_id}?start_time=0`);
      const data = res.data;
      //10개 이하의 데이터가 오는경우 ATOM에 반영하지 않고 ATOM에 있는거 씀
      if (Array.isArray(data) && data.length > 10) {
        setSensor(res.data);
        console.log(`[ATOM-SET] Sensor : ${client.user_id}, ${client.device_id}`);
      } else {
        //10개 이하일때 뭐가오나 보기나 보자
        console.log(res);
      }
    } catch (err) {
      console.error(err);
    }
  }, 60000);

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
  overflow: hidden;
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
  const { query } = context;
  const userId = query.userId || "user999";
  const deviceId = query.deviceId || "unit003";

  console.log(userId, deviceId);
  let resProps = {};
  resProps.client = { user_id: userId, device_id: deviceId };
  /*
  try {
    console.log(`=========GET ${deviceId} DEVICE SENSOR LOG DATA=========`);
    const sensor = await axiosInstance.get(`/sensors/${deviceId}?start_time=0`);
    resProps.sensor = sensor.data;
  } catch (err) {
    resProps.sensor = [];
    console.error(err);
  }
  try {
    console.log(`=========GET ${deviceId} DEVICE ACTUATOR LOG DATA=========`);
    const actuator = await axiosInstance.get(`/actuators/${deviceId}?start_time=0`);
    resProps.actuator = actuator.data;
    console.log(resProps.actuator);
  } catch (err) {
    resProps.actuator = [];
    console.error(err);
  }
  try {
    console.log(`=========GET ${deviceId} DEVICE AUTO CONTROL CONFIG=========`);
    const autoConfig = await axiosInstance.get(`/auto/${deviceId}/status`);
    resProps.autoConfig = autoConfig.data;
  } catch (err) {
    resProps.autoConfig = [];
    console.error(err);
  }
*/
  /*현재 데이터가 충분하지 않아 START_TIME을 따로 계산할 필요 없어서 내려둠
  const DAYS_TO_LOAD = 29; // 4주 + 1일(당일)
  const today = new Date();
  const startDate = new Date(today.getTime() - DAYS_TO_LOAD * 24 * 60 * 60 * 1000);
  console.log(`DEVICE_ID : ${device_id}`);
  console.log(`START_DATE : ${startDate}`);
  */

  return {
    props: { resProps },
  };
}
