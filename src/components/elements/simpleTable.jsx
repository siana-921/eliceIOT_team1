import React from "react";
import styled from "@emotion/styled";

function SimpleTable(props) {
  const { data } = props;

  return (
    <table width="100%">
      <thead>
        <tr>
          <TableHead>Column 1</TableHead>
          <TableHead width="130px">Column 2</TableHead>
          <TableHead width="230px">Column 3</TableHead>
          <TableHead>Column 4</TableHead>
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
  padding-bottom: 10px;
`;
export default SimpleTable;
