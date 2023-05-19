import styled from "@emotion/styled";
import Image from "next/image";

import { useRouter } from "next/router";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, deviceAtom, isLoggedInState } from "@store/atoms";
import { formatAutoConfigSelector } from "@store/selector";

const MainSection1Content = () => {
  const user = useRecoilValue(userAtom);
  const device = useRecoilValue(deviceAtom);
  const autoConfig = useRecoilValue(formatAutoConfigSelector);
  const [islogin, setIslogin] = useRecoilState(isLoggedInState);

  const router = useRouter();

  const handleNavMyPage = () => {
    router.push("/mypage");
  };

  const handleNavLogOut = () => {
    setIslogin(false);
    router.push("/");
  };

  console.log(autoConfig);

  return (
    <Main>
      <ProfileImageWrapper>
        <Profileimage
          style={{
            backgroundImage:
              device.device_id === "unit003"
                ? "url(/images/profile/cat.jpeg)"
                : "url(/images/profile/basilpesto.png)",
            backgroundSize: "cover",
          }}
        ></Profileimage>
      </ProfileImageWrapper>
      <TitleWrapper>
        <UserNameText>{user.fullname}님의</UserNameText>
        <PlantNameText>
          {device.device_id === "unit003" ? "바질맛사료" : "그저그런바질"}
        </PlantNameText>
      </TitleWrapper>
      <ContentsWrapper>
        <SubTitleText>{`MAC address: ${device.device_macAddress} (${device.device_type})`}</SubTitleText>
        <SubTitleText style={{ fontSize: "28px", fontWeight: 200 }}>
          {autoConfig.status ? "Auto Mode : ON " : "Auto Mode : OFF"}
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
  padding-left: 20px;
`;
const ContentsWrapper = styled.div`
  padding: 20px;
`;
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
  border: 7px solid #fff;
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
  font-size: 20px;
  font-weight: 100;
`;
const NavText = styled.div`
  padding: 1rem;
  width: 50%;
  text-align: center;
`;
//----------------------------------
