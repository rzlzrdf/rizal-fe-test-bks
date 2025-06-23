"use client";

import { useEffect, useState } from "react";
import CardData from "./components/CardData";
import Table from "./components/table";
import axios from "axios";
import { LoaderIcon } from "lucide-react";

export interface WeekData {
  branch: string;
  W1: number;
  W2: number;
  W3: number;
  W4: number;
  W5: number;
  W6: number;
  W7: number;
  W8: number;
  W9: number;
}

export default function Home() {
  const [data, setData] = useState<WeekData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tableData, setTableData] = useState<number>(0);

  console.log(tableData);

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: "GET",
        url: "/api/table",
      })
        .then((res) => {
          const { data } = res.data;
          setIsLoading(false);
          setData(data);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <main className="min-h-[90vh] w-full grid grid-cols-12 gap-10 px-5 lg:px-[5vw] py-3">
      <div className="col-span-8" id="table">
        <div className="p-5 shadow-2xl rounded-2xl h-[70svh]">
          <p className="py-5 text-xl">Table View</p>
          <Table data={data} tableData={tableData} />
        </div>
      </div>
      <div className="col-span-4">
        <p className="p-5 text-2xl px-3">Data</p>
        {isLoading ? (
          <div className=" w-full grid place-content-center">
            <LoaderIcon className="animate-spin" />
          </div>
        ) : (
          <CardData data={data} setTableData={setTableData}  />
        )}
      </div>
    </main>
  );
}
