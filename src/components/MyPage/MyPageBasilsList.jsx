import styled from "@emotion/styled";

export default function MyPageBailsList() {
  return (
    <BasilsListMain>
      <h3>김정연님의 바질</h3>
      <BasilListDiv>
        <p>새로운 바질이 추가되었나요?</p>
        <button>추가하러 가기</button>
      </BasilListDiv>
    </BasilsListMain>
  );
}

const BasilsListMain = styled.main`
  width: 70%;

  text-align: center;
`;

const BasilListDiv = styled.div`
  display: flex;
  justify-content: center;

  margin: 10px;
  font-size: 20px;
`;
