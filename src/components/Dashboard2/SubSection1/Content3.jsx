import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Content3 = () => {
  const [bgCriterion, setBgCriterion] = useState();

  return (
    <GridContainer>
      {Array(28)
        .fill()
        .map((_, index) => (
          <GridCell
            key={index}
            bgColor={bgCriterion ? bgCriterion : "#d9d9d9"}
          />
        ))}
    </GridContainer>
  );
};

export default Content3;

const Main = styled.div`
  width: 1fr;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(2, 1.2rem);
  grid-gap: 5px;
`;

const GridCell = styled.div`
  width: 1rem;
  height: 1.2rem;
  background-color: #ccc;
`;
