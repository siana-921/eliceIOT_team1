import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import HumidityChart from "@/components/Chart/DoughnutChart/DoughnutChart";
("../../components/Chart/DoughnutChart/DoughnutChart");
import {
  chartData,
  chartOptions,
} from "../../components/Chart/DoughnutChart/Data";
import LineChart from "@/components/Chart/LineChart/LineChart";
import TemperatureChart from "@/components/Chart/TemperatureChart/TemperatureChart";

const INTERVAL_GAP = 5000;

export default function Dashboard() {
  return (
    <div>
      <h1>
        <Link href="/">Basil Farm</Link>
      </h1>
      <div>
        <li>Dashboard</li>
        <li>Controller</li>
        <li>My Page</li>
      </div>
      <TemperatureChart />
      <HumidityChart />
      <div>
        <p>1,234</p>
        <p>토양수분</p>
      </div>
      <div>
        <p>🔺</p>
        <p>10</p>
      </div>
      <LineChart />
      <div>
        <h1>모터펌프!!!</h1>
      </div>
      <div>
        <h1>식물 LED</h1>
      </div>
    </div>
  );
}
