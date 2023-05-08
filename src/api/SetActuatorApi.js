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

export const controlFan = async (reqData) => {
  console.log("==============SET FAN==============");
  console.log(reqData);

  //post(api-endpoint, data, config object(include headers, timeout, baseURL, withCredentials... ))
  try {
    await axios.post(`/actuators/${reqData.device_id}/fan`, reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
    return;
  }
};
export const controlLed = async (reqData) => {
  console.log("==============SET LED==============");
  console.log(reqData);

  try {
    await axios.post(`/actuators/${reqData.device_id}/led`, reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
    return;
  }
};
export const controlPump = async (reqData) => {
  console.log("==============SET PUMP==============");
  console.log(reqData);

  try {
    await axios.post(`/actuators/${reqData.device_id}/pump`, reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
    return;
  }
};
