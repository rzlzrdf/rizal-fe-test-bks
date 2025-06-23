"use client";

import React, { Dispatch, SetStateAction } from "react";
import { WeekData } from "../page";

type Props = {
  data: WeekData[];
  setTableData: Dispatch<SetStateAction<number>>;
};

const CardData = ({ data, setTableData }: Props) => {
  const handleAdd = () => {
    setTableData((prev) => (prev < 9 ? prev + 1 : 0));
  };

  return (
    <div className="w-full relative h-[70svh] overflow-y-auto pt-5 rounded-2xl shadow-2xl">
      {data.map((item: WeekData, index: number) => {
        const weeks = Object.entries(item)
          .filter(([key]) => key.startsWith("W"))
          .map(([_, value]) => value);

        

        return (
          <div className="p-5" key={index + item.W1}>
            {weeks.map((weekItem: string | number, num: number) => {
              const box = typeof weekItem == "number" ? weekItem : 0;
              return (
                <div className={"flex justify-between items-center"} key={box}>
                  <div className="flex items-center gap-5">
                    <p>W{num + 1}</p>
                    {item.branch}
                  </div>
                  <div className="text-bottom">{Math.floor(box)} Box</div>
                </div>
              );
            })}
          </div>
        );
      })}

      <div className="w-full p-5 bg-white sticky bottom-0 left-0">
        <button
          type="button"
          onClick={handleAdd}
          className="w-full cursor-pointer  text-white p-3 duration-300 rounded-xl bg-gradient-to-l from-[#43529C] to-[#A4B3FF] hover:to-[#8290d5]"
        >
          Add Data
        </button>
      </div>
    </div>
  );
};

export default CardData;
