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

export const controlFan = async (deviceID, actuatorSettings) => {
  console.log("==============SET FAN==============");
  console.log(deviceID);

  try {
    await axios.post("/actuators", actuatorSettings);
  } catch (err) {
    console.log(err);
    return;
  }
};
export const controlLed = async (deviceID, actuatorSettings) => {
  console.log("==============SET LED==============");
  console.log(deviceID);

  try {
    await axios.post("/actuators", actuatorSettings);
  } catch (err) {
    console.log(err);
    return;
  }
};
export const controlPump = async (deviceID, actuatorSettings) => {
  console.log("==============SET PUMP==============");
  console.log(deviceID);

  try {
    await axios.post("/actuators", actuatorSettings);
  } catch (err) {
    console.log(err);
    return;
  }
};
