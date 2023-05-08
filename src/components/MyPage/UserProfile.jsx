import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [userName, setUserName] = useState("정수아");
  const [userDate, setUserDate] = useState("2023년 4월 23일");

  return (
    <Main>
      <StyledUserInfoArea>
        <UserNameText>{userName}</UserNameText>
        <UserNameTextDeco>님 반갑습니다</UserNameTextDeco>
        <p style={{ fontSize: "1.8rem", paddingLeft: "0.5rem" }}>
          <span>7가지의 식물을 키우고 있습니다. 이쁘게 키워주세요 !</span>
        </p>
      </StyledUserInfoArea>

      <ProfileImageWrapper></ProfileImageWrapper>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #00c879, #00a86b);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledUserInfoArea = styled.div`
  width: 80%;
  padding-top: 6.5rem;
`;
const ProfileImageWrapper = styled.div``;
const UserNameText = styled.span`
  font-size: 104px;
`;
const UserNameTextDeco = styled.span`
  font-size: 96px;
`;

export default UserProfile;
