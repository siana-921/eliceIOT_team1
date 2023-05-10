import { atom } from "recoil";

export const allDeviceSensorAtom = atom({
  key: "allDeviceSensorAtom",
  default: [],
});

export const oneDeviceSensorAtom = atom({
  key: "oneDeviceSensorAtom",
  default: {},
});

export const colorCodeAtom = atom({
  key: "colorCodeAtom",
  default: {
    gray: "#e4e4e4",
    yellow: "#ffdd00",
    lime: "#97c410",
    green: "#00a86b",
    turquoise: "#107d8e",
    navy: "#112839",
    marine: "#00b7d8",
    deepgreen: "#199269",
    lavender: "#8884D8",
    orange: "#FF8000",
  },
});
