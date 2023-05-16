import { axiosInstance } from "@/api/base";
import React, { useState, useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { tokenState, isLoggedInState, signupState } from "@store/atoms";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

import styled from "@emotion/styled";

const deviceProfileImages = [
  "/images/deviceprofile01.png",
  "/images/deviceprofile02.png",
  "/images/deviceprofile03.png",
  "/images/deviceprofile04.png",
];

export default function SignupFunc() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

  const handlePhotoChange = (photo) => {
    setSelectedPhoto(photo);
    setDeviceId(photo);
  };

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
    } else if (!photo) {
      return alert("디바이스 이미지를 선택해주세요.");
    } else if (!deviceId) {
      return alert("디바이스 아이디를 입력해주세요.");
    }

    let body = {
      id: id,
      password: password,
      fullname: fullname,
      email: email,
      phone: phone,
      device_id: deviceId,
      photo: photo,
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
        <div>
          {deviceProfileImages.map((photo, index) => (
            <DeviceImage
              key={index}
              onClick={() => handlePhotoChange(photo)}
              selected={selectedPhoto === photo}
              src={photo}
              alt={`Device Profile ${index + 1}`}
            />
          ))}
        </div>
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

const DeviceImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;
