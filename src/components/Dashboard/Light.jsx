import { useState, useEffect } from "react";
import LineChart from "./Chart/LineChart";
import axios from "axios";

// 조도 센서
export default function LightComponent(props) {
  const [currentLight, setCurrentLight] = useState(null);
  const [lightData, setLightData] = useState([]); // 그래프 데이터

  const DATA_COUNT = 6;
  const INTERVAL = 5000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/mockup/dashboard"
        );
        const data = res.data;
        const lightValues = data.lightData.slice(0, DATA_COUNT); // 4시간 단위로 나누기
        setLightData(lightValues);
        setCurrentLight(lightValues[0]);
      } catch (err) {
        console.log("🚨조도센서에러발생");
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, INTERVAL);

    return () => clearInterval(intervalId);
  }, [INTERVAL]);

  return (
    <div>
      <LineChart lightData={lightData} />
      <p>{currentLight}</p>
      <h3>조도</h3>
    </div>
  );
}
