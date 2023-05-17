import styled from "@emotion/styled";

import MyPageBailsList from "@/components/MyPage/MyPageBasilsList";
import MyPageUser from "@/components/MyPage/MyPageUser";

export default function MyPage({ mypageData }) {
  return (
    <MyPageContainer>
      <MyPageLogoImage src="/images/logo.png" alt="logo" layout="fill" />
      <MyPageUser />
      <MyPageBailsList />
    </MyPageContainer>
  );
}

const MyPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPageLogoImage = styled.img`
  margin-top: 20px;

  height: 80%;
  width: 45%;
`;
