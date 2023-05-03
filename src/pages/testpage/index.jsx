import axios from "axios";
//axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/sensor");
  return { props: { data: res.data } };
}

export async function rewrites() {
  return [
    {
      source: "http://34.64.110.118:5000/api/sensor",
      destination: "http://localhost:8000/api/sensor",
    },
  ];
}

export async function middleware() {
  return [
    createProxyMiddleware("/api", {
      target: "http://localhost:8000",
      changeOrigin: true,
    }),
  ];
}

const TestPage = (props) => {
  return (
    <div>
      <h1>테스트 페이지..무슨짓을 하던...자유....</h1>
      <div>{console.log(props)}</div>
    </div>
  );
};

export default TestPage;
