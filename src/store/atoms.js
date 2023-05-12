import { atom, selector } from "recoil";

export const allDeviceSensorAtom = atom({
  key: "allDeviceSensorAtom",
  default: [],
});

export const sensorDataAtom = atom({
  key: "sensorDataAtom",
  default: [
    {
      idx: 0,
      device_id: "",
      light: 0,
      moisture: 0,
      temp: 0,
      humidity: 0,
      water_level: 0,
      created_at: "", //unix-time-number로 오지만 저장할때 string으로 하게 함.
    },
  ],
});

export const isAutoOnAtom = atom({
  key: "isAutoOnAtom",
  default: {
    led: false,
    fan: false,
    pump: false,
    peltier: false,
  },
});

// 로그인 상태를 관리하는 atom
/*
export const loginState = atom({
  key: "loginState",
  default: {
    id: "",
    password: "",
    loading: false,
    msg: "",
  },
});
*/
export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {
    id: "Unknown",
    name: "알 수 없는 유저",
    phone: "010-0000-0000",
    email: "Basil@Farm.com",
    picture: "1",
    created_at: "1970-01-01T00:00:00.000Z",
    devices: [],
  },
});

export const deviceInfoAtom = atom({
  key: "deviceInfoAtom",
  default: {
    id: "test001",
    name: "야생의바질",
    species: "basil",
    autoMode: false,
    created_at: "1970-01-01T00:00:00.000Z",
  },
});

export const lastSensorDataSelector = selector({
  key: "lastSensorDataSelector",
  get: ({ get }) => {
    const sensorData = get(sensorDataAtom);
    return maxBy(sensorData, (data) => new Date(data.create_at).getTime());
  },
});
