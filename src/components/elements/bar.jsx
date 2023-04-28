import styled from "@emotion/styled";

const Bar = (props) => {
  const { percent, thickness, color } = props;

  return (
    <div>
      <HorizontalBar
        percent={percent}
        thickness={thickness}
        color={color}
        fontsize={thickness}
      ></HorizontalBar>
    </div>
  );
};

const HorizontalBar = styled.div`
  width: ${(props) => props.percent}%;
  height: ${(props) => props.thickness}px;
  font-size: ${(props) => props.thickness - 2}px;
  background-color: ${(props) => props.color};

  border-radius: 10px;
  color: white;
`;
export default Bar;

//  background: linear-gradient(to left, transparent, ${(props) => props.color});
