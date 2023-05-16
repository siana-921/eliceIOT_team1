import React, { useState, useEffect } from "react";
import { axiosInstance } from "@/api/base";
import Link from "next/link";
import { isLoggedInState, tokenState } from "@/store/atoms";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useRouter } from "next/router";
import axios from "axios";

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
        setMsg(loginData?.id + "로그인 되었습니다! 반가워요 😊");
        setLoading(false);
      }, 3000);
    }
  }, [msg, loading, loginData?.id]);

  const handleResponse = (res) => {
    if (loginData && loginData.id === id && loginData.password === password) {
      console.log("로그인");
      setMsg("");
      setToken(res.data.token);
      router.push("/mypage");
    } else if (!id || !password) {
      setMsg("ID나 Password를 입력했는지 확인해주세요.");
    } else if (!loginData) {
      setMsg("로그인 데이터를 가져오는 중입니다...");
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
    const body = {
      id: id,
      password: password,
    };

    setLoading(true);

    axios
      .post(`pages/api/mockup/sign_in`, body)
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
      <LoginPageContents>
        <LoginPageCommentDiv>
          <h1>LOGIN</h1>
          <h2>바질과 무제한 친해지리</h2>
          <h3>다양한 센서들과 엑츄에이터들로 인생바질을 키워보세요</h3>
        </LoginPageCommentDiv>
        <LoginPageForm onSubmit={LoginFunc} method="post">
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" disabled={loading}>
            Login
          </button>
          <LoginPageSignupDiv>
            <p>아직 가입을 하지 않았다면?</p>
            <LoginPageSignupLink href="/signup">가입하러 가기</LoginPageSignupLink>
          </LoginPageSignupDiv>
          {msg}
        </LoginPageForm>
      </LoginPageContents>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  position: relative;
  width: 30%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border-radius: 10px;
`;

const LoginPageContents = styled.div`
  width: 100%;
  height: 80%;
  // border: 2px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginPageCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  & h1 {
    font-size: 70px;
    font-weight: 700;
    color: #97c410;
    text-align: center;
    margin-bottom: 25px;
  }
  & h3 {
    font-weight: 500;
  }
`;

const LoginPageForm = styled.form`
  border-radius: 20px;

  // border: 2px solid;
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    width: 100%;
    height: 13%;
    transition: background-color 0.8s;
    border: 1px rgba(228, 228, 228, 0.5) solid;
    border-radius: 5px;
    margin: 15px;

    &:focus {
      border: 0.5px solid;
    }

    &::placeholder {
      padding-left: 20px;
      font-size: 15px;
    }
  }

  & button {
    cursor: pointer;
    width: 100%;
    margin: 20px;
    height: 13%;
    border-radius: 5px;
    border: none;
    transition: background-color 0.2s;

    font-size: 20px;

    &: hover {
      background-color: rgba(0, 168, 107, 0.8);
    }
  }
`;

const LoginPageSignupDiv = styled.div`
  display: flex;
  margin: 20px;
  font-size: 18px;
`;

const LoginPageSignupLink = styled(Link)`
  font-weight: bold;
  margin-left: 10px;
  color: rgba(0, 168, 107, 0.8);
`;
