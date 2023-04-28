import NavBar from "../../components/NavBar/NavBar";
import Humidity from "../../components/Controller/Category/Humidity";
import Light from "../../components/Controller/Category/Light";
import styled from "@emotion/styled";

const Controller = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Panels>
        <Humidity></Humidity>
        <Space></Space>
        <Light></Light>
      </Panels>
    </div>
  );
};

const Panels = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Space = styled.div`
  background-color: black;
  width: 100vw;
  height: 80vh;
`;
export default Controller;
