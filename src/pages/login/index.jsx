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
      <LoginPageInputArea>
        <h1>LOGIN</h1>
        {/* <LoginPageBoarder /> */}
        <LoginPageInputDiv>
          <ul>
            <li>아이디</li>
            <input placeholder="아이디를 입력해주세요." />
            <li>비밀번호</li>
            <input placeholder="비밀번호를 입력해주세요." />
          </ul>
        </LoginPageInputDiv>
        <LoginButtonDiv>
          <button>로그인</button>
          <button>회원가입</button>
        </LoginButtonDiv>
      </LoginPageInputArea>
    </LoginPageMain>
  );
}

const LoginPageMain = styled.main`
  position: relative;
`;

const LoginPageGIF = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const LoginPageInputArea = styled.div`
  background-color: #ffffff;

  position: absolute;
  top: 10%;
  left: 32%;
  width: 40rem;
  height: 47rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 0.1rem solid;
  box-shadow: 0.5rem 0.5rem 0.125rem 0.0625rem #ffffff;
  border-radius: 1rem;

  & h1 {
    margin: 3rem;

    font-weight: 800;
    font-size: 5rem;
    color: #e4e4e4;
  }
`;

const LoginPageBoarder = styled.div`
  width: 80%;

  border-bottom: 0.8rem solid #000000;
  margin: 1rem;
`;

const LoginPageInputDiv = styled.div`
  width: 70%;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  & li {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 500;
  }

  & input {
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 0.1rem solid;
    font-size: 0.9rem;
  }
  & input:focus {
    outline: none;
    border-bottom: 2px solid #00a86b;
  }
`;

const LoginButtonDiv = styled.div`
  display: flex;

  & button {
    height: 3rem;
    width: 14rem;
    margin: 3rem 0.5rem;
    background-color: #00a86b;
    border: none;
    border-radius: 1rem;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: #e4e4e4;
    }
  }
`;
