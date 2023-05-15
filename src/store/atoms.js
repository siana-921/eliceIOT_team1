import { atom } from "recoil";

export const allDeviceSensorAtom = atom({
  key: "allDeviceSensorAtom",
  default: [],
});

//누적 센서 데이터 (객체배열)
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

//아무런 로그인 정보가 없을때는 테스트를 위해
//user000 의 unit000 을 관리중이라고 침
//유저 정보 (단일객체)
export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {
    id: "user000",
    name: "알 수 없는 유저",
    phone: "010-0000-0000",
    email: "Basil@Farm.com",
    picture: "1",
    created_at: "1970-01-01T00:00:00.000Z",
    devices: [],
  },
});

//디바이스 정보 (단일객체)
export const deviceInfoAtom = atom({
  key: "deviceInfoAtom",
  default: {
    id: "unit000",
    name: "야생의바질",
    species: "basil",
    autoMode: false,
    created_at: "1970-01-01T00:00:00.000Z",
  },
});

//디바이스 자동제어상태확인 (단일객체인지 누적데이터배열인지 확인필요0512)
//api/auto/:device_id/status
export const autoControlStateAtom = atom({
  key: "autoControlStateAtom",
  default: {
    device_id: "test001",
    status: 0,
    target_temp: 0,
    target_moisture: 0,
    created_at: "",
  },
});

//제어명령 누적 (객체배열)
export const actuatorLogAtom = atom({
  key: "actuatorLogAtom",
  default: [{ idx: 0, device_id: "test001", led: 0, pump: 0, fan: 0, created_at: 1682658179 }],
});

// 로그인 토큰 관리
export const tokenState = atom({
  key: "tokenState",
  default: "",
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

export const devicesState = atom({
  key: "devicesState",
  default: [],
});

export const defaultDeviceIdState = atom({
  key: "defaultDeviceIdState",
  default: "",
});
