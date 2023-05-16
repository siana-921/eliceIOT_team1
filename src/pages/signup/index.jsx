import SignupFunc from "@/components/SignupFunc/SignupFunc";

export default function SignupPage() {
  return (
    <>
      <SignupFunc />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get(`/user/sign_up`);
    const signupData = response.data;

    return {
      props: {
        signupData,
      },
    };
  } catch (err) {
    console.log(err.response);
    const statusCode = err.response ? err.response.status : "🚨에러발생";
    return {
      props: {
        signupData: null,
        err: {
          statusCode,
          title: statusCode,
        },
      },
    };
  }
}
