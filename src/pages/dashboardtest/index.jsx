import { useState } from "react";
import styled from "@emotion/styled";

const Dashboard2 = () => {
  const [offset, setOffset] = useState(0);
  const [activeSectionNum, setActiveSectionNum] = useState(-1);
  const [isSubsectionVisible, setIsSubsectionVisible] = useState([0, 0, 0, 0]);

  const handleSpread = (sectionNum) => {
    setOffset(sectionNum);
    setActiveSectionNum(sectionNum);
  };

  console.log(offset, activeSectionNum);

  return (
    <Main>
      <SectionWrapper offsetNum={offset}>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <h1>Section 1</h1>
          <button onClick={() => handleSpread(0)}>클릭...</button>
        </MainSection>
        <Subsection sectionNum={0} activeSectionNum={activeSectionNum}>
          <h1>Section 1-2</h1>
        </Subsection>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <h1>Section 2</h1>
          <button onClick={() => handleSpread(1)}>클</button>
        </MainSection>
        <Subsection sectionNum={1} activeSectionNum={activeSectionNum}>
          <h1>Section 2-2</h1>
        </Subsection>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <h1>Section 3</h1>
          <button onClick={() => handleSpread(2)}>릭</button>
        </MainSection>
        <Subsection sectionNum={2} activeSectionNum={activeSectionNum}>
          <h1>Section 3-2</h1>
        </Subsection>
        <MainSection activeSectionNum={activeSectionNum} offsetNum={offset}>
          <h1>Section 4</h1>
          <button onClick={() => handleSpread(3)}>해봐요</button>
        </MainSection>
        <Subsection sectionNum={3} activeSectionNum={activeSectionNum}>
          <h1>Section 4-2</h1>
        </Subsection>

        <MainSection>Section 1</MainSection>
        <MainSection>Section 2</MainSection>
        <MainSection>Section 3</MainSection>
      </SectionWrapper>
    </Main>
  );
};

export default Dashboard2;
const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const SubMain = styled.div``;
const SectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.offsetNum * -25}%;
  flex-wrap: nowrap;
  display: flex;

  transition: left 0.5s ease-in-out;
`;
const MainSection = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: red;
  z-index: 3;
`;
const Subsection = styled.div`
  position: relative;
  top: 0;
  left: ${({ sectionNum, activeSectionNum }) =>
    sectionNum == activeSectionNum ? "0vw" : "0"};
  width: 75vw;
  height: 100vh;
  background-color: yellow;
  z-index: 0;
  display: ${({ sectionNum, activeSectionNum }) =>
    sectionNum == activeSectionNum ? "block" : "none"};
`;

/*
export async function getServerSideProps() {
  const data = [
    {
      name: "uw",
      uv: 100,
      fill: "transparent",
    },
    {
      name: "unknow",
      uv: 23,
      fill: "#ffc658",
    },
  ];

  return {
    props: {
      data,
    },
  };
}
*/
