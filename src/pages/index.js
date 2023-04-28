import Link from "next/link";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <main>
      <div>
        <MainPageVideoWrap>
          <MainPageVideo src="/images/backgroundVideo.mp4" loop autoPlay muted>
            <MainPageTextDiv>
              <MainPageText>바질을 키우는 가장 스마트한 방법</MainPageText>
            </MainPageTextDiv>
          </MainPageVideo>
        </MainPageVideoWrap>
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
  font-color: rgba(#ffffff);
`;

const MainPageText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: x-large;
`;
