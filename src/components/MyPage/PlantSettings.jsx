import styled from "@emotion/styled";

const PlantSettings = () => {
  return (
    <div>
      <ChoosePlant></ChoosePlant>
      <AutoControlSettings>
        <h3>LED</h3>
        <p>어떻게 저떻게 설정</p>
        <p>이렇게 저렇게...</p>
        <h3>PUMP</h3>
        <p>어떻게 저떻게 설정</p>
        <p>이렇게 저렇게...</p>
        <h3>FAN</h3>
        <p>어떻게 저떻게 설정</p>
        <p>이렇게 저렇게...</p>
      </AutoControlSettings>
    </div>
  );
};

const ProfileImageWrapper = styled.div``;
const ChoosePlant = styled.div``;
const AutoControlSettings = styled.div``;

export default PlantSettings;
