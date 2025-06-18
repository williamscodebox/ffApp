// import { columns } from "./columns";
// import { DataTable } from "./data-table";

// async function getData() {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ];
// }

// export default async function DemoPage() {
//   const data = await getData();

//   return (
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function DemoPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ];
  }

  useEffect(() => {
    async function fetchData() {
      // Replace this with your actual fetch call
      try {
        setLoading(true);
        const response = await getData();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error loading data!</p>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
