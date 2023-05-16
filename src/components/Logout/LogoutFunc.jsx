import React, { useEffect } from "react";
import { axiosInstance } from "@/api/base";

// import { isLoggedInState, tokenState } from "@/store/atoms";
// import { useRecoilState } from "recoil";

export default function LogoutFunc(props) {
  useEffect(() => {
    axiosInstance.get("/user/sign_out").then((response) => console.log(response.data));
  }, []);

  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  // const handleLogout = () => {
  //   setToken("");
  //   setIsLoggedIn(false);
  // }

  const onClickHandler = () => {
    axiosInstance.get("/user/sign_out").then((response) => {
      if (response.data.success) {
        console.log(props.history);
        props.history.push("/login");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}
