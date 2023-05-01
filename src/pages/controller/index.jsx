import NavBar from "../../components/NavBar/NavBar";
import styled from "@emotion/styled";
import CardwithSquareImage from "../../components/Controller/Cards/CardwithSquareImage";
import soilMoisture from "../../../public/images/soil_moisture.png";
import airHumidity from "../../../public/images/air_humidity.png";
import airTemperature from "../../../public/images/air_temperature.png";
import illuminance from "../../../public/images/illuminance.png";

//CardwithSquareImage에 prop 넘겨줄때 각각 넘겨주지 말고 객체를 넘기면 될것같은데->DB구성후에 생각하기로..
const Controller = () => {
  return (
    <ContainerWrapper>
      <NavBar></NavBar>
      <Container>
        <Panel left>
          <CardwithSquareImage
            image={airHumidity}
            size={220}
            subject={"airhumidity"}
            subjectName={"대기 수분"}
            measuredValue={40}
            buttonText={"환풍기 켜기"}
          ></CardwithSquareImage>
          <CardwithSquareImage
            image={airTemperature}
            size={220}
            subject={"temperature"}
            subjectName={"대기 온도"}
            measuredValue={22}
            buttonText={"LED 켜기"}
          ></CardwithSquareImage>
        </Panel>
        <Panel>
          <CardwithSquareImage
            image={soilMoisture}
            size={220}
            subject={"soilmoisture"}
            subjectName={"토양 수분"}
            measuredValue={23}
            buttonText={"즉시 물주기"}
          ></CardwithSquareImage>
          <CardwithSquareImage
            image={illuminance}
            size={220}
            subject={"illuminance"}
            subjectName={"조도"}
            measuredValue={67}
            buttonText={"LED 켜기"}
          ></CardwithSquareImage>
        </Panel>
      </Container>
    </ContainerWrapper>
  );
};

export default Controller;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  margin: 0 auto;
`;

const Panel = styled.div`
  width: 50%;
  margin-top: 8%;
  padding: 2rem 2rem 2rem 2rem;
  border-right: ${({ left }) => (left ? "solid 1px #8d8d8d" : "none")};
`;

/*
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

*/
