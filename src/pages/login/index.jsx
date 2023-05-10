import React, { useState, useEffect } from "react";
// import { useDiapatch } from "react-redux";
// import { loginUser } from "../reducer/userSlice.js";
// import axios from "axios";

import Link from "next/link";

export default function LoginPage() {
  //  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    /*...*/
  }, [msg]);

  const LoginFunc = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={LoginFunc}>
        <label htmlFor="id">ID</label>
        <input type="id" />
        <label htmlFor="password">Password : </label>
        <input type="password" />
        <button type="submit">로그인</button>
        <p>가입이 되지 않았다면?</p>
        <Link href="/signup">가입하러 가기</Link>
        {msg}
      </form>
    </>
  );
}
