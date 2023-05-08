import { atom } from "recoil";

export const dashboardDataAtom = atom({
  key: "dashboardDataAtom",
  default: [],
});

export const actuatorDataAtom = atom({
  key: "actuatorDataAtom",
  default: [],
});
