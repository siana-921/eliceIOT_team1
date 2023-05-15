import LoginFunc from "@/components/Login/LoginFunc";
import { axiosInstance } from "@/api/base";

export default function LoginPage({ loginData }) {
  return (
    <>
      <LoginFunc loginData={loginData} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get(`/user/sign_in`);
    const loginData = response.data;

    return {
      props: {
        loginData,
      },
    };
  } catch (err) {
    console.log(err.response);
    const statusCode = err.response ? err.response.status : "🚨에러발생";
    return {
      props: {
        loginData: null,
        err: {
          statusCode,
          title: statusCode,
        },
      },
    };
  }
}
