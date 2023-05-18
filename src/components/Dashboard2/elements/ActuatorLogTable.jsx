import React from "react";
import { useRecoilValue } from "recoil";
import { formatActuatorSelector } from "@store/selector";

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
    <div>
      <table>
        <thead>
          <tr>
            <th width="28%">날짜</th>
            <th width="32%">시간</th>
            <th width="20%">구분</th>
            <th width="20%">제어값</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((row) => (
            <tr key={row.id}>
              <td>{formatDate(row.created_at)}</td>
              <td>{formatTime(row.created_at)}</td>
              <td>LED</td>
              <td>{row.led === 255 ? "ON" : "OFF"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActuatorLogTable;
