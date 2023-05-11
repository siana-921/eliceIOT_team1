import React, { useState, useEffect } from "react";
import { axiosInstance } from "@/api/base";
import Link from "next/link";

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
      }, 3000);
    }
  }, [msg, loading]);

  const handleResponse = (data) => {
    if (data.code === 200) {
      console.log("로그인");
      setMsg(" 로그인 완료 ! ");
    } else if (data.code === 400) {
      setMsg("ID, Password가 비어있습니다.");
    } else if (data.code === 401) {
      setMsg("존재하지 않는 ID입니다.");
    } else if (data.code === 402) {
      setMsg("Password가 틀립니다.");
    } else {
      setMsg("알 수 없는 오류가 발생했습니다." + data.code);
      console.log(data.code);
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
        console.log(res.data);
        handleResponse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setMsg("API 호출에 실패했습니다.");
        setLoading(false);
      });
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={LoginFunc} method="post">
        <label htmlFor="id">ID</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          로그인
        </button>
        <p>아직 가입을 하지 않았다면?</p>
        <Link href="/signup">가입하러 가기</Link>
        {msg}
        {console.log("아이디:", id, " ", "패스워드", password)}
      </form>
    </>
  );
}
