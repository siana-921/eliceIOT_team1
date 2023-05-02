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

const INTERVAL_GAP = 5000;

export default function Dashboard(props) {
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
          <Light />
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
    const response = await axios.get("http://localhost:3000/api/dashboard");
    if (response.status === 200) {
      return {
        props: {
          dashboard: response.data.data,
        },
      };
    } else {
      return {
        props: {
          dashboard: null,
          error: {
            statusCode: response.status,
            title: `${response.statusText} - ${result.request.url}`,
          },
        },
      };
    }
  } catch (err) {
    console.log(err.response);
    const statusCode = err.response ? err.response.status : "🚨에러발생";
    console.log(err.response);
    return {
      props: {
        dashboard: null,
        err: {
          statusCode,
          title: err.response ? err.response.data : "🚨에러발생",
        },
      },
    };
  }
}

export const DashboardCommonAreaDiv = styled.div`
  position: absolute;
  width: 30.2rem;
  height: 22.18rem;
`;
