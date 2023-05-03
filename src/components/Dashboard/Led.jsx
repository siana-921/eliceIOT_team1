import { useRecoilValue } from "recoil";
import { dashboardDataAtom } from "../../store/Dashboard/atoms";

// 식물LED
export default function Led() {
  const dashboardData = useRecoilValue(dashboardDataAtom);

  return (
    <div>
      <h2>{dashboardData.led}</h2>
      <p>{dashboardData.led ? "켜짐" : "꺼짐"}</p>
      <p>식물 LED</p>
    </div>
  );
}
