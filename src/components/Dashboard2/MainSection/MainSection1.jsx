import styled from "@emotion/styled";
import Image from "next/image";

const MainSection1Content = () => {
  return (
    <Main>
      <ProfileImageWrapper>
        <Profileimage></Profileimage>
      </ProfileImageWrapper>
      <TitleWrapper>
        <UserNameText>정수아님의</UserNameText>
        <PlantNameText>먹다남은바질</PlantNameText>
      </TitleWrapper>
      <ContentsWrapper>
        <SubTitleText>처음 키운날</SubTitleText>
        <p>2023년 4월 23일</p>
        <SubTitleText>현재상태</SubTitleText>
        <SubTitleText>아무말ㅣㅑㅈ덜미쟈더</SubTitleText>
      </ContentsWrapper>
    </Main>
  );
};

export default MainSection1Content;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

//----------------섹션 내부 레이아웃 (Wrapper)
const TitleWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.5rem;
`;
const ContentsWrapper = styled.div``;
const RandomMessageWrapper = styled.div`
  padding: 1rem 1.3rem 1rem 1rem;
`;
const ProfileImageWrapper = styled.div`
  position: relative;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
`;
const Profileimage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: #ffffff;
`;
//----------------------------------

//---------------------텍스트 스타일
const UserNameText = styled.p`
  font-size: 2.5rem;
`;
const PlantNameText = styled.p`
  font-size: 4.5rem;
  font-weight: 600;
`;
const SubTitleText = styled.p`
  font-size: 1.3rem;
`;
//----------------------------------
