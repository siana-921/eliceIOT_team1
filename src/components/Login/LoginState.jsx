import React, { useState } from "react";

export default function LoginState() {
  const [user, setUser] = useState(null);

  const clearUser = () => {
    setId("");
    setPassword("");
    setMsg("");
  };

  const handleLogout = () => {
    console.log("로그아웃");
    setUser(clearUser()); // 로그인이 필요한 상태
  };

  return (
    <>
      <h1>MyPage</h1>
      {user ? (
        <>
          <p>{user.name}님, 안녕하세요!</p>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <p>로그인이 필요합니다.</p>
          <button onClick={() => console.log("로그인")}>로그인</button>
        </>
      )}
    </>
  );
}
