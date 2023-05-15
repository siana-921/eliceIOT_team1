import styled from "@emotion/styled";

export default function MyPageUser() {
  return (
    <>
      <MyPageUserMain>
        <MyPageTitle>👋 김정연님, 반가워요!</MyPageTitle>
        <MyPageDiv>
          <MyPageInfoList>
            <MyPageInfoItem>🪴 아이디 : testuser</MyPageInfoItem>
            <MyPageInfoItem>✉️ 이메일 : 123@example.com</MyPageInfoItem>
            <MyPageInfoItem>📱 휴대폰번호 : 010-1234-5678</MyPageInfoItem>
          </MyPageInfoList>
        </MyPageDiv>
      </MyPageUserMain>
    </>
  );
}

const MyPageUserMain = styled.main`
  width: 75%;
  margin: 0 auto;

  border-radius: 20px;
  background-color: rgba(217, 217, 217, 0.3);

  text-align: center;
`;

const MyPageTitle = styled.h1`
  font-size: 50px;
  font-weight: 300;

  margin: 20px;
`;

const MyPageDiv = styled.div`
  margin: 35px;
`;

const MyPageInfoList = styled.ul`
  margin: 10px;
`;

const MyPageInfoItem = styled.li`
  font-size: 23px;
  margin: 5px;
`;
