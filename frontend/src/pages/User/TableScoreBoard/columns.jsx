// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns = [
  {
    accessorKey: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 1",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 2",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 3",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 4",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 5",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 6",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 7",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 8",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 9",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "Week 10",
    cell: (info) => info.getValue(),
    // header: () => <span>Last Name</span>,
  },

  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
  },
  {
    accessorKey: "status",
    header: "Total Points",
    footer: (props) => props.column.id,
  },
  // {
  //   accessorKey: "progress",
  //   header: "Profile Progress",
  //   footer: (props) => props.column.id,
  // },
];
