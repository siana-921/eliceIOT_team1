import { atom } from "recoil";

export const allDeviceSensorState = atom({
  key: "allDeviceSensorState",
  default: [],
});

export const oneDeviceSensorState = atom({
  key: "oneDeviceSensorState",
  default: {},
});

// 로그인

// 로그인 상태를 관리하는 atom
export const loginState = atom({
  key: "loginState",
  default: {
    id: "",
    password: "",
    loading: false,
    msg: "",
  },
});
