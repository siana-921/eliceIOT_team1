import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import styled from "@emotion/styled";

const Signup = (props) => {
  const [formStatus, setFormStatus] = useState(null);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const { status } = useSession();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();
  } // end of submitHandler function

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
    <div className="container px-5 py-10 mx-auto w-2/3">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl text-gray-700 font-semibold">
          Sign Up
        </h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            required
            ref={nameInputRef}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            required
            ref={passwordInputRef}
          />
          <p className="text-red-500 text-xs italic">
            {/* Please choose a password. */}
            {formStatus}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
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
