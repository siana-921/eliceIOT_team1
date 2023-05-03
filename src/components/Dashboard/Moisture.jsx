import { useRecoilValue } from "recoil";
import { dashboardDataAtom } from "@/store/Dashboard/atoms";

// 토양 수분감지 센서
export default function Moisture() {
  const dashboardData = useRecoilValue(dashboardDataAtom);

  return (
    <>
      <h1>{dashboardData[0]?.moisture}</h1>
      <h3>현재 토양 수분량</h3>
      <p>{dashboardData[1] - dashboardData[0] > 0 ? "🔺" : "🔻"}</p>
      <p>{Math.abs(dashboardData[1]?.moisture - dashboardData[0]?.moisture)}</p>
    </>
  );
}
