import { atom, selector } from "recoil";

export const allDeviceSensorState = atom({
  key: "allDeviceSensorState",
  default: [],
});

export const oneDeviceSensorState = atom({
  key: "oneDeviceSensorState",
  default: {},
});

// 로그인

// 로그인 상태를 관리하는 atom
export const loginState = atom({
  key: "loginState",
  default: {
    id: "",
    password: "",
    loading: false,
    msg: "",
  },
});

// 로그인 액션 처리를 위한 selector
export const loginAction = selector({
  key: "loginAction",
  get: ({ get }) => {
    const login = get(loginState);
    // 로그인 액션을 처리하는 비동기 함수를 반환하도록 구현해야 합니다.
    return async () => {
      // 로그인 액션 처리
    };
  },
});
