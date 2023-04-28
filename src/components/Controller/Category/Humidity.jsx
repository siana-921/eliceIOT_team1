import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import Panel from "../Shared/Panel";

const Humidity = () => {
  //wave 이미지 같은거 2개로 계속 왼쪽으로 이동
  //한 이미지가 왼쪽으로 완전히 없어지면(isWaveVisible false)
  //다음 이미지의 오른쪽으로 이동. 반복
  const [isWaveVisible, setIsWaveVisible] = useState(true);
  const firstwave = useRef();
  const secondwave = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsWaveVisible(entry.isIntersecting);
    });

    observer.observe(firstwave.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isWaveVisible) {
      const first = firstwave.current;
      const second = secondwave.current;
      // conA의 위치를 conB의 오른쪽에 위치시키기
      first.style.transform = `translateX(${second.offsetWidth}px)`;
    }
  }, [isWaveVisible]);

  return (
    <HumiditySection>
      <Contents>
        <Title>습도 제어</Title>
        <Panel subject="humidity" category="습도"></Panel>
      </Contents>
      <Background>
        <Curtain></Curtain>
        <Waves>
          <Wave1 ref={firstwave}>
            <Image
              src="/images/wave1_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave1>
          <Wave2 ref={secondwave}>
            <Image
              src="/images/wave1_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave2>
        </Waves>
        <Waves>
          <Wave3 ref={firstwave}>
            <Image
              src="/images/wave3_2.png"
              style={{ opacity: 0.68 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave3>
          <Wave4 ref={secondwave}>
            <Image
              src="/images/wave3_2.png"
              style={{ opacity: 0.68 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave4>
        </Waves>
        <Waves>
          <Wave5>
            <Image
              src="/images/wave4_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave5>
          <Wave6>
            <Image
              src="/images/wave4_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave6>
        </Waves>
        <Waves>
          <Wave7>
            <Image
              src="/images/wave1_2.png"
              style={{ opacity: 0.55 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave7>
          <Wave8>
            <Image
              src="/images/wave1_2.png"
              style={{ opacity: 0.55 }}
              alt="Wave"
              width={5000}
              height={1090}
            />
          </Wave8>
        </Waves>
      </Background>
    </HumiditySection>
  );
};

const wavemove1 = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-5001px);
    }
`;
const wavemove2 = keyframes`
    from {
        transform: translateX(5000px);
    }
    to {
        transform: translateX(-1px);
    }
`;

const HumiditySection = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Curtain = styled.div`
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, transparent, white);
  z-index: 4;
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

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #01a5c2;
  overflow: hidden;
  z-index: -1;
`;
const Waves = styled.div`
  position: absolute;
  top: -55%;
  width: 10000px;
  display: flex;
  z-index: 3;

  > div {
    position: absolute;
    width: 5000px;
    height: 500px;
  }
`;

const Wave1 = styled.div`
  animation: ${wavemove1} 7s linear infinite;
`;
const Wave2 = styled.div`
  animation: ${wavemove2} 7s linear infinite;
`;
const Wave3 = styled.div`
  animation: ${wavemove1} 11s linear infinite;
`;
const Wave4 = styled.div`
  animation: ${wavemove2} 11s linear infinite;
`;
const Wave5 = styled.div`
  animation: ${wavemove1} 15s linear infinite;
`;
const Wave6 = styled.div`
  animation: ${wavemove2} 15s linear infinite;
`;
const Wave7 = styled.div`
  animation: ${wavemove1} 20s linear infinite;
`;
const Wave8 = styled.div`
  animation: ${wavemove2} 20s linear infinite;
`;
export default Humidity;
