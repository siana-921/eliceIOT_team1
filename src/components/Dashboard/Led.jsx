import { useState, useEffect } from "react";

// 식물LED
export default function Led() {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/mockup/actuators");
      const data = await res.json();
      setIsOn(data.isOn);
      setBrightness(data.brightness);
    };
    fetchData();
    const interval = setInterval(fetchData, 5000); // 5초마다 데이터 업데이트
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{brightness}</h2>
      <p>{isOn ? "켜짐" : "꺼짐"}</p>
      <p>LED 조명</p>
    </div>
  );
}
