import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styled from "@emotion/styled";
import axios from "axios";
import { useRecoilState } from "recoil";
import CardwithSquareImage from "../../components/Controller/Cards/CardwithSquareImage";

//import getRealTimeData from "../../api/GetRealTimeDataApi";
import {
  controlFan,
  controlLed,
  controlPump,
} from "../../api/SetActuatorApi.js";

const serverSelect = 1; // 1: prod, 2: dev

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;
  console.log(`PROD ${axios.defaults.baseURL}`);
} else if (serverSelect === 1) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;
  console.log(`PROD ${axios.defaults.baseURL}`);
} else if (serverSelect === 2) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEV_API_ROOT;
  console.log(`DEV ${axios.defaults.baseURL}`);
}

//CardwithSquareImage에 prop 넘겨줄때 각각 넘겨주지 말고 객체를 넘기면 될것같은데->DB구성후에 생각하기로..
const Controller = () => {
  const [sensorData, setSensorData] = useRecoilState(realtimeDataAtom);
  const [isLedOn, setIsLedOn] = useState(false);
  const [isFanOn, setIsFanOn] = useState(false);
  const [isPumpOn, setIsPumpOn] = useState(false);

  const term = 0.1; //분단위 term

  useEffect(() => {
    const deviceID = "unit002"; // 임시... 나중에는 로그인한 데이터를 사용하자

    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`/sensor/${deviceID}`);
        console.log(res.data);
        setSensorData(res.data);
        console.log(sensorData);
        return;
      } catch (err) {
        console.log(err);
        return;
      }
    }, term * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const setFan = () => {
    console.log("환풍기 켜~~~");
    controlFan("deviceID", fanSettings);
    setIsFanOn(true);
  };
  const setLed = () => {
    console.log("LED 켜~~~");
    controlLed("deviceID", ledSettings);
    setIsLedOn(true);
  };
  const setWaterPump = () => {
    console.log("워터펌프 켜~~~");
    controlPump("deviceID", pumpSettings);
    setIsPumpOn(true);
  };

  return (
    <Main>
      <NavBar></NavBar>
      <Container>
        <Panel left>
          <CardwithSquareImage
            onClick={setFan}
            size={220}
            subject={"airHumidity"}
            subjectName={"대기 수분"}
            measuredValue={sensorData?.humidity}
            buttonText={"환풍기 켜기"}
          ></CardwithSquareImage>
          <CardwithSquareImage
            onClick={setLed}
            size={220}
            subject={"airTemperature"}
            subjectName={"대기 온도"}
            measuredValue={sensorData?.temp}
            buttonText={"LED 켜기"}
          ></CardwithSquareImage>
        </Panel>
        <Panel>
          <CardwithSquareImage
            onClick={setWaterPump}
            size={220}
            subject={"soilMoisture"}
            subjectName={"토양 수분"}
            measuredValue={sensorData?.moisture}
            buttonText={"즉시 물주기"}
          ></CardwithSquareImage>
          <CardwithSquareImage
            onClick={setLed}
            size={220}
            subject={"illuminance"}
            subjectName={"조도"}
            measuredValue={sensorData?.light}
            buttonText={"LED 켜기"}
          ></CardwithSquareImage>
        </Panel>
      </Container>
    </Main>
  );
};

export default Controller;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  margin: 0 auto;
`;

const Panel = styled.div`
  width: 50%;
  margin-top: 8%;
  padding: 2rem 2rem 2rem 2rem;
  border-right: ${({ left }) => (left ? "solid 1px #8d8d8d" : "none")};
`;

//초기 데이터 렌더링 용도 //수정해야됨
export async function getServerSideProps(context) {
  console.log("==============GET DATA==============");
  console.log(`device ID : ${context.query.deviceID}`);

  try {
    const res = await axios.get("/sensor");
    console.log(res);
    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}
