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

export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get(`/user/sign_in/my_page`);
    const mypageData = response.data;

    return {
      props: {
        mypageData,
      },
    };
  } catch (err) {
    console.log(err.response);
    const statusCode = err.response ? err.response.status : "🚨에러발생";
    return {
      props: {
        mypageData: null,
        err: {
          statusCode,
          title: statusCode,
        },
      },
    };
  }
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
