import { axiosInstance } from "@/api/base";
import React, { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { tokenState, signupState, selectedPhotoState } from "@store/atoms";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

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
  const [redirectTimeout, setRedirectTimeout] = useState(null);

  // const setToken = useSetRecoilState(tokenState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [selectedPicture, setSelectedPicture] = useState(null);
  //  const [cookies, setCookie] = useCookies(["access_token"]);

  const router = useRouter();

  /*
  useEffect(() => {
    if (signup.success) {
      const { access_token } = signup;
      const expires = new Date();
      expires.setTime(expire.getTime() + 60 * 60 * 1000); //토큰 만료 1시간

      setCookie("access_token", access_token, { expires, path: "/" });

      setToken(access_token);

      timeoutId = setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else if (signup.error) {
      Swal.fire("가입 오류", signup.error, "error");
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [signup, setToken, router, setCookie]);
*/
  const handlePictureChange = (index) => {
    setSelectedPicture(index + 1);
  };

  const getSelectedPictureIndex = (picture) => {
    const index = deviceProfileImages.indexOf(picture);
    return index !== -1 ? index + 1 : null;
  };

  function SignupFunc(e) {
    e.preventDefault();

    if (!id) {
      return Swal.fire("ID를 입력하세요.", "", "warning");
    } else if (!password) {
      return Swal.fire(
        "Password를 입력하세요.",
        "8자 이상 16자 이하의 대소문자와 숫자로 작성해야 합니다.",
        "error"
      );
    } else if (!fullname) {
      return Swal.fire("이름을 입력하세요.", "", "warning");
    } else if (!email) {
      return Swal.fire("이메일를 입력하세요.", "", "warning");
    } else if (!phone) {
      return Swal.fire("휴대폰번호를 입력하세요.", "", "warning");
    } else if (!selectedPicture) {
      return Swal.fire("디바이스 이미지를 선택해주세요.", "이미지 선택은 필수입니다.", "warning");
    } else if (!deviceId) {
      return Swal.fire("디바이스 아이디를 입력해주세요.", "", "warning");
    }

    let body = {
      id: id,
      password: password,
      fullname: fullname,
      email: email,
      phone: phone,
      device_id: deviceId,
      picture: selectedPicture,
    };

    setLoading(true);
    /* 
    API 없을 때 테스트하는 방법
    const dummySignupApi = {
      post: (url, body) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              id: "minha",
              phone: "010-1234-5678",
              email: "basilfarm@gmail.com",
              fullname: "손민하",
              picture: null,
              created_at: "2023-02-06T00:00:00.000Z",
            });

            reject({
              status: 400,
              message: "Bad Request",
            });
          }, 500);
        });
      },
    };
    */

    axiosInstance
      .post(`user/sign_up`, body)
      .then((res) => {
        console.log(res);
        // alert(JSON.stringify(res));
        setLoading(false);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
        Swal.fire("가입이 완료되었습니다.", "", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("가입 오류", error.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <SingupPageDiv>
      <SignupPageContents>
        <SignupPageCommentDiv>
          <h1>JOIN</h1>
          <h2>바질과 무제한 친해지리 🌿</h2>
          <h3>다양한 센서들과 엑츄에이터들로 인생바질을 키워보세요 🌿</h3>
        </SignupPageCommentDiv>
        <SignupPageForm onSubmit={SignupFunc} method="post">
          <label htmlFor="id">ID*</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
          <label htmlFor="password">Password*</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="fullname">Name*</label>
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          <label htmlFor="email">Email*</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="phone">Phone Number*</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="text">Device ID*</label>
          <input type="text" value={deviceId} onChange={(e) => setDeviceId(e.target.value)} />
          <label htmlFor="text">Device Image*</label>
          <div>
            {deviceProfileImages.map((picture, index) => (
              <DeviceImage
                key={index}
                onClick={() => handlePictureChange(index)}
                selected={selectedPicture === index + 1}
                src={picture}
                alt={`Device Profile ${index + 1}`}
              />
            ))}
          </div>
          <button type="submit" disabled={loading}>
            Join
          </button>
        </SignupPageForm>
      </SignupPageContents>
    </SingupPageDiv>
  );
}

const SingupPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  // border: 2px red solid;

  height: 85%;
  width: 35%;
  border-radius: 10px;

  background-color: #ffffff;
`;

const SignupPageContents = styled.div`
  width: 100%;
  height: 100%;
  // border: 2px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignupPageCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  width: 85%;
  // border: 2px red solid;

  margin-top: 15px;
  margin-bottom: 20px;

  & h1 {
    font-size: 60px;
    font-weight: 700;
    color: #97c410;
    text-align: center;
    margin-bottom: 25px;
  }
  & h2 {
    font-size: 20px;
  }
  & h3 {
    font-weight: 500;
    font-size: 17px;
  }
`;

const SignupPageForm = styled.form`
  border-radius: 20px;

  // border: 2px solid;
  width: 85%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & label {
    text-align: left;
    // border: 2px red solid;
    height: 50%;
    width: 100%;
    margin: 5px;
  }

  & input {
    width: 100%;
    height: 50%;
    transition: background-color 0.8s;
    border: 1px rgba(228, 228, 228, 0.5) solid;
    border-radius: 5px;

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
    height: 50%;
    margin: 25px;
    border-radius: 5px;
    border: none;
    transition: background-color 0.2s;

    font-size: 20px;

    &: hover {
      background-color: rgba(0, 168, 107, 0.8);
    }
  }
`;

const DeviceImage = styled.img`
  width: 75px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  border-radius: 50px;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  border: ${({ selected }) => (selected ? "5px solid #107d8e" : "none")};
  outline: none;
`;
