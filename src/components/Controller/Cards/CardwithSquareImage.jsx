import styled from "@emotion/styled";
import Image from "next/image";

//액츄에이터가 작동중이라면 "지금 작동중입니다" 문구 같은거 표시하기
const CardwithSquareImage = (props) => {
  return (
    <Card size={props.size}>
      <ImageWrapper size={props.size}>
        <Image
          src={`/images/${props.subject}.svg`}
          width={props.size}
          height={props.size}
          priority={true}
          quality={100}
          alt="cardimage"
        ></Image>
      </ImageWrapper>
      <TextArea>
        <StyledTitle>{props.subjectName}</StyledTitle>
        <StyledText>현재 측정값 : {props.measuredValue}</StyledText>
        <p>바질이 자라기 위해서는 ?? % 부족합니다.</p>
        <p>바질이 자라기 위해서는 ?? % 초과합니다.</p>
        <StyledButton>{props.buttonText}</StyledButton>
      </TextArea>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  max-height: 220px;
  display: flex;
  margin-bottom: 2rem;
`;
const ImageWrapper = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 20px;
  background-color: #d9d9d9;
  overflow: hidden;
`;
const TextArea = styled.div`
  flex: 1;
  margin-left: 15px;
  overflow: hidden;
  position: relative;
`;
const StyledTitle = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
`;
const StyledText = styled.p`
  font-size: 2rem;
  padding-bottom: 0.2rem;
`;
const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  width: 100%;
  border: none;
  background-color: #97c410;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
`;
export default CardwithSquareImage;
