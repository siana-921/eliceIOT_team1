import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import ControlCard from "./control_card";

const Watering = () => {
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
      console.log("사라졌당");
      // conA의 위치를 conB의 오른쪽에 위치시키기
      first.style.transform = `translateX(${second.offsetWidth}px)`;
    }
  }, [isWaveVisible]);

  return (
    <Section>
      <Contents>
        <Title>습도 제어</Title>
        <ControlCard></ControlCard>
      </Contents>
      <Background>
        <Curtain></Curtain>
        <Waves>
          <Wave1 ref={firstwave}>
            <img
              src="/images/wave1_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
            />
          </Wave1>
          <Wave2 ref={secondwave}>
            <img
              src="/images/wave1_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
            />
          </Wave2>
        </Waves>
        <Waves>
          <Wave3 ref={firstwave}>
            <img
              src="/images/wave3_2.png"
              style={{ opacity: 0.68 }}
              alt="Wave"
            />
          </Wave3>
          <Wave4 ref={secondwave}>
            <img
              src="/images/wave3_2.png"
              style={{ opacity: 0.68 }}
              alt="Wave"
            />
          </Wave4>
        </Waves>
        <Waves>
          <Wave5>
            <img
              src="/images/wave4_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
            />
          </Wave5>
          <Wave6>
            <img
              src="/images/wave4_2.png"
              style={{ opacity: 0.48 }}
              alt="Wave"
            />
          </Wave6>
        </Waves>
        <Waves>
          <Wave7>
            <img
              src="/images/wave1_2.png"
              style={{ opacity: 0.55 }}
              alt="Wave"
            />
          </Wave7>
          <Wave8>
            <img
              src="/images/wave1_2.png"
              style={{ opacity: 0.55 }}
              alt="Wave"
            />
          </Wave8>
        </Waves>
      </Background>
    </Section>
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

const Section = styled.div``;
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
  top: -45%;
  width: 10000px;
  height: 500px;
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
export default Watering;
