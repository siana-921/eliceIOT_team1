import { useState, useEffect } from "react";

// 모터펌프
export default function Motorpump() {
  const [isOn, setIsOn] = useState(false);
  const [motorPumping, setmotorPumping] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/dashboard");
      const data = await res.json();
      setIsOn(data.isOn);
      setmotorPumping(data.motorPumping);
    };
    fetchData();
    const interval = setInterval(fetchData, 5000); // 5초마다 데이터 업데이트
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{motorPumping}</h2>
      <p>{isOn ? "켜짐" : "꺼짐"}</p>
      <p>모터펌프</p>
    </div>
  );
}
