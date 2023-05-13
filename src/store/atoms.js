import { atom, selector } from "recoil";

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

//유저 정보 (단일객체)
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

//디바이스 정보 (단일객체)
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

// [셀렉터] 누적센서데이터 중 최신 데이터
export const lastSensorDataSelector = selector({
  key: "lastSensorDataSelector",
  get: ({ get }) => {
    const sensorData = get(sensorDataAtom);
    return maxBy(sensorData, (data) => new Date(data.created_at).getTime());
  },
});

// [셀렉터] 온도에 관한 모든 데이터
export const temperatureAtom = selector({
  key: "temperatureAtom",
  get: ({ get }) => {
    const sensorData = get(sensorDataAtom); //배열객체 -api연결완료
    const autoControlState = get(autoControlStateAtom); //단일객체
    const actuatorLog = get(actuatorLogAtom); //배열객체

    const latestTemp = sensorData[sensorData.length - 1].temp; //최신온도값(단일)
    const isAutoControl = autoControlState.status; //autoControlState가 배열이라면 수정필요(현재 단일객체에서 뽑은 단일값)

    let isAutoTemp = false;
    let autoStartAt = 0;
    //온도에 대한 자동제어가 진행중인지, 진행중이라면 언제부터 진행중인지 저장(단일)
    if (isAutoControl && autoControlState.target_temp) {
      isAutoTemp = true;
      autoStartAt = autoControlState.created_at;
    } else {
      isAutoTemp = false;
      autoStartAt = 0;
    }
    //액츄에이터가 작동된 로그 중에 FAN을 작동한(나중에 펠티어로 교체...)로그만 필터링한 새로운 (배열)
    const tempLog = actuatorLog.filter((obj) => obj.fan > 0);

    const res = {
      latestTemp: latestTemp,
      isAutoControl: isAutoControl,
      isAutoTemp: isAutoTemp,
      autoStartAt: autoStartAt,
      log: tempLog,
    };
    return res;
  },
});

// 로그인 토큰 관리
export const tokenState = atom({
  key: "tokenState",
  default: "",
});
