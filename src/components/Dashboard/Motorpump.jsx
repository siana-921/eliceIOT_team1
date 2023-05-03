import { useRecoilValue } from "recoil";
import { dashboardDataAtom } from "../../store/Dashboard/atoms";
// 모터펌프
export default function Motorpump() {
  const dashboardData = useRecoilValue(dashboardDataAtom);

  return (
    <div>
      <h2>{dashboardData.motorPumping}</h2>
      <p>{dashboardData.isOn ? "켜짐" : "꺼짐"}</p>
      <p>모터펌프</p>
    </div>
  );
}
