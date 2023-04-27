import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "../../components/Chart/DoughnutChart/DoughnutChart";
import {
  chartData,
  chartOptions,
} from "../../components/Chart/DoughnutChart/Data";
import LineChart from "@/components/Chart/LineChart/LineChart";

const INTERVAL_GAP = 5000;

export default function Dashboard() {
  return (
    <div>
      <p>대시보드입니다</p>
      <Chart />
      <LineChart />
    </div>
  );
}
