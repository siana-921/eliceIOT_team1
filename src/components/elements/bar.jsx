import styled from "@emotion/styled";

const Bar = (props) => {
  const { percent, thickness } = props;

  return (
    <div>
      <HorizontalBar percent={percent} thickness={thickness}></HorizontalBar>
    </div>
  );
};

const HorizontalBar = styled.div`
  width: ${(props) => props.percent}%;
  height: ${(props) => props.thickness}px;
  background-color: #107d8e;
  border-radius: 10px;
`;
export default Bar;
