import styled from "@emotion/styled";

const PlantSettings = () => {
  return (
    <Main>
      <MyPageContents>
        <StyledTitleText>내 식물</StyledTitleText>
        <ChoosePlant>
          <EachPlant>
            <CircleDiv></CircleDiv>
            <PlantName>바질르르르..</PlantName>
          </EachPlant>
          <EachPlant>
            <CircleDiv></CircleDiv>
            <PlantName>먹을 바질</PlantName>
          </EachPlant>
          <EachPlant>
            <CircleDiv></CircleDiv>
            <PlantName>먹다 만 바질</PlantName>
          </EachPlant>
          <EachPlant>
            <CircleDiv></CircleDiv>
            <PlantName>애완바질</PlantName>
          </EachPlant>
          <EachPlant>
            <CircleDiv></CircleDiv>
            <PlantName>남이 키우던 바질</PlantName>
          </EachPlant>
          <EachPlant>
            <CircleDiv></CircleDiv>
            <PlantName>김 바질</PlantName>
          </EachPlant>
          <EachPlant>
            <CircleDiv></CircleDiv>
            <PlantName>바질페스토</PlantName>
          </EachPlant>
        </ChoosePlant>
      </MyPageContents>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MyPageContents = styled.div`
  width: 80%;
  padding-top: 1rem;
  padding-bottom: 10rem;
`;
const ChoosePlant = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 1rem;
`;
const EachPlant = styled.div`
  padding: 10px 10px 20px 10px;
  text-align: center;
`;
const CircleDiv = styled.div`
  width: 215px;
  height: 215px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;
const PlantName = styled.p`
  padding-top: 1rem;
  font-size: 24px;
  font-weight: 800;
`;
const StyledTitleText = styled.h3`
  font-size: 3rem;
  padding: 1rem 0 1.5rem 0.5rem;
`;

export default PlantSettings;
