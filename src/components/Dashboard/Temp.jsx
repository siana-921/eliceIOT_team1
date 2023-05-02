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
        const response = await axios.get("http://localhost:3000/api/dashboard");
        const data = response.data;

        setTemperature(data.temperature);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TemperatureChart />
      <h3>온도</h3>
    </>
  );
}
