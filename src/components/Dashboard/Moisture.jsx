import { useState, useEffect } from "react";
import { DashboardCommonAreaDiv } from "@/styles/dashboard.styles";
import axios from "axios";

// 토양 수분감지 센서
export default function Moisture() {
  const [currentMoisture, setCurrentMoisture] = useState(null);
  const [previousMoisture, setPreviousMoisture] = useState(null);

  const moistureArrowSign = `${currentMoisture} - ${previousMoisture}  > 0 ? "🔺" : "🔻"
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/moisture");
        const data = res.data;
        setCurrentMoisture(data.current);
        setPreviousMoisture(data.previous);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardCommonAreaDiv>
      <h1>{currentMoisture}</h1>
      <h3>현재 토양 수분량</h3>
      <p>{moistureArrowSign}</p>
      <p>{Math.abs(currentMoisture - previousMoisture)}</p>
    </DashboardCommonAreaDiv>
  );
}
