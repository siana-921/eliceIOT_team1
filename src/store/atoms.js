import { atom } from "recoil";

export const allDeviceSensorState = atom({
  key: "allDeviceSensorState",
  default: [],
});

export const oneDeviceSensorState = atom({
  key: "oneDeviceSensorState",
  default: {},
});
