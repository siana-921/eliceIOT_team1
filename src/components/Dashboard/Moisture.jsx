import { useRecoilValue } from "recoil";
import { dashboardDataAtom } from "@/store/Dashboard/atoms";
import styled from "@emotion/styled";

// 토양 수분감지 센서
export default function Moisture() {
  const dashboardData = useRecoilValue(dashboardDataAtom);

  return (
    <MoistureAreaDiv>
      <h1>{dashboardData[0]?.moisture}</h1>
      <h3>현재 토양 수분량</h3>
      <MoistureUpDifferenceValueDiv>
        <p>{dashboardData[1] - dashboardData[0] > 0 ? "🔺" : "🔻"}</p>
        <p>
          {Math.abs(dashboardData[1]?.moisture - dashboardData[0]?.moisture)}
        </p>
      </MoistureUpDifferenceValueDiv>
    </MoistureAreaDiv>
  );
}

const MoistureAreaDiv = styled.div`
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 5rem;
    margin-top: 10%;
  }

  & h3 {
    margin-top: 1rem;
    margin-bottom: 0.3rem;
  }
`;

const MoistureUpDifferenceValueDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
