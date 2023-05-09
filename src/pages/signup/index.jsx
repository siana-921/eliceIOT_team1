import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import styled from "@emotion/styled";

async function createUser() {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ fullname, email, password, phone, id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

const Signup = (props) => {
  const [formStatus, setFormStatus] = useState(null);

  const fullnameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const idInputRef = useRef(null);

  const { status } = useSession();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = fullnameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredPhoneNumber = phoneInputRef.current?.value;
    const enteredId = idInputRef.current?.value;

    try {
      const result = await createUser(
        enteredName,
        enteredEmail,
        enteredPassword,
        enteredPhoneNumber,
        enteredId
      );
      console.log(result);
      setFormStatus(`Sign up Success: ${result.message}`);
      router.replace("/login");
    } catch (error) {
      console.log(error);
      setFormStatus(`Error Occured: ${error.message}`);
    }
  }

  if (status === "authenticated") {
    router.replace("/");
    return (
      <div>
        <h1>Sign Up</h1>
        <div>You are already signed up.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            required
            ref={fullnameInputRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            ref={emailInputRef}
          />
        </div>{" "}
        <div>
          <label htmlFor="number">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            required
            ref={phoneInputRef}
          />
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <input
            id="id"
            type="text"
            placeholder="ID"
            required
            ref={idInputRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            ref={passwordInputRef}
          />
          <p>
            {/* Please choose a password. */}
            {formStatus}
          </p>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

// export default function Join() {
//   return (
//     <JoinPageMain>
//       <JoinPageGIF
//         src="/images/backgroundVideo.mp4"
//         loop
//         autoPlay
//         muted
//       ></JoinPageGIF>

//       <JoinPageInput>
//         <h1>Join</h1>
//         <p>아이디</p>
//         <input placeholder="아이디를 입력해주세요." />
//         <p>비밀번호</p>
//         <input placeholder="비밀번호를 입력해주세요!" />
//         <button>회원가입</button>
//       </JoinPageInput>
//     </JoinPageMain>
//   );
// }

// const JoinPageMain = styled.main`
//   position: relative;
//   width: 100%;
//   height: 100vh;
// `;

// const JoinPageGIF = styled.video`
//   width: 100%;
//   height: 100vh;
//   object-fit: cover;
//   z-index: -1;
// `;

// const JoinPageInput = styled.div`
//   background-color: #ffffff;

//   position: absolute;
//   top: 10%;
//   left: 33%;
//   width: 584px;
//   height: 752px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
