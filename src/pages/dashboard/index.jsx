import Link from "next/link";
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
      <h1>
        <Link href="/">Basil Farm</Link>
      </h1>
      <div>
        <li>Dashboard</li>
        <li>Controller</li>
        <li>My Page</li>
      </div>
      <Chart />
      <Chart />
      <LineChart />
    </div>
  );
}
