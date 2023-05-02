import { useState, useEffect } from "react";
import LineChart from "./Chart/LineChart";
import axios from "axios";

// 조도 센서
export default function LightComponent(props) {
  const [currentLight, setCurrentLight] = useState(null);
  const [previousLight, setPreviousLight] = useState(null); // 4시간 전 조도
  const [lightData, setLightData] = useState([]); // 그래프 데이터

  const DATA_COUNT = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/dashboard");
        const data = res.data;
        const lightValues = data.lightData.slice(0, DATA_COUNT); // 4시간 단위로 나누기
        setLightData(lightValues);
      } catch (err) {
        console.log("🚨에러발생");
      }
    };
    fetchData();

    const currentLightValue = Math.floor(Math.random() * 255);
    setCurrentLight(currentLightValue);

    setPreviousLight(currentLightValue);
  }, [props, previousLight, DATA_COUNT]);

  return (
    <div>
      <LineChart lightData={lightData} />
      <p>{currentLight}</p>
      <h3>조도</h3>
    </div>
  );
}
