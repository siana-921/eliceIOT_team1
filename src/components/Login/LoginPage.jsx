import Login from "./Login";
import { json, redirect } from "react-router-dom";

export default function LoginPage() {
  return <Login />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "아직 준비되지 않은 요청입니다!" }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    id: data.get("id"),
    password: data.get("password"),
  };

  const response = fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  // 422 : 오류가 있음
  // 401 : 유효하지 않은 자격 증명
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "사용자 인증 불가" }, { status: 500 });
  }

  return redirect("/");
}
