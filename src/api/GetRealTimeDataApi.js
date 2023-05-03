import axios from "axios";

const serverSelect = 2; // 1: prod, 2: dev

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;
  console.log(`PROD ${axios.defaults.baseURL}`);
} else if (serverSelect === 1) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEV_API_ROOT;
  console.log(`PROD ${axios.defaults.baseURL}`);
} else if (serverSelect === 2) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_PROD_API_ROOT;
  console.log(`DEV ${axios.defaults.baseURL}`);
}

export const getRealTimeData = async (deviceID) => {
  console.log("==============GET DATA==============");
  console.log(deviceID);

  try {
    const res = await axios.get(`/sensor/${deviceID}`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return;
  }
};
