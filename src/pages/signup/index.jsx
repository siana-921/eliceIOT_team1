import SignupFunc from "@/components/SignupFunc/SignupFunc";
import styled from "@emotion/styled";

// SSR -> { signupData } 추가하기
export default function SignupPage() {
  return (
    <SignupPageMain>
      <SignupPageVideo src="/images/backgroundVideo.mp4" loop autoPlay muted />
      <SignUpPageContent>
        <SingUpPageContainer>
          <SignupFunc />
        </SingUpPageContainer>
      </SignUpPageContent>
    </SignupPageMain>
  );
}

const SignupPageMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SignupPageVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const SignUpPageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const SingUpPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
