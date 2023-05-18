import React from "react";
import { useRecoilValue } from "recoil";
import { formatActuatorSelector } from "@store/selector";
import styled from "@emotion/styled";

import unit000_actuator from "../../../data/user000/actuatorLog";

const ActuatorLogTable = () => {
  const dataAtom = useRecoilValue(formatActuatorSelector);
  const data = dataAtom.length > 0 ? dataAtom : unit000_actuator;

  console.log(data);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth() + 1} / ${date.getDate()}`;
    return formattedDate;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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
          {data.slice(0, 10).map((row) => (
            <Styled_tr key={row.id}>
              <Styled_td>{formatDate(row.created_at)}</Styled_td>
              <Styled_td>{formatTime(row.created_at)}</Styled_td>
              <Styled_td>LED</Styled_td>
              <Styled_td>{row.led === 255 ? "ON" : "OFF"}</Styled_td>
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
