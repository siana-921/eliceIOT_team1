import { useRecoilValue } from "recoil";
import { dashboardDataAtom } from "../../store/Dashboard/atoms";
import { useMemo } from "react";

// 식물LED
export default function Led() {
  const dashboardData = useRecoilValue(dashboardDataAtom);
  const memoDashboardData = useMemo(() => dashboardData, [dashboardData]);

  return (
    <div>
      <h2>{memoDashboardData.led}</h2>
      <p>{memoDashboardData.led === 0 ? "꺼짐" : "켜짐"}</p>
      <p>식물 LED</p>
    </div>
  );
}
