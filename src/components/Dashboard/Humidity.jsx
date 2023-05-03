import HumidityChart from "./Chart/HumidityChart";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <HumidityChart humidityData={humidity} />
      <h3>습도</h3>
    </>
  );
}
