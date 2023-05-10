import { useRecoilState } from "recoil";
import { loginState, loginAction } from "../../store/atoms";

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
      }));

      // 로그인 과정
      loginAction(login.id, login.password)
        .then((response) => {
          // 로그인 성공
          setLogin((prev) => ({
            ...prev,
            loading: false,
            msg: "로그인 성공",
          }));
        })
        .catch((error) => {
          // 로그인 실패
          setLogin((prev) => ({
            ...prev,
            loading: false,
            msg: "로그인 실패",
          }));
        });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={login.id} onChange={handleIdChange} />
        <label>Password:</label>
        <input
          type="password"
          value={login.password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Login</button>
        {login.loading && <div>Loading...</div>}
        {login.msg && <div>{login.msg}</div>}
      </form>
    </div>
  );
}

export default Login;
