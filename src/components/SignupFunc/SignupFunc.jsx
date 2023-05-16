import { axiosInstance } from "@/api/base";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

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
  const setDevices = useSetRecoilState(devicesState);
  const setDefaultDeviceId = useSetRecoilState(defaultDeviceIdState);
  const [signup, setSignup] = useRecoilState(signupState);

  const router = useRouter();

  useEffect(() => {
    if (signup.success) {
      const { access_token } = signup;

      const expires = new Date();
      expires.setDate(expire.getDate() + 7); // 쿠키 만일일 7일

      document.cookie = `access_token=${access_token}; expires=${expires.toUTCString()}`;

      // Recoil 상태 업데이트
      setToken(access_token);
      setIsLoggedIn(true);

      // 회원가입 후 이동할 페이지로 이동합니다.
      router.push("/dashboard");
    } else if (signup.error) {
      // 회원가입이 실패한 경우
      alert(signup.error);
    }
  }, [signup, setToken, setIsLoggedIn, router]);

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
      .post(`user/sign_up`, body) // 요청코드 만드는 중
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
        <button type="submit" disabled={loading}>
          Join
        </button>
        {msg}
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

const SignupPageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
