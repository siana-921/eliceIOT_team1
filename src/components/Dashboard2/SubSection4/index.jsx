import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { allDeviceSensorState } from "@store/atoms";
import { oneDeviceSensorState } from "@store/atoms";

const SubSection4Contents = () => {
  const [allDeviceSensorData, setAllDeviceSensorData] =
    useRecoilState(allDeviceSensorState);
  const [oneDeviceSensorData, setOneDeviceSensorData] =
    useRecoilState(oneDeviceSensorState);

  console.log(allDeviceSensorData);

  return <Main></Main>;
};

const Main = styled.div`
  width: 75vw;
  height: 100vh;
  display: flex;
  position: relative;
`;

export default SubSection4Contents;
