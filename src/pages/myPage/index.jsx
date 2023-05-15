import React from "react";
import UserProfile from "../../components/MyPage/UserProfile";
import PlantSettings from "../../components/MyPage/PlantSettings";
import NavBar from "../../components/NavBar/NavBar";
import styled from "@emotion/styled";
const MyPage = () => {
  return (
    <Main>
      <UserProfileWrapper>
        <UserProfile></UserProfile>
      </UserProfileWrapper>
      <PlantSettingsWrapper>
        <PlantSettings></PlantSettings>
      </PlantSettingsWrapper>
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;
const UserProfileWrapper = styled.div`
  width: 100vw;
  height: 360px;
`;
const PlantSettingsWrapper = styled.div`
  width: 100vw;
`;

export default MyPage;
