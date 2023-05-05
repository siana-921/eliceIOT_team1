import styled from '@emotion/styled';
import axios from 'axios';
('../../components/Chart/DoughnutChart/DoughnutChart');
import Temp from '@/components/Dashboard/Temp';
import NavBar from '@/components/NavBar/NavBar';
import MotorPump from '@/components/Dashboard/Motorpump';
import Moisture from '@/components/Dashboard/Moisture';
import Led from '@/components/Dashboard/Led';
import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  dashboardDataAtom,
  actuatorDataAtom,
  lightListSelector,
} from '../../store/Dashboard/atoms';
import LightComponent from '@/components/Dashboard/Light';
import Humidity from '@/components/Dashboard/Humidity';
import NavBarTest from '@/components/NavBar/NavBarTest';
import LightChart from '@/components/Dashboard/Chart/LightChart';

export default function Dashboard() {
  const setDashboardData = useSetRecoilState(dashboardDataAtom);
  const setActuatorData = useSetRecoilState(actuatorDataAtom);
  const lightList = useRecoilValue(lightListSelector);

  useEffect(() => {
    console.log(lightList);
  }, [lightList]);

  useEffect(() => {
    const fetchData = async () => {
      const dashboardResponse = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_ROOT}/dashboard`
      );
      const dashboardData = await dashboardResponse.json();

      const actuatorResponse = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_ROOT}/actuators`
      );
      const actuatorData = await actuatorResponse.json();

      setDashboardData(dashboardData);
      setActuatorData(actuatorData);
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    // 5초마다 데이터 업데이트
    return () => clearInterval(interval);
  }, [setDashboardData, setActuatorData]);

  return (
    <div>
      <NavBarTest />
      <DashboardDisplayFlex>
        <Temp />
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
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_API_ROOT}`);

    return {
      props: {
        dashboard: response.data.data,
      },
    };
  } catch (err) {
    console.log(err.response);
    const statusCode = err.response ? err.response.status : '🚨에러발생';
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
  margin-top: 8%;
`;

export const DashboardCommonAreaDiv = styled.div`
  width: 32rem;
  height: 18rem;
  margin-left: 2.31rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: rgba(228, 228, 228, 0.3);

  border-radius: 20px;
`;
