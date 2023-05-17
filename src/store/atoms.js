import { atom } from "recoil";

export const allDeviceSensorAtom = atom({
  key: "allDeviceSensorAtom",
  default: [],
});

//누적 센서 데이터 (객체배열)
export const sensorDataOriginAtom = atom({
  key: "sensorDataOriginAtom",
  default: [],
});

//아무런 로그인 정보가 없을때는 테스트를 위해
//user001 의 unit001 을 관리중이라고 침
//유저 정보 (단일객체)
export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {
    id: "user001",
    name: "알 수 없는 유저",
    phone: "010-0000-0000",
    email: "Basil@Farm.com",
    picture: 1,
    created_at: "2023-04-24",
    device: "unit001",
  },
});

//디바이스 정보 (단일객체)
export const deviceInfoAtom = atom({
  key: "deviceInfoAtom",
  default: {
    id: "unit001",
    name: "야생의바질",
    species: "basil",
    autoMode: false,
    created_at: "2023-04-24",
  },
});

//디바이스 자동제어상태확인 (Origin: 언제나 객체 1개만 들어있는 배열로 옴)
//api/auto/:device_id/status
export const autoControlConfigOriginAtom = atom({
  key: "autoControlConfigOriginAtom",
  default: [
    {
      device_id: "unit001",
      status: 1,
      target_temp: 20,
      target_moisture: 70,
      target_light: 40,
      created_at: "2023-05-12T12:26:40.000Z",
    },
  ],
});

//제어명령 누적 (객체배열)
export const actuatorLogOriginAtom = atom({
  key: "actuatorLogAtom",
  default: [
    {
      idx: 0,
      device_id: "test001",
      led: 0,
      pump: 0,
      fan: 0,
      created_at: 1682658179,
    },
  ],
});

// ---------------------------------------------로그인---------------------------------------------------------

// 로그인 토큰 관리
export const tokenState = atom({
  key: "tokenState",
  default: "",
});

// 로그인 상태를 관리하는 atom(로그아웃 처리를 위해서 작성)
export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});

export const devicesState = atom({
  key: "devicesState",
  default: [],
});

export const defaultDeviceIdState = atom({
  key: "defaultDeviceIdState",
  default: "",
});
