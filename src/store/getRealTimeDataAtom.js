import { atom } from "recoil";

const getRealTimeDataAtom = atom({
  key: "realTimeDataState",
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

export default getRealTimeDataAtom;
