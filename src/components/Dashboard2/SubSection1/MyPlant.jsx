import styled from "@emotion/styled";

const MyPlant = () => {
  return (
    <Main>
      <ListWrapper>리스트 row 하나 클릭하면 펼쳐지면서 식물정보랑</ListWrapper>
      <ControllerWrapper>
        <p>식물 추가 버튼 - 모달?</p>
      </ControllerWrapper>
    </Main>
  );
};

export default MyPlant;

const Main = styled.div``;
