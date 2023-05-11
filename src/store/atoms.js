import { atom } from "recoil";

export const allDeviceSensorAtom = atom({
  key: "allDeviceSensorAtom",
  default: [],
});

export const oneDeviceSensorAtom = atom({
  key: "oneDeviceSensorAtom",
  default: {},
});

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
