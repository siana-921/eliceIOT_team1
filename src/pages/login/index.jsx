import LoginFunc from "@/components/Login/LoginFunc";
import { axiosInstance } from "@/api/base";
import LoginIntroduction from "@/components/Login/LoginIntroduction";
import { useEffect } from "react";
import axios from "axios";

import styled from "@emotion/styled";

export default function LoginPage({ loginData, err }) {
  return (
    <>
      <LoginPageVideo src="/images/backgroundVideo.mp4" loop autoPlay muted />
      <LoginPageContents>
        <LoginPageContainer>
          {/* <LoginIntroduction /> */}
          <LoginFunc loginData={loginData} />
        </LoginPageContainer>
      </LoginPageContents>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    // 코치님이 알려주신 부분 : context.req.headers.cookie["~~~~"]
    const cookieValue = context.req.headers.cookie ? context.req.headers.cookie : undefined;

    const response = await axios.get("pages/api/mockup/userinfo", {
      headers: {
        // 쿠키를 요청 헤더에 추가
        Cookie: cookieValue,
      },
    });

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

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginPageVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const LoginPageContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
