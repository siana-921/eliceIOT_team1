import { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

/*최적 바질 생장 조건*/
import optimalVal from "../../../../public/optimalGrowingConditions";

const CardwithSquareImage = ({ cardProps }) => {
  //const [conditionMessage, setConditionMessage] = useState("");
  const { max } = optimalVal[cardProps.subject];
  const { min } = optimalVal[cardProps.subject];

  let message = "";

  if (cardProps.measuredValue < min) {
    const diff = min - cardProps.measuredValue;
    message = `적정수치보다 ${
      Number.isInteger(diff) ? diff : diff.toFixed(1)
    } 부족합니다.`;
  } else if (cardProps.measuredValue > max) {
    const diff = cardProps.measuredValue - max;
    message = `적정수치보다 ${
      Number.isInteger(diff) ? diff : diff.toFixed(1)
    } 초과합니다.`;
  } else {
    message = "바질이 성장하기에 적합합니다.";
  }

  return (
    <Card size={cardProps.size}>
      <ImageWrapper size={cardProps.size}>
        <Image
          src={`/images/${cardProps.subject}.svg`}
          width={220}
          height={220}
          priority={true}
          quality={100}
          alt="cardimage"
        ></Image>
      </ImageWrapper>
      <TextArea>
        <StyledTitle>{cardProps.subjectName}</StyledTitle>
        <StyledText>현재 측정값 : {cardProps.measuredValue}</StyledText>
        <p>{message}</p>
        <StyledButton onClick={cardProps.onClickHandler}>
          {cardProps.buttonText}
        </StyledButton>
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
  width: 220px;
  height: 220px;
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
