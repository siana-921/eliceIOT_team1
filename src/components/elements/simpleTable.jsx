import React from "react";
import styled from "@emotion/styled";

function SimpleTable(props) {
  const { data } = props;

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>
            <TableHead>일자</TableHead>
          </th>
          <th>
            <TableHead>시간</TableHead>
          </th>
          <th>
            <TableHead>측정값</TableHead>
          </th>
          <th>
            <TableHead>변화량</TableHead>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.time}</td>
            <td>{item.act}</td>
            <td>{item.humid}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const TableHead = styled.th`
  padding: 10px;
`;
export default SimpleTable;
