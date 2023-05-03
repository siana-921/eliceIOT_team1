import styled from "@emotion/styled";
import axios from "axios";
("../../components/Chart/DoughnutChart/DoughnutChart");
import Temp from "@/components/Dashboard/Temp";
import NavBar from "@/components/NavBar/NavBar";
import MotorPump from "@/components/Dashboard/Motorpump";
import Moisture from "@/components/Dashboard/Moisture";
import Led from "@/components/Dashboard/Led";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import {
  dashboardDataAtom,
  actuatorDataAtom,
} from "../../store/Dashboard/atoms";
import LightComponent from "@/components/Dashboard/Light";
import Humidity from "@/components/Dashboard/Humidity";

export default function Dashboard() {
  const setDashboardData = useSetRecoilState(dashboardDataAtom);
  const setActuatorData = useSetRecoilState(actuatorDataAtom);

  setDashboardData({});

  useEffect(() => {
    const fetchData = async () => {
      const dashboardResponse = await fetch(
        "http://localhost:3000/api/mockup/dashboard"
      );
      const dashboardData = await dashboardResponse.json();

      const actuatorResponse = await fetch(
        "http://localhost:3000/api/mockup/actuators"
      );
      const actuatorData = await actuatorResponse.json();

      setDashboardData(dashboardData);
      setActuatorData(actuatorData);
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    // 5초마다 데이터 업데이트
    return () => clearInterval(interval);
  }, [setDashboardData]);

  return (
    <div>
      <NavBar />
      <DashboardDisplayFlex>
        <DashboardCommonAreaDiv>
          <Temp />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <Humidity />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <Moisture />
        </DashboardCommonAreaDiv>
      </DashboardDisplayFlex>
      <DashboardDisplayFlex>
        <DashboardCommonAreaDiv>
          <LightComponent />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <MotorPump />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <Led />
        </DashboardCommonAreaDiv>
      </DashboardDisplayFlex>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/mockup");

    return {
      props: {
        dashboard: response.data.data,
      },
    };
  } catch (err) {
    console.log(err.response);
    const statusCode = err.response ? err.response.status : "🚨에러발생";
    console.log(err.response);
    return {
      props: {
        dashboard: null,
        err: {
          statusCode,
          title: statusCode,
        },
      },
    };
  }
}

export const DashboardDisplayFlex = styled.div`
  display: flex;
  margin-left: 7.625rem;
  margin-right: 7.625rem;
  margin-top: 10%;
`;

export const DashboardCommonAreaDiv = styled.div`
  width: 30.2rem;
  height: 19rem;
  margin-left: 2.31rem;
  margin-right: 2.31rem;
`;
