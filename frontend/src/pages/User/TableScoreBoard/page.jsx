import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useFetchLeaderboardQuery } from "@/redux/api/leaderboard";

export default function DemoPage() {
  const { data, isLoading, error } = useFetchLeaderboardQuery();

  // async function getData() {

  //   // Fetch data from your API here.
  //   return;
  //   data;
  // return [
  //   // {
  //   //   id: "728ed52f",
  //   //   amount: 100,
  //   //   status: "pending",
  //   //   email: "m@example.com",
  //   // },
  //   {
  //     Name: "tanner",
  //     Week_1: 12,
  //     Week_2: 10,
  //     Week_3: 9,
  //     Week_4: 14,
  //     Week_5: 10,
  //     Week_6: 6,
  //     Week_7: 13,
  //     Week_8: 8,
  //     Week_9: 8,
  //     Week_10: 12,
  //     Week_11: 11,
  //     Week_12: 11,
  //     Week_13: 9,
  //     Week_14: 7,
  //     Week_15: 11,
  //     Week_16: 5,
  //     Week_17: 12,
  //     Week_18: 14,
  //     Total: 100,
  //   },
  //   {
  //     Name: "tandy",
  //     Week_1: 12,
  //     Week_2: 10,
  //     Week_3: 9,
  //     Week_4: 14,
  //     Week_5: 10,
  //     Week_6: 6,
  //     Week_7: 13,
  //     Week_8: 8,
  //     Week_9: 8,
  //     Week_10: 12,
  //     Week_11: 11,
  //     Week_12: 11,
  //     Week_13: 9,
  //     Week_14: 7,
  //     Week_15: 11,
  //     Week_16: 5,
  //     Week_17: 12,
  //     Week_18: 14,
  //     Total: 100,
  //   },
  //   {
  //     Name: "joe",
  //     Week_1: 12,
  //     Week_2: 10,
  //     Week_3: 9,
  //     Week_4: 14,
  //     Week_5: 10,
  //     Week_6: 6,
  //     Week_7: 13,
  //     Week_8: 8,
  //     Week_9: 8,
  //     Week_10: 12,
  //     Week_11: 11,
  //     Week_12: 11,
  //     Week_13: 9,
  //     Week_14: 7,
  //     Week_15: 11,
  //     Week_16: 5,
  //     Week_17: 12,
  //     Week_18: 14,
  //     Total: 100,
  //   },
  //   {
  //     Name: "joe",
  //     Week_1: 12,
  //     Week_2: 10,
  //     Week_3: 9,
  //     Week_4: 14,
  //     Week_5: 10,
  //     Week_6: 6,
  //     Week_7: 13,
  //     Week_8: 8,
  //     Week_9: 8,
  //     Week_10: 12,
  //     Week_11: 11,
  //     Week_12: 11,
  //     Week_13: 9,
  //     Week_14: 7,
  //     Week_15: 11,
  //     Week_16: 5,
  //     Week_17: 12,
  //     Week_18: 14,
  //     Total: 100,
  //   },
  //   // ...
  //   // ];
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     // Replace this with your actual fetch call
  //     try {
  //       setLoading(true);
  //       const response = await getData();
  //       setData(response);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="container mx-auto py-6">
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error loading data!</p>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
