import HumidityChart from "./Chart/HumidityChart";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";

// 습도 센서
// topic: humidity
export default function Humidity() {
  const [humidity, setHumidity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/mockup/dashboard"
        );
        const data = res.data;

        setHumidity(data.map((d) => d.humidity));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HumidityChartDiv>
        <HumidityChart humidityData={humidity} />
      </HumidityChartDiv>
      <h3>습도</h3>
    </>
  );
}

const HumidityChartDiv = styled.div`
  height: 250px;
  width: 250px;
  justify-content: center;
  text-align: center;
`;
