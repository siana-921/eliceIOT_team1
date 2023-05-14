import { selector } from "recoil";
import {
  sensorDataAtom,
  userInfoAtom,
  deviceInfoAtom,
  autoControlStateAtom,
  actuatorLogAtom,
} from "@store/atoms";

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
