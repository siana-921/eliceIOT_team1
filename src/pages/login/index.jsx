import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import LoginState from "@/components/Login/LoginState";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg && loading) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  }, [msg, loading]);

  const handleResponse = (data) => {
    if (data.code === 200) {
      console.log("로그인");
      setMsg("");
    } else if (data.code === 400) {
      setMsg("ID, Password가 비어있습니다.");
    } else if (data.code === 401) {
      setMsg("존재하지 않는 ID입니다.");
    } else if (data.code === 402) {
      setMsg("Password가 틀립니다.");
    } else {
      setMsg("알 수 없는 오류가 발생했습니다.");
    }
  };

  const LoginFunc = (e) => {
    e.preventDefault();
    if (!id) {
      return alert("ID를 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    } else {
      let body = {
        id: id,
        password: password,
      };
    }

    axios
      .post("Endpoint", body)
      .then((res) => {
        console.log(res.data);
        handleResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
        setMsg("API 호출에 실패했습니다.");
      });
    setLoading(true);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={LoginFunc} method="post">
        <label htmlFor="id">ID</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          로그인
        </button>
        <p>가입이 되지 않았다면?</p>
        <Link href="/signup">가입하러 가기</Link>
        {msg}
      </form>
      {user.isLogin ? <LoginState /> : <LoginPage />}
    </>
  );
}
