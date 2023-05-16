import LoginFunc from "@/components/Login/LoginFunc";
import { axiosInstance } from "@/api/base";
import LoginIntroduction from "@/components/Login/LoginIntroduction";
import { useEffect } from "react";

import styled from "@emotion/styled";

export default function LoginPage({ loginData, err }) {
  useEffect(() => {
    // example
    if (err.message === "Network Connecting Error") {
      alert("네트워크 상태를 확인해주세요");
    }
  }, [err]);

  return (
    <>
      <LoginPageVideo src="/images/backgroundVideo.mp4" loop autoPlay muted />
      <LoginPageContents>
        {/* <LoginIntroduction /> */}
        <LoginFunc loginData={loginData} />
      </LoginPageContents>
    </>
  );
}

export async function getServerSideProps(context) {
  // context.req.headers.cookie["~~~~"]

  try {
    const response = await axiosInstance.get(`/user/sign_in/my_page`);
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

const LoginPageContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
