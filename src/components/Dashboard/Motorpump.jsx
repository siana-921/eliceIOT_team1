import { useRecoilValue } from "recoil";
import { actuatorDataAtom } from "../../store/Dashboard/atoms";

// 모터펌프
export default function Motorpump() {
  const actuatorData = useRecoilValue(actuatorDataAtom);

  return (
    <div>
      <h2>{actuatorData[1]?.pump}</h2>
      <p>{actuatorData[1]?.pump ? "켜짐" : "꺼짐"}</p>
      <p>모터펌프</p>
    </div>
  );
}
