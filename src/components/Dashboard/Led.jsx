import { useRecoilValue } from "recoil";
import { actuatorDataAtom } from "../../store/Dashboard/atoms";
import styled from "@emotion/styled";

// 식물LED
export default function Led() {
  const actuatorData = useRecoilValue(actuatorDataAtom);

  return (
    <LedDiv>
      <h2>{actuatorData[1]?.led ? "ON" : "OFF"}</h2>
      <p>{actuatorData[1]?.led}</p>
      <h3>식물 LED</h3>
    </LedDiv>
  );
}

const LedDiv = styled.div`
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
