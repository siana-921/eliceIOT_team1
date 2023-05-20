import { atom } from "recoil";
import device000sensor from "@data/user000/sensorLog";
const JSONdevice000sensor = JSON.parse(JSON.stringify(device000sensor));

//현재 로그인한 녀석의 정보 (단일객체)
export const clientAtom = atom({
  key: "clientAtom",
  default: {
    user_id: "user333",
    device_id: "B48A0A75ADA0",
  },
});

//유저 정보 (단일객체)
export const userAtom = atom({
  key: "userAtom",
  default: {
    id: "user333",
    fullname: "정수아",
    phone: "010-1234-5678",
    email: "basilfarm@gmail.com",
    picture: 2,
    device_id: "B48A0A75ADA0",
    created_at: 1684470230378,
  },
});

//디바이스 정보 (배열로 오지만 set할때 0번째 인덱스를 set -> 단일객체)
export const deviceAtom = atom({
  key: "deviceAtom",
  default: {
    device_id: "B48A0A75ADA0",
    device_type: "esp32",
    device_macAddress: "B4:8A:0A:75:AD:A0",
    picture: 3,
  },
});

//디바이스 자동제어상태확인 (Origin: 언제나 객체 1개만 들어있는 배열로 옴)
//api/auto/:device_id/status
export const autoConfigAtom = atom({
  key: "autoConfigAtom",
  default: {},
});

//누적 센서 데이터 (객체배열)
export const sensorAtom = atom({
  key: "sensorAtom",
  default: JSONdevice000sensor,
});

//제어명령 누적 (객체배열)
export const actuatorAtom = atom({
  key: "actuatorAtom",
  default: [{}],
});

// ---------------------------------------------로그인---------------------------------------------------------

// 토큰 관리(사용자 인증과 관련된 모든 페이지에 적용해야할 듯)
// 사용 : login, mypage, dashboard
export const tokenState = atom({
  key: "tokenState",
  default: "",
});

// 로그인 상태를 관리하는 atom(로그아웃 처리를 위해서 작성)
// 사용 : login
// 예정 : mypage, dashboard
export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});

// 필요없을꺼 같은디,, 정리예정
export const signupState = atom({
  key: "signupState",
  default: {
    success: false,
  },
});

// 얘도 필요없을 듯
export const devicesState = atom({
  key: "devicesState",
  default: [],
});

// 사용 : mypage
export const defaultDeviceIdState = atom({
  key: "defaultDeviceIdState",
  default: "",
});

// 회원가입 시 선택하게 되는 사진
// 사용 : signup
// 예정 : (mypage, dashboard)
export const selectedPhotoState = atom({
  key: "selectedPhotoState",
  default: null,
});
