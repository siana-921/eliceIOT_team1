import LoginFunc from "@/components/Login/LoginFunc";
import { axiosInstance } from "@/api/base";
import LoginIntroduction from "@/components/Login/LoginIntroduction";

import styled from "@emotion/styled";

export default function LoginPage({ loginData }) {
  return (
    <>
      <LoginPageVideo src="/images/backgroundVideo.mp4" loop autoPlay muted />
      <LoginIntroduction />
      <LoginFunc loginData={loginData} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get(`/user/sign_in`);
    const loginData = response.data;

    return {
      props: {
        loginData,
      },
    };
  } catch (err) {
    console.log(err.response);
    const statusCode = err.response ? err.response.status : "🚨에러발생";
    return {
      props: {
        loginData: null,
        err: {
          statusCode,
          title: statusCode,
        },
      },
    };
  }
}

const LoginPageVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  width: 100%;
`;
