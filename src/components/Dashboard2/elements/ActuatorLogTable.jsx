import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { useTable } from "react-table";
import React, { useMemo } from "react";

import device000actuator from "../../../data/testingdata/device000actuator";

const ActuatorLogTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "날짜",
        accessor: (row) => new Intl.DateTimeFormat("ko-KR").format(row.created_at),
      },
      {
        Header: "시간",
        accessor: () => "?",
      },
      {
        Header: "액츄에이터 종류",
        accessor: () => "LED",
      },
      {
        Header: "제어값",
        accessor: "led",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: device000actuator,
  });
  return (
    <Main>
      <table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TitleRow key={headerGroup.Header} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </TitleRow>
          ))}
        </TableHead>
        <tbody {...getTableBodyProps()}>
          {rows.slice(0, 10).map((row, i) => {
            prepareRow(row);
            return (
              <BodyRow key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td key={cell.row.id} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </BodyRow>
            );
          })}
        </tbody>
      </table>
    </Main>
  );
};

export default ActuatorLogTable;

const Main = styled.div`
  width: 100%;
  height: 100%;
  table {
    width: 100%;
    text-align: center;
  }
`;
const TableHead = styled.thead`
  font-size: 1.3vw;
  font-weight: 600;
  border-bottom: solid 1px #000000;
`;
const TitleRow = styled.tr`
  height: 50px;
`;
const BodyRow = styled.tr`
  height: 20px;
`;
