import React from "react";
import styled from "@emotion/styled";

const BarGraph = () => {
  return (
    <div>
      <Graph>여기에 그래프</Graph>
    </div>
  );
};

const Graph = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
`;
export default BarGraph;
