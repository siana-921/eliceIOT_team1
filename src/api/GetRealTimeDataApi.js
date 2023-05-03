import axios from "axios";

//여기에서 await하는걸로는 이걸 return한곳에서 또 같은문제가 생겨서
//그럴바에는 그냥 컴포넌트 있는 파일에서 한번에 해결하고있음
//나중에 다시 생각해보자 ㅠ_ㅠ
export default async function getRealTimeData(deviceID) {
  const serverSelect = 2; // 1: prod, 2: dev

  if (process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;
    console.log(`PROD ${axios.defaults.baseURL}`);
  } else if (serverSelect === 1) {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;
    console.log(`PROD ${axios.defaults.baseURL}`);
  } else if (serverSelect === 2) {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEV_API_ROOT;
    console.log(`DEV ${axios.defaults.baseURL}`);
  }

  console.log("==============GET DATA==============");
  console.log(deviceID);

  try {
    const res = await axios.get(`/sensor/${deviceID}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    return;
  }
}
