import { selector } from "recoil";
import {
  sensorDataOriginAtom,
  userInfoAtom,
  deviceInfoAtom,
  autoControlConfigOriginAtom,
  actuatorLogAtom,
} from "@store/atoms";
import { maxBy } from "lodash";
import device000sensor from "@data/testingdata/device000sensor";
import device000actuator from "@data/testingdata/device000actuator";

const JSONdevice000sensor = JSON.parse(JSON.stringify(device000sensor));
const JSONdevice000actuator = JSON.parse(JSON.stringify(device000actuator));

// [셀렉터] 누적센서데이터 중 최신 데이터
export const lastSensorDataSelector = selector({
  key: "lastSensorDataSelector",
  get: ({ get }) => {
    let sensorDataOrigin = get(sensorDataOriginAtom);
    if (Array.isArray(sensorDataOrigin) && sensorDataOrigin.length < 1) {
      sensorDataOrigin = [...JSONdevice000sensor];
    }
    return maxBy(sensorDataOrigin, (data) => new Date(data.created_at).getTime());
  },
});

//[셀렉터] 누적센서데이터의 created_at을 DATE와 TIME으로 분리하여 저장
export const sensorDataSelector = selector({
  key: "sensorDataSelector",
  get: ({ get }) => {
    let sensorDataOrigin = get(sensorDataOriginAtom);

    if (Array.isArray(sensorDataOrigin) && sensorDataOrigin.length < 1) {
      sensorDataOrigin = [...JSONdevice000sensor];
    }

    const data = sensorDataOrigin.map((item) => {
      let originDate = item.created_at;

      if (originDate < 10000000000) {
        originDate *= 1000;
      }
      const unixTimeDate = new Date(originDate); //date 타입으로 저장

      //YYYY/MM/DD 스트링으로 저장
      const yyyy = unixTimeDate.getFullYear();
      const mm = String(unixTimeDate.getMonth() + 1).padStart(2, "0");
      const dd = String(unixTimeDate.getDate()).padStart(2, "0");
      const formattedDate = `${yyyy}/${mm}/${dd}`;

      //HH:mm:ss 스트링으로 저장
      const hh = String(unixTimeDate.getHours()).padStart(2, "0");
      const min = String(unixTimeDate.getMinutes()).padStart(2, "0");
      const sec = String(unixTimeDate.getSeconds()).padStart(2, "0");
      const formattedTime = `${hh}:${min}:${sec}`;

      const newItem = {
        ...item,
        created_at: unixTimeDate,
        date: formattedDate,
        time: formattedTime,
      };

      return newItem;
    });
    console.log(data);
    return data;
  },
});

// [셀렉터] 하루 평균 센서데이터를 저장한 배열
export const dailyAverageSensorDataSelector = selector({
  key: "dailyAverageSensorDataSelector",
  get: ({ get }) => {
    const sensorData = get(sensorDataSelector);

    console.log(sensorData);

    const calSum = sensorData.reduce((acc, cur) => {
      if (acc.length === 0 || acc[acc.length - 1].date !== cur.date) {
        acc.push({
          date: cur.date,
          count: 0,
          sumLight: 0,
          sumMoisture: 0,
          sumTemp: 0,
          sumHumidity: 0,
        });
      }
      acc[acc.length - 1].sumLight += cur.light;
      acc[acc.length - 1].sumMoisture += cur.moisture;
      acc[acc.length - 1].sumTemp += cur.temp;
      acc[acc.length - 1].sumHumidity += cur.humidity;
      acc[acc.length - 1].count++;

      return acc;
    }, []);

    //최대값 기준과 백분율 반영
    const MAXLUX = 150;
    const MAXMOIST = 23;

    const calAvg = calSum.map((item) => {
      const lightAvg = Math.floor(item.sumLight / item.count / MAXLUX);
      const moistureAvg = Math.floor(item.sumMoisture / item.count / MAXMOIST);
      const tempAvg = Math.floor(item.sumTemp / item.count);
      const humidityAvg = Math.floor(item.sumHumidity / item.count);
      return { light: lightAvg, moisture: moistureAvg, temp: tempAvg, humidity: humidityAvg };
    });

    return calAvg;
  },
});

// [셀렉터] 자동제어 상태 포맷 변경 (배열->단일객체, unixTime->string)
export const autoControlConfigSeletor = selector({
  key: "autoControlConfigSeletor",
  get: ({ get }) => {
    const autoControlConfigOrigin = get(autoControlConfigOriginAtom);
    console.log(autoControlConfigOrigin);

    if (autoControlConfigOrigin.length > 0) {
      const date = new Date(autoControlConfigOrigin[0].created_at);

      const dateString = `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      const newObject = { ...autoControlConfigOrigin[0], created_at: dateString };
      console.log(autoControlConfigOrigin);
      console.log(newObject);

      return newObject;
    }
  },
});

// [셀렉터] 온도에 관한 모든 데이터
/*export const temperatureAtom = selector({
  key: "temperatureAtom",
  get: ({ get }) => {
    const sensorData = get(sensorDataAtom); //배열객체 -api연결완료
    const autoControlConfig = get(autoControlConfigAtom); //단일객체
    const actuatorLog = get(actuatorLogAtom); //배열객체

    const latestTemp = sensorData[sensorData.length - 1].temp; //최신온도값(단일)
    const isAutoControl = autoControlConfig.status; //autoControlConfig가 배열이라면 수정필요(현재 단일객체에서 뽑은 단일값)

    let isAutoTemp = false;
    let autoStartAt = 0;
    //온도에 대한 자동제어가 진행중인지, 진행중이라면 언제부터 진행중인지 저장(단일)
    if (isAutoControl && autoControlConfig.target_temp) {
      isAutoTemp = true;
      autoStartAt = autoControlConfig.created_at;
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
*/
