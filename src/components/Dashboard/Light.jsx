import { useState, useEffect } from "react";
import axios from "axios";
import LightChart from "./Chart/LightChart";
// 조도 센서
export default function LightComponent(props) {
  const [currentLight, setCurrentLight] = useState(null);
  const [lightData, setLightData] = useState([]); // 그래프 데이터

  const INTERVAL = 5000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_DEV_API_ROOT}/sensor/dashboard`
        );
        const data = res.data;

        setLightData(data.map((d) => d.created_at));
      } catch (err) {
        console.log("🚨조도센서에러발생");
      }
    };

    // const intervalId = setInterval(() => {
    //   fetchData();
    // }, 1000 * 60 * 5); // 5분마다 데이터 fetch
    // return () => clearInterval(intervalId);

    fetchData();
  }, []);

  return (
    <div>
      <LightChart yesterdayLight={lightData} currentLight={lightData} />
      <p>{lightData}</p>
      <h3>조도</h3>
    </div>
  );
}
