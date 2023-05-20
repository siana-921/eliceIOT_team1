import { selector } from "recoil";
import { userAtom, deviceAtom, autoConfigAtom, sensorAtom, actuatorAtom } from "@store/atoms";
import { maxBy, meanBy } from "lodash";
import device000sensor from "@data/user000/sensorLog";
import device000actuator from "@data/user000/actuatorLog";

const JSONdevice000sensor = JSON.parse(JSON.stringify(device000sensor));
const JSONdevice000actuator = JSON.parse(JSON.stringify(device000actuator));

// [셀렉터:필터] 누적센서데이터 중 최신 데이터
export const latestSensorSelector = selector({
  key: "latestSensorSelector",
  get: ({ get }) => {
    let origin = get(sensorAtom);
    if (!origin) {
      return null;
    }
    return maxBy(origin, (data) => new Date(data.created_at).getTime());
    //return [];
  },
});

//[셀렉터:포맷] 누적센서데이터의 created_at을 DATE와 TIME으로 분리하여 저장
export const formatSensorSelector = selector({
  key: "formatSensorSelector",
  get: ({ get }) => {
    let origin = get(sensorAtom);
    if (!origin) {
      return null;
    }

    const data = origin.map((item) => {
      const delFalsy = { ...item };
      Object.keys(delFalsy).forEach((key) => {
        if ([null, undefined, 0, false].includes(delFalsy[key])) {
          delFalsy[key] = 1;
        } else if (delFalsy[key] < 0) {
          delFalsy[key] = 1;
        }
      });

      const unixTimeMS = item.created_at < 10000000000 ? item.created_at * 1000 : item.created_at;

      const unixTimeDate = new Date(unixTimeMS); //date 타입으로 저장

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
        ...delFalsy,
        created_at: unixTimeDate,
        date: formattedDate,
        time: formattedTime,
      };

      return newItem;
    });
    return data;
  },
});

// [셀렉터:계산] 센서데이터를 한시간마다 하나씩 저장
export const hourlySensorSelector = selector({
  key: "hourlySensorSelector",
  get: ({ get }) => {
    const origin = get(formatSensorSelector);
    if (!origin) {
      return null;
    }
    const newArr = origin.reduce((acc, cur) => {
      if (
        acc.length === 0 ||
        acc[acc.length - 1].time.substr(0, 2) !== cur.time.substr(0, 2) ||
        acc[acc.length - 1].date !== cur.date
      ) {
        acc.push(cur);
      }
      return acc;
    }, []);
    return newArr;
  },
});

// [셀렉터:계산] 하루 평균 센서데이터를 저장한 배열
export const dailyAverageSensorSelector = selector({
  key: "dailyAverageSensorSelector",
  get: ({ get }) => {
    const origin = get(formatSensorSelector);
    if (!origin) {
      return null;
    }

    const calSum = origin.reduce((acc, cur) => {
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

// [셀렉터:계산] 일별 평균 센서값 배열의 최소, 최대값 계산
export const dailyAverageMaxMinSelector = selector({
  key: "dailyAverageMaxMinSelector",
  get: ({ get }) => {
    const origin = get(dailyAverageSensorSelector);
    if (!origin) {
      return null;
    }

    const res = origin.reduce(
      (acc, cur) => {
        if (cur.temp !== 0) {
          acc.temp.max = Math.max(acc.temp.max, cur.temp);
          acc.temp.min = Math.min(acc.temp.min, cur.temp);
        }
        if (cur.humidity !== 0) {
          acc.humidity.max = Math.max(acc.humidity.max, cur.humidity);
          acc.humidity.min = Math.min(acc.humidity.min, cur.humidity);
        }
        if (cur.light !== 0) {
          acc.light.max = Math.max(acc.light.max, cur.light);
          acc.light.min = Math.min(acc.light.min, cur.light);
        }
        if (cur.moisture !== 0) {
          acc.moisture.max = Math.max(acc.moisture.max, cur.moisture);
          acc.moisture.min = Math.min(acc.moisture.min, cur.moisture);
        }
        return acc;
      },
      {
        temp: { max: 0, min: Infinity },
        humidity: { max: 0, min: Infinity },
        light: { max: 0, min: Infinity },
        moisture: { max: 0, min: Infinity },
      }
    );

    return res;
  },
});

// [셀렉터:포맷] 자동제어상태 배열->단일객체, unixTime->string
export const formatAutoConfigSelector = selector({
  key: "formatAutoConfigSelector",
  get: ({ get }) => {
    const origin = get(autoConfigAtom);
    if (!origin) {
      return null;
    }

    const date = new Date(origin.created_at || 1682658179000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const dateString = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;

    const newObject = { ...origin, created_at: dateString };
    return newObject;
  },
});

// [셀렉터:포맷] 누적 액츄에이터 로그 unixtime*1000
export const formatActuatorSelector = selector({
  key: "formatActuatorSelector",
  get: ({ get }) => {
    const origin = get(actuatorAtom);
    if (!origin) {
      return null;
    }

    const newLog = origin.map((item) => {
      return {
        ...item,
        created_at: item.created_at < 10000000000 ? item.created_at * 1000 : item.created_at,
      };
    });

    return newLog;
  },
});

export const dayAndNightSelector = selector({
  key: "dayAndNightSelector",
  get: ({ get }) => {
    const origin = get(formatSensorSelector);
    if (!origin) {
      return null;
    }

    const calArr = origin.reduce((acc, cur) => {
      if (acc.length === 0 || acc[acc.length - 1].date !== cur.date) {
        acc.push({
          date: cur.date,
          day: [],
          night: [],
        });
      }

      const hour = parseInt(cur.time.substr(0, 2));

      if (hour >= 6 && hour <= 18) {
        acc[acc.length - 1].day.push(cur);
      } else {
        acc[acc.length - 1].night.push(cur);
      }

      return acc;
    }, []);

    const newArr = calArr.map((item) => {
      const dayAvg = {
        temp: isNaN(meanBy(item.day, "temp").toFixed(1)) ? 1 : meanBy(item.day, "temp").toFixed(1),
        light: isNaN(meanBy(item.day, "light").toFixed(0))
          ? 1
          : meanBy(item.day, "light").toFixed(0),
        moisture: isNaN(meanBy(item.day, "moisture").toFixed(0))
          ? 1
          : meanBy(item.day, "moisture").toFixed(0),
        humidity: isNaN(meanBy(item.day, "humidity").toFixed(0))
          ? 1
          : meanBy(item.day, "moisture").toFixed(0),
      };
      const nightAvg = {
        temp: isNaN(meanBy(item.night, "temp").toFixed(1))
          ? 1
          : meanBy(item.night, "temp").toFixed(1),
        light: isNaN(meanBy(item.night, "light").toFixed(0))
          ? 1
          : meanBy(item.night, "light").toFixed(0),
        moisture: isNaN(meanBy(item.night, "moisture").toFixed(0))
          ? 1
          : meanBy(item.moisture, "moisture").toFixed(0),
        humidity: isNaN(meanBy(item.night, "humidity").toFixed(0))
          ? 1
          : meanBy(item.night, "humidity").toFixed(0),
      };

      const res = { ...item, dayAvg: dayAvg, nightAvg: nightAvg };
      return res;
    });

    return newArr;
  },
});
