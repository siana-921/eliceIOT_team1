import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import Panel from "../Shared/Panel";

const Light = () => {
  return (
    <LightFrame>
      <Contents>
        <Title>조도 제어</Title>
        <Panel subject="humidity" category="조도"></Panel>
      </Contents>
      <Beam></Beam>
    </LightFrame>
  );
};

const LightFrame = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Title = styled.h1`
  padding: 80px 0 30px 0;
  font-size: 96px;
  text-align: center;
`;
const Contents = styled.div`
  position: relative;
  text-align: center;
  z-index: 5;
  color: black;
  font-family: pretendard;
`;
const beamAnimation = keyframes`
  0% {
    border-bottom-color: #FFB0BB;
  }
  50% {
    border-bottom-color: #FFC3A0;
  }
  100% {
    border-bottom-color: #ABC4E4;
  }
`;

const Beam = styled.div`
  width: 200px;
  height: 0px;
  border-bottom: 100vw solid transparent;
  border-right: 35vw solid transparent;
  border-left: 55vw solid transparent;
  transform: skew(45deg);
  margin-top: -170vh;
  margin-left: -70vh;
  animation: ${beamAnimation} 4s linear infinite;
  animation-delay: 1s;
  animation-direction: alternate;
`;
export default Light;
