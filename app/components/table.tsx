"use client";

import React, { useEffect, useState } from "react";
import { WeekData } from "../page";

type Props = {
  data: WeekData[];
  tableData: number;
};

interface perWeekData {
  branch: string;
  week: number[];
}

const Table = ({ data, tableData }: Props) => {
  const [horizontalData, setHorizontalData] = useState<perWeekData[]>([]);
  const [total_, setTotal_] = useState<number[]>([]);

  useEffect(() => {
    if (!data) return;

    // Jika melebihi 9 minggu, kosongkan semua
    if (tableData > 9) {
      setHorizontalData([]);
      setTotal_([]);
      return;
    }

    const branch_: perWeekData[] = data.map((branchData) => ({
      branch: branchData.branch,
      week: Array.from({ length: tableData }, (_, i) => {
        const key = `W${i + 1}` as keyof typeof branchData;
        return typeof branchData[key] === "number"
          ? (branchData[key] as number)
          : 0;
      }),
    }));

    setHorizontalData(branch_);

    const totals = Array.from({ length: tableData }, (_, i) =>
      branch_.reduce((sum, item) => sum + (item.week[i] ?? 0), 0)
    );

    setTotal_(totals);
  }, [data, tableData]);
  const grandTotal = total_.reduce((sum, val) => sum + val, 0);

  return (
    <table className="w-full">
      <thead className="font-bold border-b-2 mx-5">
        <tr>
          <td>Branch</td>
          {tableData && tableData <= 9
            ? Array.from({ length: tableData }, (_, i) => i).map(
                (item: number, key: React.Key) => <td key={key}>W{item + 1}</td>
              )
            : null}
        </tr>
      </thead>
      {tableData ? (
        <tbody>
          {horizontalData.map((item: perWeekData) => (
            <tr key={item.branch} className="">
              <td className="py-3">{item.branch}</td>
              {item.week.map((qtyWeek: number, key: React.Key) => (
                <td key={key}>{Math.floor(qtyWeek)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      ) : null}
      {tableData ? (
        <tfoot className="py-3">
          <tr>
            <td className="font-bold">
              Total <span>({Math.floor(grandTotal)})</span>
            </td>
            {total_.map((t, i) => (
              <td key={i}>{Math.floor(t)}</td>
            ))}
          </tr>
        </tfoot>
      ) : null}
    </table>
  );
};

export default Table;
