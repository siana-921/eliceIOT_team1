import { axiosInstance } from "@/api/base";
import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

export default function SignupPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    if (msg && loading) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 3000);
    }
  }, [msg, loading]);

  function SignupFunc(e) {
    e.preventDefault();

    if (!id) {
      return setMsg("ID를 입력하세요.");
    } else if (!password) {
      return setMsg("Password를 입력하세요.");
    } else if (!fullname) {
      return setMsg("이름을 입력하세요.");
    } else if (!email) {
      return setMsg("이메일를 입력하세요.");
    } else if (!phone) {
      return setMsg("휴대폰번호를 입력하세요.");
    }

    let body = {
      id,
      password,
      fullname,
      email,
      phone,
    };

    axiosInstance
      .post(`/user/sign_up`, body)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    setLoading(true);
  }

  return (
    <SingupPageDiv>
      <h1>Join</h1>
      <SignupPageForm onSubmit={SignupFunc} method="post">
        <label htmlFor="id">ID</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="fullname">Name</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Join</button>
      </SignupPageForm>
    </SingupPageDiv>
  );
}

const SingupPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    text-align: center;
  }
`;

const SignupPageForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
