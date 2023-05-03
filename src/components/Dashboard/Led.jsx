import { useRecoilValue } from "recoil";
import { dashboardDataAtom } from "../../store/Dashboard/atoms";

// 식물LED
export default function Led() {
  const dashboardData = useRecoilValue(dashboardDataAtom);

  return (
    <div>
      <h2>{dashboardData.brightness}</h2>
      <p>{dashboardData.isOn ? "켜짐" : "꺼짐"}</p>
      <p>LED 조명</p>
    </div>
  );
}
