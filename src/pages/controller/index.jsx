/*라이브러리*/
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import axios from "axios";

/*하위 컴포넌트*/
import NavBar from "../../components/NavBar/NavBar";
import CardwithSquareImage from "../../components/Controller/Cards/CardwithSquareImage";

/*ATOM*/
import getRealTimeDataAtom from "../../store/getRealTimeDataAtom";

/*API*/
import {
  controlFan,
  controlLed,
  controlPump,
} from "../../api/SetActuatorApi.js";

/*임시 설정*/
const deviceID = "unit002";
const serverSelect = 1; // 1: prod, 2: dev

/*환경변수 가져오기*/
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
/*컴포넌트 본문*/
const Controller = (props) => {
  const [realTimeSensorData, setRealTimeSensorData] =
    useRecoilState(getRealTimeDataAtom);
  const [isLedOn, setIsLedOn] = useState(false);
  const [isFanOn, setIsFanOn] = useState(false);
  const [isPumpOn, setIsPumpOn] = useState(false);

  /*정해진 시간마다 데이터 가져오기*/
  useEffect(() => {
    //컴포넌트 첫 렌더링시에는 getServerSideProps에서 준 props로 state를 set해서 렌더링!
    setRealTimeSensorData(props.data);

    const term = 1; //분단위 term
    //그 이후에는 term 마다 새로 api 요청 (term*60*1000 후가 첫번째 실행임)
    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`/realtime/${deviceID}`);
        //console.log(res.data);
        setRealTimeSensorData(res.data[0]);
        return;
      } catch (err) {
        console.log(err);
        return;
      }
    }, term * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  /*
  useEffect(() => {
    console.log(realTimeSensorData);
  }, [realTimeSensorData]);
*/

  const setFan = () => {
    const fanSettings = { device_id: deviceID, fan: 1 };
    controlFan(fanSettings)
      .then((res) => {
        setIsFanOn(true);
        console.log(res, isFanOn);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const setLed = () => {
    const ledSettings = { device_id: deviceID, led: 1 };
    controlLed(ledSettings)
      .then((res) => {
        setIsLedOn(true);
        console.log(res, isLedOn);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const setPump = () => {
    console.log("setpump");
    const pumpSettings = { device_id: deviceID, pump: 1 };
    controlPump(pumpSettings)
      .then((res) => {
        setIsPumpOn(true);
        console.log(res, isPumpOn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cardProps = [
    {
      onClickHandler: setFan,
      subject: "airHumidity",
      subjectName: "대기 수분",
      measuredValue: realTimeSensorData?.humidity,
      buttonText: "환풍기 켜기",
    },
    {
      onClickHandler: setPump,
      subject: "soilMoisture",
      subjectName: "토양 수분",
      measuredValue: realTimeSensorData?.moisture,
      buttonText: "물주기",
    },
    {
      onClickHandler: setLed,
      subject: "airTemperature",
      subjectName: "대기 온도",
      measuredValue: realTimeSensorData?.temp,
      buttonText: "LED 켜기",
    },
    {
      onClickHandler: setLed,
      subject: "illuminance",
      subjectName: "조도",
      measuredValue: realTimeSensorData?.light,
      buttonText: "LED 켜기",
    },
  ];

  //다음에 레이아웃 수정하면서 map으로 바꾸던지 하는걸루
  return (
    <Main>
      <NavBar></NavBar>
      <Container>
        <Panel left>
          <CardwithSquareImage cardProps={cardProps[0]}></CardwithSquareImage>
          <CardwithSquareImage cardProps={cardProps[1]}></CardwithSquareImage>
        </Panel>
        <Panel>
          <CardwithSquareImage cardProps={cardProps[2]}></CardwithSquareImage>
          <CardwithSquareImage cardProps={cardProps[3]}></CardwithSquareImage>
        </Panel>
      </Container>
    </Main>
  );
};

export default Controller;

export async function getServerSideProps() {
  console.log("==============GET DATA==============");
  console.log(`device ID : ${deviceID}`);

  try {
    const res = await axios.get(`/realtime/${deviceID}`);
    console.log(res.data[0]);
    return {
      props: {
        data: res.data[0],
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}

/*스타일*/
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
