import LoginFunc from "@/components/Login/LoginFunc";

import styled from "@emotion/styled";

export default function LoginPage() {
  return (
    <LoginPageMain>
      <LoginPageVideo src="/images/backgroundVideo.mp4" loop autoPlay muted />
      <LoginPageContents>
        <LoginPageContainer>
          <LoginFunc />
        </LoginPageContainer>
      </LoginPageContents>
    </LoginPageMain>
  );
}

const LoginPageMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
