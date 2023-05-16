import styled from "@emotion/styled";
import Image from "next/image";

import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userInfoAtom, deviceInfoAtom } from "@store/atoms";
import { autoControlStateSeletor } from "@store/selector";

const MainSection1Content = () => {
  const user = useRecoilValue(userInfoAtom);
  const device = useRecoilValue(deviceInfoAtom);
  const autoControlState = useRecoilValue(autoControlStateSeletor);

  console.log(autoControlState);
  const router = useRouter();

  const handleNavMyPage = () => {
    router.push("/mypage");
  };

  const handleNavLogOut = () => {
    router.push("/");
  };

  return (
    <Main>
      <ProfileImageWrapper>
        <Profileimage></Profileimage>
      </ProfileImageWrapper>
      <TitleWrapper>
        <UserNameText>{user.name}님의</UserNameText>
        <PlantNameText>{device.name}</PlantNameText>
      </TitleWrapper>
      <ContentsWrapper>
        <SubTitleText>{`${device.created_at}에 태어남`}</SubTitleText>
        <SubTitleText>현재상태</SubTitleText>
        <SubTitleText>
          {autoControlState.status ? "자동제어가 실행중입니다." : "자동제어가 실행중이 아닙니다."}
        </SubTitleText>
      </ContentsWrapper>
      <NavWrapper>
        <NavText onClick={handleNavMyPage}>마이페이지</NavText>
        <NavText onClick={handleNavLogOut}>로그아웃</NavText>
      </NavWrapper>
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
  box-shadow: -2.3vh 2.3vh 4vh rgba(0, 0, 0, 0.15);
`;
const NavWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: black;
  display: flex;
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
const NavText = styled.div`
  padding: 1rem;
  width: 50%;
  text-align: center;
`;
//----------------------------------
