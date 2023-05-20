import styled from "@emotion/styled";

import MyPageBailsList from "@/components/mypage/MyPageBasilsList";
import MyPageUser from "@/components/mypage/MyPageUser";
import { tokenState, userAtom } from "@/store/atoms";
import { useRecoilValue, useRecoilState } from "recoil";

export default function MyPage({}) {
  const user = useRecoilValue(userAtom);
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
