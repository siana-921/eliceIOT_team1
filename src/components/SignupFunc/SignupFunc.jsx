import { axiosInstance } from "@/api/base";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { tokenState, isLoggedInState, signupState } from "@store/atoms";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"; // useRouter 임포트

import styled from "@emotion/styled";

export default function SignupFunc() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [loading, setLoading] = useState(false);

  const setToken = useSetRecoilState(tokenState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [cookies, setCookie] = useCookies(["access_token"]);

  const router = useRouter();

  useEffect(() => {
    if (signup.success) {
      const { access_token } = signup;
      const expires = new Date();
      expires.setTime(expire.getTime() + 60 * 60 * 1000); //토큰 만료 1시간

      setCookie("access_token", access_token, { expires, path: "/" });

      setToken(access_token);
      setIsLoggedIn(true);
      router.push("/dashboard");
    } else if (signup.error) {
      alert(signup.error);
    }
  }, [signup, setToken, setIsLoggedIn, router, setCookie]);

  function SignupFunc(e) {
    e.preventDefault();

    if (!id) {
      return alert("ID를 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    } else if (!fullname) {
      return alert("이름을 입력하세요.");
    } else if (!email) {
      return alert("이메일를 입력하세요.");
    } else if (!phone) {
      return alert("휴대폰번호를 입력하세요.");
    }

    let body = {
      id: id,
      password: password,
      fullname: fullname,
      email: email,
      phone: phone,
      device_id: deviceId,
    };

    setLoading(true);

    axiosInstance
      .post(`user/sign_up`, body)
      .then((res) => {
        console.log(res);
        alert(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <SingupPageDiv>
      <h1>Join</h1>
      <SignupPageForm onSubmit={SignupFunc} method="post">
        <label htmlFor="id">ID</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="fullname">Name</label>
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="phone">Phone Number</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label htmlFor="text">Device ID</label>
        <input type="text" value={deviceId} onChange={(e) => setDeviceId(e.target.value)} />
        <button type="submit" disabled={loading}>
          Join
        </button>
      </SignupPageForm>
    </SingupPageDiv>
  );
}

const SingupPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  & h1 {
    text-align: center;
  }
`;

const SignupPageForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & label {
    text-align: left;
    width: 100%;
  }
`;
