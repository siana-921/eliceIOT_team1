import React, { useState, useEffect } from "react";
import { axiosInstance } from "@/api/base";
import Link from "next/link";
import { tokenState } from "@/store/atoms";
import { useSetRecoilState } from "recoil";

import styled from "@emotion/styled";

export default function LoginFunc({ loginData }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const setToken = useSetRecoilState(tokenState);

  useEffect(() => {
    if (msg && loading) {
      setTimeout(() => {
        setMsg(loginData.id + "로그인 되었습니다! 반가워요 😊");
        setLoading(false);
      }, 3000);
    }
  }, [msg, loading]);

  const handleResponse = (res) => {
    if (loginData && loginData.id === id && loginData.password === password) {
      console.log("로그인");
      setMsg("");
      setToken(res.data.token);
      window.location.href = "/myPage";
    } else if (res.code === 400) {
      setMsg("ID, Password가 비어있습니다.");
    } else if (res.code === 401) {
      setMsg("존재하지 않는 ID입니다.");
    } else if (res.code === 402) {
      setMsg("Password가 틀립니다.");
    } else {
      setMsg("알 수 없는 오류가 발생했습니다." + res);
    }
  };

  const LoginFunc = (e) => {
    e.preventDefault();
    if (!id) {
      return alert("ID를 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    }
    let body = {
      id: id,
      password: password,
    };

    setLoading(true);

    axiosInstance
      .post(`/user/sign_in`, body)
      .then((res) => {
        console.log(res);
        handleResponse(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setMsg("API 호출에 실패했습니다.");
        setLoading(false);
      });
  };
  return (
    <LoginPage>
      <LoginPageVideo src="/images/backgroundVideo.mp4" loop autoPlay muted />
      <LoginPageContents>
        <LoginPageCompanyIntroductionDiv>
          <LoginPageLogo src="/images/logo.png" alt="logo" />{" "}
          <div>바질을 가장 똑똑하게 키울 수 있는 방법을 연구하는 파질팜입니다.</div>
        </LoginPageCompanyIntroductionDiv>
        <LoginPageForm onSubmit={LoginFunc} method="post">
          <h1>Login</h1>
          <label htmlFor="id">ID</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={loading}>
            로그인
          </button>
          <p>아직 가입을 하지 않았다면?</p>
          <Link href="/signup">가입하러 가기</Link>
          {msg}
        </LoginPageForm>
      </LoginPageContents>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const LoginPageVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  width: 100%;
`;

const LoginPageContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
`;

const LoginPageCompanyIntroductionDiv = styled.div`
  width: 30%;
  height: 70%;
  background-color: #ffffff;
  border-radius: 10px 0 0 10px;
`;

const LoginPageLogo = styled.img`
  width: 70%;
`;

const LoginPageForm = styled.form`
  width: 30%;
  height: 70%;
  background-color: #ffffff;
  border-radius: 0 10px 10px 0;
`;
