import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./chart/chart";
import { chartData, chartOptions } from "./chart/data";

const INTERVAL_GAP = 5000;

export default function Dashboard() {
  return (
    <div>
      <p>대시보드입니다</p>
      <Chart />
    </div>
  );
}
