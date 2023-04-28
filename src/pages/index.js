import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <MainPageVideo
          src="/images/backgroundVideo.mp4"
          loop
          autoPlay
          muted
        ></MainPageVideo>
        <MainPageText>바질을 키우는 가장 스마트한 방법</MainPageText>
        <MainPageLogo src="/images/logo.png" alt="logo" />
        <MainPageButtonDiv>
          <Link href="/controller">
            <MainPageButton>Controller</MainPageButton>
          </Link>
          <Link href="/dashboard">
            <MainPageButton>Dashboard</MainPageButton>
          </Link>
        </MainPageButtonDiv>
      </div>
    </main>
  );
}

const MainPageVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const MainPageVideoWrap = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgb(113, 113, 255), rgb(138, 255, 146));
  mix-blend-mode: overlay;
`;

const MainPageTextDiv = styled.div`
  z-index: -1;
  color: rgba(#ffffff);
`;

const MainPageText = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  z-index: 5;
  color: #ffffff;
`;

const MainPageLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const MainPageButtonDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const MainPageButton = styled.button`
  background: #00a86b;
  box-shadow: 0rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  /* 회원가입 */

  position: absolute;

  left: 25%;
  top: 40rem;
  height: 3.5rem;
  width: 20rem;

  font-style: normal;
  font-size: 1.5rem;
  line-height: 2.3rem;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;
