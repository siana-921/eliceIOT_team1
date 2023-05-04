import TemperatureChart from "./Chart/TemperatureChart";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { DashboardCommonAreaDiv } from "@/pages/dashboard";

// 온도 센서
// topic: temp
export default function Temp() {
  const [temperature, setTemperature] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/mockup/dashboard"
        );
        const data = res.data;

        setTemperature(data.map((d) => d.temp));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardCommonAreaDiv>
      <TemperatureChartSize>
        <TemperatureChart temperatureData={temperature} />
      </TemperatureChartSize>
      <TemperatureChartH3>온도</TemperatureChartH3>
    </DashboardCommonAreaDiv>
  );
}

const TemperatureChartSize = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TemperatureChartH3 = styled.h3`
  position: absolute;
  top: 35%;
  font-size: 2rem;
  bottom: 0;
`;
