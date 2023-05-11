import React, { useEffect } from "react";
import { axiosInstance } from "@/api/base";

export default function LogoutFunc(props) {
  useEffect(() => {
    axiosInstance.get("/user/sign_out").then((response) => console.log(response.data));
  }, []);

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
