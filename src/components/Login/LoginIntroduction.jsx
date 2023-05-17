import styled from "@emotion/styled";

export default function LoginIntroduction() {
  return (
    <LoginPageCompanyIntroductionMain>
      <LoginPageCompanyIntroductionDiv>
        <LoginPageLogo src="/images/logo.png" alt="logo" />
        <h2>바질과 무제한 친해지리</h2>
        <h3>다양한 센서들과 엑츄에이터들로 인생바질을 키워보세요</h3>
      </LoginPageCompanyIntroductionDiv>
    </LoginPageCompanyIntroductionMain>
  );
}

const LoginPageCompanyIntroductionMain = styled.main`
  width: 30%;
  height: 70%;
  background-color: #ffffff;
  border-radius: 10px 0 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginPageLogo = styled.img`
  width: 100%;
  height: 23%;
`;

const LoginPageCompanyIntroductionDiv = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
