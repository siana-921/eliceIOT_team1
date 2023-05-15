import styled from "@emotion/styled";

export default function LoginIntroduction() {
  return (
    <LoginPageCompanyIntroductionDiv>
      <LoginPageLogo src="/images/logo.png" alt="logo" />{" "}
      <div>바질을 가장 똑똑하게 키울 수 있는 방법을 연구하는 파질팜입니다.</div>
    </LoginPageCompanyIntroductionDiv>
  );
}

const LoginPageCompanyIntroductionDiv = styled.div`
  width: 30%;
  height: 70%;
  background-color: #ffffff;
  border-radius: 10px 0 0 10px;
`;

const LoginPageLogo = styled.img`
  width: 70%;
`;
