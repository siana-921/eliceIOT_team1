import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import Dashboard from "./pages/dashboard";

export default function Home() {
  return (
    <MainPage>
      <MainPageVideo
        src="/images/backgroundVideo.mp4"
        loop
        autoPlay
        muted
      ></MainPageVideo>
      <MainPageContents>
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
      </MainPageContents>
    </MainPage>
  );
}

const MainPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const MainPageVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const MainPageContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const MainPageText = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;

  color: #ffffff;
`;
const MainPageLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MainPageButtonDiv = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MainPageButton = styled.button`
  background: #00a86b;
  box-shadow: 0rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  height: 3.5rem;
  width: 15rem;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 2.3rem;
  color: #ffffff;
  margin: 10px;
`;
