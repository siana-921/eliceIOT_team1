import { atom, selector } from 'recoil';

export const dashboardDataAtom = atom({
  key: 'dashboardDataAtom',
  default: [],
});

export const actuatorDataAtom = atom({
  key: 'actuatorDataAtom',
  default: [],
});

export const lightListSelector = selector({
  key: 'lightListSelector',
  get: ({ get }) => {
    const dashboardData = get(dashboardDataAtom);

    return dashboardData.map((d) => d.light);
  },
});

export const maxTempSelector = selector({
  key: 'maxTempSelector',
  get: ({ get }) => {
    const dashboardData = get(dashboardDataAtom);
    return Math.max(...dashboardData.map((d) => d.temp));
  },
});

export const minTempSelector = selector({
  key: 'maxTempSelector',
  get: ({ get }) => {
    const dashboardData = get(dashboardDataAtom);
    return Math.min(...dashboardData.map((d) => d.temp));
  },
});

/*
dashboardDataAtom
[
  {
    dId: '',
    light: 100,
    moisture: 50,
    temp: 36
  },
  {
    dId: '',
    light: 100,
    moisture: 50,
    temp: 36
  },
  {
    dId: '',
    light: 100,
    moisture: 50,
    temp: 36
  }
]

조도만 뽑아서 사용하는 컴포넌트가 100개다.
100, 200, 300, 400

A
dashboardData.map((d) => d.light)

B
dashboardData.map((d) => d.light)

...
*/
