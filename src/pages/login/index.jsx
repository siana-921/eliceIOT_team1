import styled from "@emotion/styled";

export default function Login() {
  return (
    <LoginPageMain>
      <LoginPageGIF
        src="/images/backgroundVideo.mp4"
        loop
        autoPlay
        muted
      ></LoginPageGIF>

      <LoginPageInput>
        <h1>Login</h1>
        <p>아이디</p>
        <input placeholder="아이디를 입력해주세요." />
        <p>비밀번호</p>
        <input placeholder="비밀번호를 입력해주세요!" />
        <button>로그인</button>
      </LoginPageInput>
    </LoginPageMain>
  );
}

const LoginPageMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LoginPageGIF = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const LoginPageInput = styled.div`
  background-color: #ffffff;

  position: absolute;
  top: 10%;
  left: 33%;
  width: 584px;
  height: 752px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
