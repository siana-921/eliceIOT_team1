import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { clientAtom, actuatorAtom } from "@store/atoms";
import { formatActuatorSelector } from "@store/selector";
import styled from "@emotion/styled";

import unit000_actuator from "../../../data/user000/actuatorLog";

const ActuatorLogTable = ({ category }) => {
  const [actuator, setActuator] = useRecoilState(actuatorAtom);
  const dataSelector = useRecoilValue(formatActuatorSelector);
  const client = useRecoilValue(clientAtom);
  const data = dataSelector;

  useEffect(() => {
    const fetchActuatorLog = async () => {
      try {
        const res = await axiosInstance.get(`/actuators/${client.device_id}?start_time=0`);
        setActuator(res.data);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${String(date.getMonth() + 1).padStart(2, "0")} / ${String(
      date.getDate()
    ).padStart(2, "0")}`;
    return formattedDate;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const formattedTime = `${date.getHours()}:${String(date.getMinutes()).padStart(
      2,
      "0"
    )}:${String(date.getSeconds()).padStart(2, "0")}`;
    return formattedTime;
  };

  return (
    <Main>
      <table>
        <Styled_thead>
          <tr>
            <Styled_th width="30%">날짜</Styled_th>
            <Styled_th width="30%">시간</Styled_th>
            <Styled_th width="20%">구분</Styled_th>
            <Styled_th width="20%">제어값</Styled_th>
          </tr>
        </Styled_thead>
        <Styled_tbody>
          {category === "peltier"
            ? data
                .slice(0, 10)
                .reverse()
                .map((row, index) => (
                  <Styled_tr key={index}>
                    <Styled_td>{formatDate(row.created_at)}</Styled_td>
                    <Styled_td>{formatTime(row.created_at)}</Styled_td>
                    <Styled_td>{category}</Styled_td>
                    <Styled_td>
                      {row[category] === 0 ? "OFF" : row[category] === 2 ? "COOL" : "HOT"}
                    </Styled_td>
                  </Styled_tr>
                ))
            : data
                .slice(0, 10)
                .reverse()
                .map((row, index) => (
                  <Styled_tr key={index}>
                    <Styled_td>{formatDate(row.created_at)}</Styled_td>
                    <Styled_td>{formatTime(row.created_at)}</Styled_td>
                    <Styled_td>{category}</Styled_td>
                    <Styled_td>{row[category] === 0 ? "OFF" : "ON"}</Styled_td>
                  </Styled_tr>
                ))}
        </Styled_tbody>
      </table>
    </Main>
  );
};

export default ActuatorLogTable;
const Main = styled.div`
  position: relative;
  width: 100%;

  > * {
    width: 100%;
  }
`;
const Styled_thead = styled.thead`
  height: 35px;
  font-size: 18px;
`;
const Styled_th = styled.th`
  width: ${({ width }) => width}%;
`;
const Styled_tbody = styled.tbody`
  line-height: 1.5rem;
`;
const Styled_tr = styled.tr`
  margin-bottom: 10px;
`;
const Styled_td = styled.td`
  text-align: center;
`;
