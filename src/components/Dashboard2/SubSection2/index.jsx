import styled from "@emotion/styled";
import Image from "next/image";

const SubSection2 = () => {
  return (
    <Main>
      <Image src="/images/emoji_heart.png" width={300} height={300} />
    </Main>
  );
};

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`;

export default SubSection2;
