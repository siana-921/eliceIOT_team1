import axios from "axios";
//axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.REACT_APP_DEV_API_ROOT;
  console.log(`DEV ${axios.defaults.baseURL}`); // 로컬 개발 환경
} else if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = process.env.REACT_APP_PROD_API_ROOT;
  console.log(`PROD ${axios.defaults.baseURL}`);
} else {
  console.log("etc"); // 기타 환경
}
/*
export const getSensorData = async (deviceID) => {
  console.log("==============GET DATA==============");
  console.log(deviceID);

  try {
    const res = await axios.get("/sensor");
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return;
  }
};
*/
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
