import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import HumidityChart from "@/components/Chart/HumidityChart/HumidityChart";
("../../components/Chart/DoughnutChart/DoughnutChart");
import {
  chartData,
  chartOptions,
} from "../../components/Chart/HumidityChart/Data";
import LineChart from "@/components/Chart/LineChart/LineChart";
import TemperatureChart from "@/components/Chart/TemperatureChart/TemperatureChart";
import NavBar from "@/components/NavBar/NavBar";
import Light from "@/components/Dashboard/Light";
import MotorPump from "@/components/Dashboard/Motorpump";

const INTERVAL_GAP = 5000;

export default function Dashboard(props) {
  return (
    <div>
      <NavBar />
      <TemperatureChart />
      <HumidityChart />
      <div>
        <p>1,234</p>
        <p>토양수분</p>
      </div>
      <div>
        <p>🔺</p>
        <p>100</p>
      </div>
      <LineChart />
      <div>
        <MotorPump />
      </div>
      <div>
        <Light />
      </div>
    </div>
  );
}
