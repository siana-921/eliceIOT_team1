import styled from "@emotion/styled";
import axios from "axios";
import HumidityChart from "@/components/Dashboard/Chart/HumidityChart";
("../../components/Chart/DoughnutChart/DoughnutChart");
import Temp from "@/components/Dashboard/Temp";
import NavBar from "@/components/NavBar/NavBar";
import Light from "@/components/Dashboard/Light";
import MotorPump from "@/components/Dashboard/Motorpump";
import Moisture from "@/components/Dashboard/Moisture";
import Led from "@/components/Dashboard/Led";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { dashboardDataAtom } from "../../store/Dashboard/atoms";
import LightComponent from "@/components/Dashboard/Light";

const INTERVAL_GAP = 5000;

export default function Dashboard(props) {
  const setDashboardData = useSetRecoilState(dashboardDataAtom);

  setDashboardData({ brightness: 100, isOn: true });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/api/mockup/dashboard"
      );
      const data = await response.json();

      setDashboardData(data);
    };
    fetchData();
    const interval = setInterval(fetchData, 5000); // 5초마다 데이터 업데이트
    return () => clearInterval(interval);
  }, [setDashboardData, props.dashboard]);

  return (
    <div>
      <NavBar />
      <div>
        <DashboardCommonAreaDiv>
          <Temp />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <HumidityChart />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <Moisture />
        </DashboardCommonAreaDiv>
      </div>
      <div>
        <DashboardCommonAreaDiv>
          <LightComponent />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <MotorPump />
        </DashboardCommonAreaDiv>
        <DashboardCommonAreaDiv>
          <Led />
        </DashboardCommonAreaDiv>
      </div>
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

export const DashboardCommonAreaDiv = styled.div`
  width: 30.2rem;
  height: 22.18rem;
`;
