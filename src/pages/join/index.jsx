import styled from "@emotion/styled";

export default function Join() {
  return (
    <JoinPageMain>
      <JoinPageGIF
        src="/images/backgroundVideo.mp4"
        loop
        autoPlay
        muted
      ></JoinPageGIF>

      <JoinPageInput>
        <h1>Join</h1>
        <p>아이디</p>
        <input placeholder="아이디를 입력해주세요." />
        <p>비밀번호</p>
        <input placeholder="비밀번호를 입력해주세요!" />
        <button>회원가입</button>
      </JoinPageInput>
    </JoinPageMain>
  );
}

const JoinPageMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const JoinPageGIF = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const JoinPageInput = styled.div`
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
