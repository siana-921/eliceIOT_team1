import styled from "@emotion/styled";
import Slider, { Range, handleRender } from "rc-slider";
import "rc-slider/assets/index.css";

const MainSection4Content = () => {
  //슬라이더 래퍼 영역 클릭시 부모 요소(section)에 onclick이벤트 전달 방지
  const handleSlideronClick = (event) => {
    event.stopPropagation();
  };
  //--------------------------------------------------------------------//

  //슬라이더 value onChange handler-------------------------------------//
  const handleSlider = (value) => {
    console.log(value);
    //여기에 슬라이드 value를 활용한 코드 작성
  };
  //--------------------------------------------------------------------//

  return (
    <Main>
      <BackTriangleWrapper>
        <BackTriangleShape></BackTriangleShape>
      </BackTriangleWrapper>
      <SensorNameText>Humidity ──────────────────</SensorNameText>
      <DataValueText>
        55<PercentText>%</PercentText>
      </DataValueText>
      <SliderWrapper onClick={handleSlideronClick}>
        <SlideTitle>목표 제어 습도</SlideTitle>
        <Slider min={0} max={100} defaultValue={50} onChange={handleSlider} />
      </SliderWrapper>
      <RandomMessageWrapper>
        <RandomMsg>바질의 최적습도는 60% 입니다</RandomMsg>
        <RandomMsg>바질은 촉촉한 환경을 좋아해요</RandomMsg>
        <RandomMsg>바질의 적정습도는 60~80% 입니다</RandomMsg>
      </RandomMessageWrapper>
    </Main>
  );
};

export default MainSection4Content;

const Main = styled.div`
width: 100%
height: 100%
overflow: hidden`;

//----------------섹션 내부 레이아웃 (Wrapper)
const RandomMessageWrapper = styled.div`
  padding: 1rem 1.3rem 1rem 1rem;
`;
//----------------------------------

//-------------------디자인 요소
const BackTriangleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 25vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;
const BackTriangleShape = styled.div`
  position: absolute;
  top: -18vw;
  left: -18vw;
  width: 35vw;
  height: 25vw;
  transform: rotate(45deg);
  background-color: #ffffff;
  z-index: -1;
`;
const SliderWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;
//---------------------------------

//----------------텍스트 스타일

const DataValueText = styled.p`
  font-size: 10rem;
  margin-top: -1.2rem;
`;
const SensorNameText = styled.p`
  font-size: 3rem;
  font-weight: 200;
  min-width: 13vw;
  white-space: nowrap;
`;
const PercentText = styled.span`
  font-size: 5rem;
  font-weight: 300;
`;
const SlideTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
`;
const RandomMsg = styled.p`
  font-size: 1.1rem;
  text-align: right;
`;
//--------------------------------
