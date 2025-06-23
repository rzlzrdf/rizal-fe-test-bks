"use client";

import React from "react";
import { WeekData } from "../page";

type Props = {
  data: WeekData[];
  tableData: number;
};

const Table = ({ data, tableData }: Props) => {
    
  return (
    <table className="w-full">
      <thead className="font-bold border-b-2 mx-5">
        <tr>
          <td>Branch</td>
          {tableData
            ? Array.from({ length: tableData }, (_, i) => i).map(
                (item: number, key: React.Key) => <td key={key}>W{item+1}</td>
              )
            : null}
        </tr>
      </thead>
      {tableData ? (
        <tbody>
          {data.map((item: WeekData) => (
            <tr key={item.branch} className="">
              <td className="py-3">{item.branch}</td>

            </tr>
          ))}
        </tbody>
      ) : null}
      <tfoot className="py-3">
        <tr>
            <td className="font-bold">Total</td>
            {tableData
            ? Array.from({ length: tableData }, (_, i) => i).map(
                (item: number, key: React.Key) => <td key={key}>X</td>
              )
            : null}
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
