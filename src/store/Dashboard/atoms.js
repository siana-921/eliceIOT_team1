import { atom } from "recoil";

export const dashboardDataAtom = atom({
  key: "dashboardDataAtom",
  default: { led: 0 },
});
