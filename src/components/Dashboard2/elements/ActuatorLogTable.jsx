import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorCodeAtom } from "@store/atoms";
import { useTable } from "react-table";
import React, { useMemo } from "react";

import ActuatorLog from "@data/testingdata/actuatorLog";

const ActuatorLogTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "날짜",
        accessor: "created_at",
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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, ActuatorLog });
  const colorCode = useRecoilValue(colorCodeAtom);

  return (
    <Main>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
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
`;
