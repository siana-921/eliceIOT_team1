import styled from "@emotion/styled";
import Slider from "rc-slider";

import Table from "@components/elements/simpleTable";

const SubSection2Contents = () => {
  return (
    <Main>
      <GridContainer>
        <GridItem1>
          <Table data={[]}></Table>
        </GridItem1>
        <GridItem2>Item 2</GridItem2>
        <GridItem3>Item 3</GridItem3>
        <GridItem4>Item 4</GridItem4>
      </GridContainer>
    </Main>
  );
};

export default SubSection2Contents;

const Main = styled.div`
  width: 75vw;
  height: 100vh;
  position: relative;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 2fr 3fr;
  grid-template-areas:
    "item1 item2"
    "item3 item4";
  > div {
    height: 50vh;
  }
`;
const GridItem1 = styled.div`
  grid-area: item1;
  background-color: #ccc;
`;

const GridItem2 = styled.div`
  grid-area: item2;
  background-color: #ddd;
`;

const GridItem3 = styled.div`
  grid-area: item3;
  background-color: #eee;
`;

const GridItem4 = styled.div`
  grid-area: item4;
  background-color: #fff;
`;
