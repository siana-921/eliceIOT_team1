import React from "react";
import UserProfile from "../../components/MyPage/UserProfile";
import PlantSettings from "../../components/MyPage/PlantSettings";
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
  display: flex;
`;

export default MyPage;
