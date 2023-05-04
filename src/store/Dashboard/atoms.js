import { atom } from "recoil";

export const dashboardDataAtom = atom({
  key: "dashboardDataAtom",
  default: [],
});

export const actuatorDataAtom = atom({
  key: "actuatorDataAtom",
  default: [],
});

export const realtimeDataAtom = atom({
  key: "realtimeDataState",
  default: {
    idx: 0,
    device_id: "unit_undefined",
    temp: 0,
    humidity: 0,
    light: 0,
    water_level: 0,
    moisture: 0,
    created_at: 0,
  },
});
