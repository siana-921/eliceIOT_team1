import { useRecoilState } from "recoil";
import { loginState, loginAction } from "../../store/atoms";
import Link from "next/link";

function Login() {
  const [login, setLogin] = useRecoilState(loginState);

  const handleIdChange = (e) => {
    setLogin((prev) => ({
      ...prev,
      id: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setLogin((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const handleLogin = () => {
    // Recoil로 로그인 액션 처리
    if (login.id && login.password) {
      setLogin((prev) => ({
        ...prev,
        loading: true,
        msg: "로그인 성공",
      }));
    }
  };

  const LoginFunc = (e) => {
    e.preventDefault();

    const { id, password } = login;

    if (!id) {
      return alert("ID를 입력하세요.");
    } else if (!password) {
      return alert("Password를 입력하세요.");
    }

    handleLogin();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={LoginFunc}>
        <label>Username:</label>
        <input type="text" value={login.id} onChange={handleIdChange} />
        <label>Password:</label>
        <input
          type="password"
          value={login.password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Login</button>
        {login.msg && <div>{login.msg}</div>}
        <label>회원가입이 되어 있지 않다면?</label>
        <Link a href="/join">
          회원가입하기
        </Link>
      </form>
    </div>
  );
}

export default Login;
