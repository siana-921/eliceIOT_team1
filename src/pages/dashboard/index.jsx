import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./Chart/chart";

const INTERVAL_GAP = 5000;

export default function Dashboard() {
  return (
    <div>
      <p>대시보드입니다</p>
      <Chart />
    </div>
  );
}
