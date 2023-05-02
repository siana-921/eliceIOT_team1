import TemperatureChart from "./Chart/TemperatureChart";
import { useState, useEffect } from "react";
import axios from "axios";

// 온도 센서
// topic: temp
export default function Temp() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/dashboard");
        const data = res.data;

        setTemperature(data.map((d) => d.temp));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TemperatureChart temperatureData={temperature} />
      <h3>온도</h3>
    </>
  );
}
