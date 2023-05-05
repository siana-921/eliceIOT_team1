import { useRecoilValue } from "recoil";
import { actuatorDataAtom } from "../../store/Dashboard/atoms";
import styled from "@emotion/styled";

// 모터펌프
export default function Motorpump() {
  const actuatorData = useRecoilValue(actuatorDataAtom);

  return (
    <MotorpumpDiv>
      <h2>{actuatorData[1]?.pump ? "On" : "Off"}</h2>
      <p>{actuatorData[1]?.pump}</p>
      <h3>모터펌프</h3>
    </MotorpumpDiv>
  );
}

const MotorpumpDiv = styled.div`
  align-items: center;
  justify-content: center;

  > h2 {
    font-size: 6rem;
  }

  > p {
    font-size: 1.2rem;
    margin: 0.5rem;
  }
`;
